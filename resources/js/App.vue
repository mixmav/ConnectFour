<template>
	<div id="app-container">
		<board></board>
		<div class="turn-indicator">
			<p>Now playing</p>
			<div class="checker" :class="'player-' + currentPlayer"></div>
		</div>
		<game-controls></game-controls>
	</div>
</template>

<script>

import {mapState} from 'vuex';

import Board from './components/Board.vue';
import GameControls from './components/GameControls.vue';

export default{
	components: {
		Board,
		GameControls,
	},

	computed: {
		...mapState([
			'currentPlayer',
		]),
	}
}
</script>

<style lang="scss">
	@import "../sass/_variables.scss";

	#app-container{
		padding: 20px;
	}
	.turn-indicator{
		text-align: center;
		margin-top: 20px;
		div.checker{
			width: 30px;
			height: 30px;
			display: inline-block;
			margin-top: 10px;
			border-radius: 100%;
			border: solid 2px white;
			&.player-1{
				background: $player-1-color;
				border-color: darken($player-1-color, 10%);
			}
			&.player-2{
				background: $player-2-color;
				border-color: darken($player-2-color, 10%);
			}
		}
	}
</style>