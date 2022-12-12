import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

// interface stateTypes {savedColor: string,showStart: boolean}

const store = createStore({
    state: {
        savedColor: "",
        colorFormat: "Hex",
        textFormat: "CSS"
    },
    mutations: {
        saveColor(state, color: string){
            state.savedColor = color
        },
        setColorFormat(state, format: string){
            state.colorFormat = format
        },
        setTextFormat(state, format: string){
            state.textFormat = format
        }
    },
    plugins: [createPersistedState()]
})

export { store }