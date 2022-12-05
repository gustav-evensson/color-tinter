import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export default createStore({
    state: {
        language: 'css',
        colorFormat: 'HEX',
    },
    mutations: {
        setLanguage(state, language){
            state.language = language
        },
        setColorFormat(state, format){
            state.colorFormat = format
        }
    },
    actions: {
        // Actions (pass context object)
    },
    plugins: [createPersistedState()]
})