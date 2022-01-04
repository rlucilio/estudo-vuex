import Vue from 'vue'
import Vuex from 'vuex'
import cartStore from './cart.store'
import userStore from './user.store'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {},
    mutations: {},
    actions: {},
    modules: {
        user: userStore,
        cart: cartStore
    }
})