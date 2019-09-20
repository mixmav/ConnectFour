import Vue from 'vue';

export const Board = {
	namespaced: true,
	
	state: {
		numOfRows: 6,
		numOfCols: 7,
		boardSlots: [],
		moves: [],
		undoneMoves: [],
		playerOneIcon: 'fa-biohazard',
		playerTwoIcon: 'fa-crosshairs',
	},

	mutations: {
		setBoardSlotsArray(state, payload){
			Vue.set(state.boardSlots, payload.index, payload.value);
		},

		pushObjectToBoardSlotsArray(state, payload){
			state.boardSlots[payload.index].push(payload.object);
		},

		updateSpecificSlotProperty(state, payload){
			state.boardSlots[payload.col][payload.row][payload.property] = payload.value;
		},

		setMovesArray(state, payload){
			state.moves = payload;
		},

		pushToMovesArray(state, payload){
			state.moves.push(payload);
		},

		popMovesArray(state){
			state.moves.pop();
		},

		setUndoneMovesArray(state, payload){
			state.undoneMoves = payload;
		},

		pushToUndoneMovesArray(state, payload){
			state.undoneMoves.push(payload);
		},

		popUndoneMovesArray(state){
			state.undoneMoves.pop();
		},
	},

	actions: {
        setBoardSlotsArray(context, { index, value }){
        	context.commit('setBoardSlotsArray', { index, value });
        },

        pushObjectToBoardSlotsArray(context, { index, object }){
        	context.commit('pushObjectToBoardSlotsArray', { index, object });
        },

        updateSpecificSlotProperty(context, { col, row, property, value }){
        	context.commit('updateSpecificSlotProperty', { col, row, property, value });
        },

        setMovesArray(context, payload){
        	context.commit('setMovesArray', payload);
        },

        pushToMovesArray(context, payload){
			context.commit('pushToMovesArray', payload);
		},

		popMovesArray(context){
			context.commit('popMovesArray');
		},

		setUndoneMovesArray(context, payload){
        	context.commit('setUndoneMovesArray', payload);
        },

        pushToUndoneMovesArray(context, payload){
			context.commit('pushToUndoneMovesArray', payload);
		},

		popUndoneMovesArray(context){
			context.commit('popUndoneMovesArray');
		},
	}
}
