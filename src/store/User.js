export const UserModule = {
    namespace: UserModule,

    state: {
        user: null
    },

    // Mutations are functions that effect the STATE
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },

    // functions that you call throughout your application that call mutation
    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user);
        }
    }
}