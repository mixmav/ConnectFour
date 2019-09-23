<template></template>

<script>
	import { mapState, mapActions } from 'vuex';
	import { Howl } from 'howler';

 	export default{
 		mounted(){
 			this.howl = new Howl({
				src: ['/sounds/win.wav'],
			});

 			this.$root.$on('checkForWin', data => {
        		this.checkForWin(data.row, data.col);
			});
 		},

 		computed: {
			...mapState('Board', [
				'boardSlots',
				'numOfRows',
				'numOfCols',
				'moves',
			]),

			...mapState('Scoreboard', [
				'score'
			]),
 		},
		data() {
			return {
				howl: {},
			}
		},
		methods: {
			...mapActions([
				'updatePlayerCanPlay',
				'swapToNextPlayer',
			]),

			...mapActions('Board', [
				'updateSpecificSlotProperty',
			]),

			...mapActions('Alert', [
				'showAlert'
			]),

			...mapActions('Scoreboard', [
				'updateScore'
			]),

			checkForWin(row, col){
				if (this.moves.length > 6) {
					this.checkHorizontal(row, col);
					this.checkVertical(row, col);
					this.checkDiagonal(row, col);
				}

				if (this.moves.length == 42) {
					this.alertDraw();
				}
			},

			checkHorizontal(row, col){
				let minCol = Math.max(col - 3, 0);
				let maxCol = Math.min(col + 3, this.numOfCols - 1);

				let slots = [];
				
				for(var i = minCol; i <= maxCol; i++){
					slots.push({col: i, row: row, owner: this.boardSlots[i][row].owner});
				}

				this.checkFourInaRow(slots);
			},

			checkVertical(row, col){
				let minRow = Math.max(row - 3, 0);
				let maxRow = Math.min(row + 3, this.numOfRows - 1);

				let slots = [];

				for(var i = minRow; i <= maxRow; i++){
					slots.push({col: col, row: i, owner: this.boardSlots[col][i].owner});
				}

				this.checkFourInaRow(slots);
			},

			checkDiagonal(row, col){
				let minViableCol, maxViableCol, minViableRow, currentCol, currentRow;
				let slots = [];

				minViableCol = Math.max(col - Math.abs(row - Math.min(row + 3, this.numOfRows - 1)), 0);
				maxViableCol = Math.min(col + (row - Math.max(row - 3, 0)), this.numOfCols - 1);
				minViableRow = row + (col - minViableCol);


				for(currentCol = minViableCol, currentRow = minViableRow; (currentCol <= maxViableCol); currentCol++, currentRow--){
					slots.push({col: currentCol, row: currentRow, owner: this.boardSlots[currentCol][currentRow].owner});
				}

				this.checkFourInaRow(slots);

				
				minViableCol = Math.max(col - Math.abs(row - Math.max(row - 3, 0)), 0);
				maxViableCol = Math.min(col + Math.abs(row - Math.min(row + 3, this.numOfRows - 1)), this.numOfCols - 1);
				minViableRow = row - (col - minViableCol);

				slots = [];

				for(currentCol = minViableCol, currentRow = minViableRow; (currentCol <= maxViableCol); currentCol++, currentRow++){
					slots.push({col: currentCol, row: currentRow, owner: this.boardSlots[currentCol][currentRow].owner});
				}

				this.checkFourInaRow(slots);
			},

			checkFourInaRow(slots){				
				let counter = 1;
				let winningSlots = [0];

				for (let i = 0; i <= slots.length - 1; i++) {
					if (typeof slots[i + 1] != 'undefined') {
						if (slots[i].owner == slots[i + 1].owner) {
							counter++;
							winningSlots.push(i + 1);
						} else {
							counter = 1;
							winningSlots = [i + 1];
						}

						if (counter == 4) {
							for (let i = 0; i <= winningSlots.length - 1; i++) {
								this.updateSpecificSlotProperty({
									col: slots[winningSlots[i]].col,
									row: slots[winningSlots[i]].row,
									property: 'winner',
									value: true
								});
							}

							this.alertWinner(slots[i].owner);
							break;
						}
					} else {
						winningSlots.push(i);
					}
				}
			},

			alertWinner(playerNo){
				this.howl.play();
				this.updatePlayerCanPlay(false);
				this.showAlert('Player ' + playerNo + " won the game.");
				this.updateScore({
					player: playerNo,
					value: this.score['player' + playerNo] + 1
				})
			},

			alertDraw(){
				this.showAlert("Looks like a draw.");
			}
		}
	}
</script>