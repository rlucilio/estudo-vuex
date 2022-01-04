//id, nome, qtd
const cartStore = {
    state: ({
        items: []
    }),
    mutations: {
        addItem(state, payload) {
            const itemIndex = state.items.findIndex(item => item.id === payload.id);

            let newItem = {
                ...payload
            };

            if (itemIndex) {
                newItem.qtd = 1;
                state.items.push(newItem);
            } else {
                state.items[itemIndex].qtd++;
            }

        },
        removeItem(state, payload) {
            state.items = state.items.filter(item => item.id !== payload.id)
        }
    },
    actions: {},
}

export default cartStore;