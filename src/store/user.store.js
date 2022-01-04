const userStore = {
    state: () => ({
        name: 'NomePadrão',
        lastName: 'SobrenomePadrão',
        email: 'email@padrao.com'
    }),
    mutations: {
        setName(state, payload) {
            state.name = payload
        },
        setLastName(state, payload) {
            state.lastName = payload
        },
        setEmail(state, payload) {
            state.email = payload
        },
    },
    actions: {},
}

export default userStore;