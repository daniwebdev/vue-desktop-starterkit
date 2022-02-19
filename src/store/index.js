import { createStore } from "vuex";

export default createStore({
    state() {
        
        return {
            title: "Home - Desktop",
            darkMode: false,
        };
    },
    mutations: {
        set_title(state, title) {
            state.title = title
        },
        toggleDarkMode(state, darkMode) {
            state.darkMode = darkMode

            if(darkMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem("darkMode", "true");
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem("darkMode", "false");
            }
        },
    },
})