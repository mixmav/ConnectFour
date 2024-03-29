<template>
    <div
        id="board"
        class="no-select"
        :class="[
            'current-player-' + currentPlayer,
            { disabled: !playerCanPlay },
        ]"
    >
        <div
            class="board-col"
            v-for="(i, col) in boardSlots"
            :class="[{ 'col-full': colIsFull(col) }]"
            :key="col"
            @click="checkSlot(col)"
            @mouseover="addHoverClass(col)"
            @mouseleave="removeHoverClass(col)"
        >
            <div
                class="board-slot"
                v-for="(boardSlot, row) in i"
                :key="row"
                :class="[
                    'ownedBy-player-' + boardSlot.owner,
                    {
                        hover: boardSlot.hover && boardSlot.owner == 0,
                        winner: boardSlot.winner,
                        glow: shouldGlow(row, col),
                    },
                ]"
            >
                <i class="fa fa-crown" v-if="boardSlot.winner"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { Howl } from 'howler';
import coinSound from '/audio/coin.mp3';

export default {
    mounted() {
        this.howl = new Howl({
            src: [coinSound],
        });
    },

    created() {
        for (var i = 0; i < this.numOfCols; i++) {
            this.setBoardSlotsArray({
                index: i,
                value: [],
            });
        }

        var row = 0;
        var col = 0;

        for (var i = 1; i <= this.numOfCols * this.numOfRows; i++) {
            this.pushObjectToBoardSlotsArray({
                index: col,
                object: {
                    owner: 0,
                    hover: false,
                    winner: false,
                    row: row,
                    col: col,
                },
            });

            row++;

            if (row == this.numOfRows) {
                row = 0;
                if (col < this.numOfCols - 1) {
                    col++;
                }
            }
        }
    },

    data() {
        return {
            howl: {},
        };
    },

    computed: {
        ...mapState(['currentPlayer', 'playerCanPlay']),
        ...mapState('Board', ['boardSlots', 'moves', 'numOfRows', 'numOfCols']),
    },

    methods: {
        ...mapActions(['swapToNextPlayer']),

        ...mapActions('Board', [
            'setBoardSlotsArray',
            'pushObjectToBoardSlotsArray',
            'updateSpecificSlotProperty',
            'pushToMovesArray',
            'setUndoneMovesArray',
        ]),

        shouldGlow(row, col) {
            if (this.moves.length > 0) {
                if (
                    this.moves[this.moves.length - 1].row == row &&
                    this.moves[this.moves.length - 1].col == col
                ) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        },

        colIsFull(col) {
            var isFull = true;
            for (var i = this.boardSlots[0].length - 1; i >= 0; i--) {
                if (this.boardSlots[col][i].owner == 0) {
                    isFull = false;
                    break;
                }
            }
            return isFull;
        },

        checkSlot(col) {
            if (this.playerCanPlay) {
                for (var i = this.boardSlots[0].length - 1; i >= 0; i--) {
                    if (this.boardSlots[col][i].owner == 0) {
                        this.updateSpecificSlotProperty({
                            col: col,
                            row: i,
                            property: 'owner',
                            value: this.currentPlayer,
                        });
                        this.updateSpecificSlotProperty({
                            col: col,
                            row: i,
                            property: 'hover',
                            value: false,
                        });

                        this.swapToNextPlayer();
                        this.pushToMovesArray({
                            row: i,
                            col: col,
                            owner: this.currentPlayer,
                        });

                        this.setUndoneMovesArray([]);
                        this.howl.play();
                        // this.$root.$emit('checkForWin', {row: i, col: col});
                        this.emitter.emit('checkForWin', { row: i, col: col });
                        break;
                    }
                }
            }
        },

        addHoverClass(col) {
            if (!this.colIsFull(col) && this.playerCanPlay) {
                for (var i = 5; i >= 0; i--) {
                    if (this.boardSlots[col][i].owner == 0) {
                        this.updateSpecificSlotProperty({
                            col: col,
                            row: i,
                            property: 'hover',
                            value: true,
                        });
                        break;
                    }
                }
            }
        },

        removeHoverClass(col) {
            for (var i = 5; i >= 0; i--) {
                if (this.boardSlots[col][i].owner == 0) {
                    this.updateSpecificSlotProperty({
                        col: col,
                        row: i,
                        property: 'hover',
                        value: false,
                    });
                    break;
                }
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../sass/variables';

#board {
    margin-top: 40px;
    text-align: center;
    &.disabled {
        pointer-events: none;
    }
    .board-col {
        padding: 15px;
        display: inline-block;
        border: {
            top: solid 2px $board-border-color;
            bottom: solid 2px $board-border-color;
        }

        background: $board-background;
        transition: all 0.2s;
        cursor: pointer;

        &:hover {
            background: darken($board-background, 5%);
        }

        &:first-child {
            border-left: solid 2px $board-border-color;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
        }
        &:last-child {
            border-right: solid 2px $board-border-color;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        &.col-full {
            cursor: default;
        }

        .board-slot {
            margin-top: 20px;
            border: solid 2px $body-background;
            background: white;
            transition: all 0.3s;
            &:first-child {
                margin-top: 0;
            }
            position: relative;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            transition: all 0.2s;

            &.ownedBy-player-1 {
                border-color: darken($player-1-color, 10%);
                background: $player-1-color;
            }

            &.ownedBy-player-2 {
                border-color: darken($player-2-color, 20%);
                background: $player-2-color;
            }

            i {
                position: absolute;
                top: 50%;
                left: 50%;
                color: white;
                font-size: 0.8em;
                transform: translate(-50%, -50%);
            }

            &.winner {
                transform: scale(1.2, 1.2);
            }

            &.ownedBy-player-1 {
                animation: scaleBounce 0.5s linear;
                &.glow {
                    animation:
                        scaleBounce 0.5s linear,
                        glow 0.5s infinite alternate;
                }
            }

            &.ownedBy-player-2 {
                animation: scaleBounce 0.5s linear;
                &.glow {
                    animation:
                        scaleBounce 0.5s linear,
                        glow 0.5s infinite alternate;
                }
            }
        }
    }
    &.current-player-1 {
        .board-col {
            .board-slot.hover {
                // border-color: darken($player-1-color, 10%);
                background: lighten($player-1-color, 5%);
            }
        }
    }

    &.current-player-2 {
        .board-col {
            .board-slot.hover {
                // border-color: darken($player-2-color, 10%);
                background: lighten($player-2-color, 5%);
            }
        }
    }
}

@include media(465px) {
    #board {
        .board-col {
            padding: {
                left: 10px;
                right: 10px;
            }
            &:first-child {
                padding-left: 15px;
            }
            &:last-child {
                padding-right: 15px;
            }
            .board-slot {
                width: 25px;
                height: 25px;
            }
        }
    }
}

@include media(370px) {
    #board {
        .board-col {
            padding: {
                left: 8px;
                right: 8px;
            }
            &:first-child {
                padding-left: 12px;
            }
            &:last-child {
                padding-right: 12px;
            }
            .board-slot {
                width: 20px;
                height: 20px;
            }
        }
    }
}
</style>
