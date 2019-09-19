<template>
	<div class="scoreboard">
		<div class="player-one" :class="{'now-playing': (currentPlayer == 1)}">
			<div class="inline">
				<div class="checker player-1"><i :class="'fa ' + playerOneIcon"></i></div>
				<p>Player 1</p>
			</div>
			<p class="score">1</p>
		</div><!--
	 --><div class="player-two" :class="{'now-playing': (currentPlayer == 2)}">
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
			...mapState([
				'currentPlayer',
			]),

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
				top: solid 1px $black;
			}
			width: 50%;
			background: white;
			color: $black;
			display: inline-block;
			transition: all .2s;
			p{
				color: inherit;
			}
			.score{
				position: absolute;
				top: 50%;
				font-size: 1.5em;
				font-weight: 500; 
				transform: translateY(-50%);

			}

			&.now-playing{
				background: $primary-color;
				.checker{
					animation: scaleRotate 1s cubic-bezier(0.39, 0.62, 0.57, 1) infinite;
				}
				p{
					color: white;
				}
			}
		}
		.player-one{
			padding-left: 20px;
			.score{
				right: 35px;
			}
		}
		.player-two{
			direction: rtl;
			padding-right: 20px;
			border-left: solid 1px $black;
			.score{
				left: 35px;
			}
		}

		div.checker{
			display: inline-block;
			border: solid 2px white;
			position: relative;
			@extend .checker-design;
		}
	}

	@include media(650px){
		.scoreboard{
			.player-one, .player-two{
				text-align: initial;
			}
		}
	}

	@include media(500px){
		.scoreboard{
			.player-one{
				.score{
					right: 20px;
				}
			}
			.player-two{
				.score{
					left: 20px;
				}
			}
		}
	}
</style>