import Vue from 'vue';

export const Scoreboard = {
	namespaced: true,
	
	state: {
		score: {
			player1: 0,
			player2: 0
		}
	},

	mutations: {
		updateScore(state, payload){
			state.score['player' + payload.player] = payload.value
		}
	},

	actions: {
		updateScore(context, payload){
			context.commit('updateScore', payload);
		}
	}
}
