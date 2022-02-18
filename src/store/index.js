import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            title: "Home - Desktop",
        };
    },
    mutations: {
        set_title(state, title) {
            state.title = title
        }
    }
})