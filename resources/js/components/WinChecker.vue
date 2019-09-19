<template>
	<div>
		
	</div>
</template>

<script>
	import { mapState } from 'vuex';

 	export default{
 		mounted(){
 			this.$root.$on('checkForWin', data => {
        		this.checkForWin(data.row, data.col);
			});
 		},

 		computed: {
			...mapState('Board', [
				'boardSlots',
				'numOfRows',
				'numOfCols',
			]),
 		},

		methods: {
			checkForWin(row, col){
				this.checkHorizontal(row, col);
				this.checkVertical(row, col);
				this.checkDiagonal(row, col);
			},

			checkHorizontal(row, col){
				let minCol = Math.max(col - 3, 0);
				let maxCol = Math.min(col + 3, this.numOfCols - 1);

				let slots = [];

				for(var i = minCol; i <= maxCol; i++){
					slots.push(this.boardSlots[i][row].owner);
				}

				this.checkFourInaRow(slots);
			},

			checkVertical(){
				let minRow = Math.max(row - 3, 0);
				let maxRow = Math.min(row + 3, this.numOfRows - 1);

				let slots = [];

				for(var i = minRow; i <= maxRow; i++){
					slots.push(this.boardSlots[col][i].owner);
				}

				this.checkFourInaRow(slots);
			},

			checkDiagonal(){
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
			},
		}
	}
</script>