import Vuex from 'vuex';

import { Board } from './modules/Board';
import { ScoreBoard } from './modules/ScoreBoard';
import { Alert } from './modules/Alert';

export const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',

    modules: {
        Board: Board,
        ScoreBoard: ScoreBoard,
        Alert: Alert,
    },

    state: {
        currentPlayer: 1,
        playerCanPlay: true,
    },

    mutations: {
        swapToNextPlayer(state) {
            if (state.currentPlayer === 1) {
                state.currentPlayer = 2;
            } else {
                state.currentPlayer = 1;
            }
        },

        updatePlayerCanPlay(state, value) {
            state.playerCanPlay = value;
        },
    },

    actions: {
        swapToNextPlayer(context) {
            context.commit('swapToNextPlayer');
        },

        updatePlayerCanPlay(context, value) {
            context.commit('updatePlayerCanPlay', value);
        },
    },
});
