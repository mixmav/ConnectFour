<template>
	<div class="scoreboard">
		<div class="player-one">
			<div class="inline">
				<div class="checker player-1"><i :class="'fa ' + playerOneIcon"></i></div>
				<p>Player 1</p>
			</div>
			<p class="score">1</p>
		</div><!--
	 --><div class="player-two">
	 		<div class="inline">
	 			<div class="checker player-2"><i :class="'fa ' + playerTwoIcon"></i></div>
				<p>Player 2</p>
	 		</div>
	 		<p class="score">3</p>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default{
		computed: {
			...mapState('Board', [
				'playerOneIcon',
				'playerTwoIcon'
			]),
		}
	}
</script>

<style lang="scss">
	@import "../../sass/_variables.scss";

	.scoreboard{
		margin-top: 20px;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		.player-one, .player-two{
			text-align: center;
			padding: 10px{
				top: 15px;
			}
			position: relative;
			border: {
				top: solid 1px $blue;
			}
			width: 50%;
			background: white;
			display: inline-block;
			
			.score{
				position: absolute;
				right: 35px;
				top: 50%;
				font-size: 2em;
				transform: translateY(-50%);
			}
		}

		.player-two{
			border-left: solid 1px $blue;
			.score{
				right: auto;
				left: 35px;
			}
		}

		div.checker{
			width: 30px;
			height: 30px;
			display: inline-block;
			border-radius: 100%;
			border: solid 2px white;
			position: relative;
			i{
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%) scale(0.7, 0.7);
				color: white;
			}
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