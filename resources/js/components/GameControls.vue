<template>
	<div>
		<button class="btn h-ripple full-width" :disabled="moves.length == 0" @click="undoLastMove"><i class="fa fa-redo-alt"></i>Undo last move</button>
		<button class="btn h-ripple full-width spaced" :disabled="undoneMoves.length == 0" @click="redoLastMove"><i class="fa fa-redo-alt"></i>Redo last move</button>
		<button class="btn h-ripple full-width spaced" @click="resetGame"><i class="fa fa-redo-alt"></i>Reset Game</button>
		<button class="btn h-ripple full-width spaced blue" @click="updateMultiplayer(!multiplayer)"><i class="fa fa-globe-americas"></i>Toggle Multiplayer</button>
		<p>Multiplayer is <span :class="{green: multiplayer}">{{multiplayerStatus}}</span></p>
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
			'multiplayer'
		]),

		...mapState('Board', [
			'boardSlots',
			'moves',
			'undoneMoves'
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
			'updateMultiplayer'
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

		resetGame(){
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
				}
			}
			if (this.currentPlayer == 2) {
				this.swapToNextPlayer();
			}
			this.setMovesArray([]);
			this.setUndoneMovesArray([]);
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

	div{
		text-align: center;
		margin: 20px auto;
		max-width: 300px;

		p{
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
</style>