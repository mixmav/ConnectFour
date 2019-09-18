<template>
	<div id="board" class="no-select" :class="'current-player-' + currentPlayer">
		<div class="board-col"
			v-for="(i, col) in boardSlots"
			:class="[{'col-full': colIsFull(col)}]"
			@click="checkSlot(col)"
			@mouseover="addHoverClass(col)"
			@mouseleave="removeHoverClass(col)">
				<div class="board-slot"
	 				v-for="(boardSlot, row) in i"
					:class="['ownedBy-player-' + boardSlot.owner,
								{
									'hover': (boardSlot.hover && boardSlot.owner == 0),
									'winner': boardSlot.winner,
									'glow': shouldGlow(row, col)
								}
							]"
				>
					<i class="fa fa-biohazard" v-if="boardSlot.owner == 1"></i>
					<i class="fa fa-anchor" v-if="boardSlot.owner == 2"></i>
				</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { Howl } from 'howler';
import Echo from "laravel-echo";

window.Pusher = require('pusher-js');		
window.Echo = new Echo({
	broadcaster: 'pusher',
	key: '9e8632ab1dd07025b0cb',
	cluster: 'ap4',
	forceTLS: false
});

var channel = window.Echo.channel('board-channel');

export default{
	mounted(){
		this.howl = new Howl({
			src: ['/sounds/player-move.mp3']
		});
	},

	created(){
		for(var i = 0; i < this.numOfCols; i++){
			this.setBoardSlotsArray({
				index: i,
				value: [],
			});
		}

		var row = 0;
		var col = 0;

		for(var i = 1; i <= (this.numOfCols * this.numOfRows); i++){
			this.pushObjectToBoardSlotsArray({
				index: col,
				object: {
					owner: 0,
					hover: false,
					winner: false,
					row: row,
					col: col,
				}
			});

			row++;

			if (row == this.numOfRows) {
				row = 0;
				if (col < this.numOfCols - 1) {
					col++;					
				}
			}
		}

		channel.listen('BoardSlotsUpdated', (data) => {
			for (var i = this.boardSlots.length - 1; i >= 0; i--) {
				for (var j = this.boardSlots[i].length - 1; j >= 0; j--) {
					var owner = parseInt(data.boardSlots[i][j].owner);
					if (this.multiplayer) {
						this.updateSpecificSlotProperty({
							col: i,
							row: j,
							property: 'owner',
							value: owner
						});
					}
				}
			}

			if (this.currentPlayer != parseInt(data.currentPlayer) && this.multiplayer) {
				this.swapToNextPlayer();
			}

		});
	},

	data(){
		return {
			howl: {},
		}
	},

	computed: {
		...mapState([
			'currentPlayer',
			'multiplayer',
		]),
		...mapState('Board', [
			'boardSlots',
			'moves',
			'numOfRows',
			'numOfCols'
		]),
	},

	methods: {
		...mapActions([
			'swapToNextPlayer',
		]),
		
		...mapActions('Board',[
			'setBoardSlotsArray',
			'pushObjectToBoardSlotsArray',
			'updateSpecificSlotProperty',
			'pushToMovesArray',
			'setUndoneMovesArray',
		]),

		shouldGlow(row, col){
			if (this.moves.length > 0) {
				if( (this.moves[this.moves.length - 1].row == row) && (this.moves[this.moves.length - 1].col == col)){
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		},

		colIsFull(col){
			var isFull = true;
			for(var i = (this.boardSlots[0].length - 1); i >= 0; i--){
				if (this.boardSlots[col][i].owner == 0) {
					isFull = false;
					break;
				}
			}
			return isFull;
		},

		checkSlot(col){
			for(var i = (this.boardSlots[0].length - 1); i >= 0; i--){
				if (this.boardSlots[col][i].owner == 0) {
					this.updateSpecificSlotProperty({
						col: col,
						row: i,
						property: 'owner',
						value: this.currentPlayer
					});

					this.updateSpecificSlotProperty({
						col: col,
						row: i,
						property: 'hover',
						value: false
					});

					this.howl.play();
					this.checkForWin(i, col, this.currentPlayer);
					this.swapToNextPlayer();
					
					this.pushToMovesArray({
						row: i,
						col: col,
						owner: this.currentPlayer,
					});


					this.setUndoneMovesArray([]);
					break;
				}
			}

			if (this.multiplayer) {
				this.broadcastMove();				
			}

		},

		broadcastMove(){
			var vThis = this;
			$.ajax({
				method: 'POST',
				url: '/broadcast/board-slots',
				data: {
					boardSlots: vThis.boardSlots,
					currentPlayer: vThis.currentPlayer
				},
			});
		},

		addHoverClass(col){
			if (!this.colIsFull(col)) {
				for(var i = 5; i >= 0; i--){
					if (this.boardSlots[col][i].owner == 0) {
						this.updateSpecificSlotProperty({
							col: col,
							row: i,
							property: 'hover',
							value: true
						});
						break;
					}
				}
			}
		},

		removeHoverClass(col){
			for(var i = 5; i >= 0; i--){
				if (this.boardSlots[col][i].owner == 0) {
					this.updateSpecificSlotProperty({
						col: col,
						row: i,
						property: 'hover',
						value: false
					});
					break;
				}
			}
		},

		checkForWin(row, col, owner){
			// Check horizontal
			{
				let minCol = Math.max(col - 3, 0);
				let maxCol = Math.min(col + 3, this.numOfCols - 1);

				let slots = [];

				for(var i = minCol; i <= maxCol; i++){
					slots.push(this.boardSlots[i][row].owner);
				}

				this.checkFourInaRow(slots);
			}

			// Check vertical
			{
				let minRow = Math.max(row - 3, 0);
				let maxRow = Math.min(row + 3, this.numOfRows - 1);

				let slots = [];

				for(var i = minRow; i <= maxRow; i++){
					slots.push(this.boardSlots[col][i].owner);
				}

				this.checkFourInaRow(slots);
			}

			// Check diagonal
			// {
			// 	let minCol = Math.max(col - 3, 0);
			// 	let maxCol = Math.min(col + 3, this.numOfCols - 1);
			// 	let minRow = Math.max(row - 3, 0);
			// 	let maxRow = Math.min(row + 3, this.numOfRows - 1);

			// 	for(var i = minCol; i <= maxCol; i++){
			// 		if(i != col){
			// 			console.log(i, maxRow - i);
			// 		}
			// 	}
			// }
		},

		checkFourInaRow(slots){
			let counter = 1;

			for (var i = 0; i <= slots.length - 1; i++) {
				if (typeof slots[i + 1] != 'undefined') {
					if (slots[i] == slots[i + 1]) {
						counter++;
					} else {
						counter = 1;
					}

					if (counter == 4) {
						this.alertWinner(slots[i]);
						break;
					}
				}
			}
		},

		alertWinner(playerNo){
			alert(playerNo + " won the game.");
		}
	}
}

</script>

<style lang="scss">
@import "../../sass/_variables.scss";

#board{
	margin-top: 40px;
	text-align: center;
	
	.board-col{
		padding: 15px;
		display: inline-block;

		border: {
			top: solid 2px $board-border-color;
			bottom: solid 2px $board-border-color;
		}

		background: $board-background;
		transition: all .2s;
		cursor: pointer;

		&:hover{
			background: lighten($board-background, 10%);
		}

		&:first-child{
			border-left: solid 2px $board-border-color;
			border-top-left-radius: 10px;
			border-bottom-left-radius: 10px;
		}
		&:last-child{
			border-right: solid 2px $board-border-color;
			border-top-right-radius: 10px;
			border-bottom-right-radius: 10px;
		}
		
		&.col-full{
			cursor: default;
		}	

		.board-slot{
			width: 30px;
			height: 30px;
			margin-top: 20px;
			border-radius: 100%;
			border: solid 2px $body-background;
			background: $body-background;
			transition: all .2s;
			&:first-child{
				margin-top: 0;
			}
			position: relative;
			i{
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%) scale(0.7, 0.7);
				color: white;
			}
			&.ownedBy-player-1{
				border-color: darken($player-1-color, 10%);
				background: $player-1-color;
				animation: scaleBounce .75s linear;

				&.glow{
					animation: scaleBounce .75s linear, glow .7s infinite alternate;
				}
			}

			&.ownedBy-player-2{
				border-color: darken($player-2-color, 20%);
				background: $player-2-color;
				animation: scaleBounce .75s linear;
				
				&.glow{
					animation: scaleBounce .75s linear, glow .7s infinite alternate;
				}
			}

			&.winner{
				transform: scale(1.5, 1.5);
			}
		}
	}
	&.current-player-1{
		.board-col{
			.board-slot.hover{
				border-color: darken($player-1-color, 10%);
				background: $player-1-color;
			}
		}
	}

	&.current-player-2{
		.board-col{
			.board-slot.hover{
				border-color: darken($player-2-color, 10%);
				background: $player-2-color;
			}
		}
	}	
}

@include media(465px){
	#board{
		.board-col{
			padding: {
				left: 10px;
				right: 10px;
			}
			&:first-child{
				padding-left: 15px;
			}
			&:last-child{
				padding-right: 15px;
			}
			.board-slot{
				width: 25px;
				height: 25px;
			}
		}
	}
}

@include media(370px){
	#board{
		.board-col{
			padding: {
				left: 8px;
				right: 8px;
			}
			&:first-child{
				padding-left: 12px;
			}
			&:last-child{
				padding-right: 12px;
			}
			.board-slot{
				width: 20px;
				height: 20px;
			}
		}
	}
}

@keyframes glow {
	from {
		box-shadow: 0 0 10px -10px white;
	}
	
	to {
		box-shadow: 0 0 10px 10px white;
	}
}

</style>