import { createApp } from 'vue'
import App from './renderer/App.vue'

import './assets/tailwind.css'

import './assets/scss/index.scss'

import appstore from './renderer/store';
import router from './renderer/router'

const app = createApp(App)

const myPlugin = {
    install() {
        // window.extention.loaded().then(paths => {
        //     // console.log(paths[0]+"/app.js");
        //     paths.forEach(path => {
        //         if(typeof __non_webpack_require__ != 'function'){
        //             var __non_webpack_require__ = () => {};
        //         }
        //         __non_webpack_require__(path+"/app.js");
        //     })
        // })
    }
  }

app.use(appstore)
app.use(router)
app.use(myPlugin)

app.mount('#app')