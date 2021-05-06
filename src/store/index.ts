import Vue from 'vue'
import Vuex from 'vuex'
// import { createPersistedState, createSharedMutations } from 'vuex-electron'
import { state, IState } from './state'

import { ActionContext } from 'vuex'

Vue.use(Vuex)
// { commit: Commit, state: State }
export default new Vuex.Store({
    state,
    mutations: {},
    actions: {
        setUserId(context: ActionContext<IState, unknown>, userId?: string) {
            context.state.userId = userId
        },
    },
    modules: {},
    // plugins: [createPersistedState(), createSharedMutations()],
})
