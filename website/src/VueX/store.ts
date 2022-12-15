import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

// interface stateTypes {savedColor: string,showStart: boolean}

const store = createStore({
    state: {
        savedColor: "#8001dd",
        colorFormat: "Hex",
        textFormat: "CSS",
        notification: ""
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
        },
        setNotification(state, notificationText: string){
            state.notification = notificationText
        }
    },
    plugins: [createPersistedState()]
})

export { store }