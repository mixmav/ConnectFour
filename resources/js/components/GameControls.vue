<template>
	<div class="container">
		<div class="controls">
			<div class="inline-flex">
				<button class="btn h-ripple full-width" :disabled="(moves.length == 0 || !playerCanPlay)" @click="undoLastMove"><i class="fa fa-undo-alt"></i>Undo</button>
				<button class="btn h-ripple full-width" :disabled="(undoneMoves.length == 0 || !playerCanPlay)" @click="redoLastMove"><i class="fa fa-redo-alt"></i>Redo</button>
			</div>
			<button class="btn h-ripple full-width red spaced-xl" @click="resetBoard"><i class="fa fa-recycle"></i>Reset Board</button>
			<!-- <button class="btn h-ripple full-width spaced blue" @click="updateMultiplayer(!multiplayer)"><i class="fa fa-globe-americas"></i>Toggle Multiplayer</button> -->
			<!-- <p class="multiplayer">Multiplayer is <span :class="{green: multiplayer}">{{multiplayerStatus}}</span></p> -->
		</div>		
	</div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import { Howl } from 'howler';

export default {
	mounted(){
		this.howl = new Howl({
			src: ['/sounds/player-move.mp3'],
		});
	},

	computed: {
		...mapState([
			'currentPlayer',
			'multiplayer',
			'playerCanPlay'
		]),

		...mapState('Board', [
			'boardSlots',
			'moves',
			'undoneMoves',
		]),

		multiplayerStatus(){
			if (this.multiplayer) {
				return "ON";
			} else {
				return "OFF";
			}
		}
	},

	data() {
		return {
			howl: {},
		}
	},

	methods: {
		...mapActions([
			'swapToNextPlayer',
			'updateMultiplayer',
			'updatePlayerCanPlay',
		]),

		...mapActions('Board', [
			'updateSpecificSlotProperty',
			'popMovesArray',
			'pushToMovesArray',
			'setMovesArray',

			'popUndoneMovesArray',
			'pushToUndoneMovesArray',
			'setUndoneMovesArray',
		]),

		resetBoard(){
			for (var i = this.boardSlots.length - 1; i >= 0; i--) {
				for (var j = this.boardSlots[i].length - 1; j >= 0; j--) {
					this.updateSpecificSlotProperty({
						col: i,
						row: j,
						property: 'owner',
						value: 0
					});

					this.updateSpecificSlotProperty({
						col: i,
						row: j,
						property: 'hover',
						value: false
					});

					this.updateSpecificSlotProperty({
						col: i,
						row: j,
						property: 'winner',
						value: false
					});
				}
			}
			if (this.currentPlayer == 2) {
				this.swapToNextPlayer();
			}
			this.setMovesArray([]);
			this.setUndoneMovesArray([]);
			this.updatePlayerCanPlay(true);
			this.howl.play();
		},

		undoLastMove(){
			this.updateSpecificSlotProperty({
				col: this.moves[this.moves.length - 1].col,
				row: this.moves[this.moves.length - 1].row,
				property: 'owner',
				value: 0
			});
			
			this.swapToNextPlayer();
			
			this.pushToUndoneMovesArray({
				row: this.moves[this.moves.length - 1].row,
				col: this.moves[this.moves.length - 1].col,
				owner: this.currentPlayer,
			});

			this.popMovesArray();
		},

		redoLastMove(){
			this.updateSpecificSlotProperty({
				col: this.undoneMoves[this.undoneMoves.length - 1].col,
				row: this.undoneMoves[this.undoneMoves.length - 1].row,
				property: 'owner',
				value: this.undoneMoves[this.undoneMoves.length - 1].owner
			});

			this.pushToMovesArray({
				row: this.undoneMoves[this.undoneMoves.length - 1].row,
				col: this.undoneMoves[this.undoneMoves.length - 1].col,
				owner: this.undoneMoves[this.undoneMoves.length - 1].owner,
			});

			this.popUndoneMovesArray();
			this.swapToNextPlayer();
		}
	}
}

</script>

<style lang="scss" scoped>
	@import "../../sass/_variables.scss";

	div.container{
		padding: 20px {
			top: 0;
			bottom: 100px;
		}

		max-width: 300px;
		text-align: center;
		margin: 20px auto;
		div.controls{
			.inline-flex{
				display: flex;
				justify-content: space-between;
				.btn{
					width: calc(50% - 5px);
					&:nth-child(2){
						margin-left: 10px;
					}
				}
			}
			p.multiplayer{
				margin-top: 10px;
				span{
					font-weight: bold;
					color: $red;

					&.green{
						color: $green;
					}
				}
			}
		}
	}
</style>