import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { Board } from './modules/Board'; 

export const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',

	modules: {
		Board: Board,
	},

	state: {
		currentPlayer: 1,
		multiplayer: false,
	},

	mutations: {
		swapToNextPlayer(state){
			if (state.currentPlayer === 1) {
				state.currentPlayer = 2;				
			} else {
				state.currentPlayer = 1;
			}
		},

		updateMultiplayer(state, value){
			state.multiplayer = value;
		}
	},

	actions: {
		swapToNextPlayer(context){
			context.commit('swapToNextPlayer');
		},

		updateMultiplayer(context, value){
			context.commit('updateMultiplayer', value);
		}
	}
});