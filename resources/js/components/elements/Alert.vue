<template>
	<div class="window-alert" ref="container" :class="{visible: visible}" @click="checkClickClose">
		<div class="window-alert-box z-depth-3">
			<div class="content">
				<p v-html="message"></p>
			</div>
			
			<div class="fixed-bottom">
				<button class="btn h-ripple blue" @click="toggleVisible(false)"><i class="fa fa-keyboard"></i>Press any key to clsoe</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex';
	import $ from 'jquery';

	export default{
		created(){
			$(window).on({
				keydown: (event) => {
					if (this.visible) {
						this.toggleVisible(false);
					}
				},
			}, this.$refs.container);
		},

		beforeDestroy(){
			$(window).off('keydown', this.$refs.container);
		},

		data(){
			return{
			}
		},

		computed: {
			...mapState('Alert', [
				'visible',
				'message',
			]),
		},

		methods: {
			...mapActions('Alert', {
				'toggleVisible': 'updateVisible'
			}),

			checkClickClose(){
				if(this.$refs.container == event.target){
					this.toggleVisible(false);
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../sass/variables";

	.window-alert{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(black, 0.3);
		z-index: -1000;
		opacity: 0;
		transition: all 0s .1s;
		.window-alert-box{
			width: 80%;
			max-width: 300px;
			min-height: 220px;
			max-height: 350px;
			overflow: auto;
			background:
				radial-gradient(rgba($purple, 0.2) 1%, transparent 15%) 0 0,
				radial-gradient(rgba($green, 0.2) 1%, transparent 15%) 16px 16px,
				radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
				radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 16px 17px;
			background-size: 32px 32px;
			background-color: white;



			position: relative;
			text-align: center;
			top: 0;
			left: 50%;
			padding: 1em {
				top: 1.5em;
			}
			border-radius: 5px;

			transform: translate(-50%, -50px);
			opacity: 0;
			transition: all .15s ease-in;

			.content{
				p{
					color: rgba(black, 0.7);
					font: {
						size: 1.1em;
						weight: 700;
					}

					i{
						color: inherit;
						position: relative;
						margin-right: 5px;
						&.error{
							color: $red;
							bottom: 2px;
						}

						&.blue{
							color: $blue;
						}
					}
				}
			}

			div.fixed-bottom{
				position: absolute;
				width: 100%;
				bottom: 10px;
				left: 0em;
				padding: {
					left: 10px;
					right: 10px;
				}
				button{
					width: 100%;
					padding: {
						top: 1em;
						bottom: 1em;
					}
				}
			}
		}
		&.visible{
			z-index: $zIndex-window-alert;
			opacity: 1;
			transition: none;
			.window-alert-box{
				opacity: 1;
				transform: translate(-50%, 50px);
				transition: all .15s ease-out .1s;
			}
		}
	}
</style>
