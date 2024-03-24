<template>
    <div class="scoreboard">
        <div class="player-one" :class="{ 'now-playing': currentPlayer == 1 }">
            <div class="inline">
                <div class="checker player-1"></div>
            </div>
            <p class="score">{{ score.player1 }}</p>
        </div>
        <!--
	 -->
        <div class="player-two" :class="{ 'now-playing': currentPlayer == 2 }">
            <div class="inline">
                <div class="checker player-2"></div>
            </div>
            <p class="score">{{ score.player2 }}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['currentPlayer']),

        ...mapState('Scoreboard', ['score']),
    },
};
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.scoreboard {
    position: fixed;
    bottom: 50px;
    left: 50%;
    width: calc(100% - 50px);
    max-width: 500px;
    transform: translateX(-50%);
    .player-one,
    .player-two {
        text-align: center;
        border-radius: 30px;
        padding: 10px;
        position: relative;
        border: solid 1px $black;
        width: 50%;
        background: #fff;
        color: $black;
        display: inline-block;
        transition: all 0.3s;
        .inline {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .score {
            position: absolute;
            top: 50%;
            font-size: 1.5em;
            font-weight: 500;
            transform: translateY(-50%);
        }

        &.now-playing {
            background: $board-background;
            .score {
                color: white;
            }
        }
    }

    .player-one {
        padding-left: 20px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        .score {
            right: 35px;
        }

        &.now-playing {
            background: $board-background;
        }
    }
    .player-two {
        direction: rtl;
        padding-right: 20px;
        border-left: solid 1px $black;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        .score {
            left: 35px;
        }
    }

    div.checker {
        display: inline-block;
        border: solid 2px white;
        position: relative;
        transition: all 0.2s;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        transition: all 0.2s;

        &.player-1 {
            border-color: darken($player-1-color, 10%);
            background: $player-1-color;
        }

        &.player-2 {
            border-color: darken($player-2-color, 20%);
            background: $player-2-color;
        }
    }
}

@include media(650px) {
    .scoreboard {
        .player-one,
        .player-two {
            text-align: initial;
        }
    }
}

@include media(500px) {
    .scoreboard {
        .player-one {
            .score {
                right: 20px;
            }
        }
        .player-two {
            .score {
                left: 20px;
            }
        }
    }
}
</style>
