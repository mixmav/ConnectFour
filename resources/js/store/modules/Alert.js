export const Alert = {
	namespaced: true,
	
    state: {
        visible: false,
        type: 'alert',
        secondButtonMessage: null,
        message: null,
	},

	mutations: {
		updateVisible(state, value){
			state.visible = value;
		},

        updateMessage(state, value){
            state.message = value;
        },

        updateType(state, value){
            state.type = value;
        },

        updateSecondButtonMessage(state, value){
            state.secondButtonMessage = value;
        }
	},

	actions: {
        updateVisible(context, value){
            context.commit('updateVisible', value);
        },

		showAlert(context, value){
            context.commit('updateType', value.type);
            context.commit('updateSecondButtonMessage', value.secondButtonMessage);
            context.commit('updateMessage', value.message);

            context.dispatch('updateVisible', true);
		},
	}
}
