export const Alert = {
    namespaced: true,

    state: {
        visible: false,
        message: '',
    },

    mutations: {
        updateVisible(state, value) {
            state.visible = value;
        },

        updateMessage(state, value) {
            state.message = value;
        },
    },

    actions: {
        updateVisible(context, value) {
            context.commit('updateVisible', value);
        },

        showAlert(context, value) {
            context.commit('updateMessage', value);
            context.dispatch('updateVisible', true);
        },
    },
};
