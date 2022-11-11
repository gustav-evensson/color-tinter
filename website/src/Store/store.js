import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export default createStore({
    state: {
        language: 'css',
        colorFormat: 'HEX',
        isShowMore: false
    },
    mutations: {
        setLanguage(state, language){
            state.language = language
        },
        setColorFormat(state, format){
            state.colorFormat = format
        },
        setShowMore(state, value){
            state.isshowMore = value
        }
    },
    actions: {
        // Actions (pass context object)
    },
    plugins: [createPersistedState()]
})