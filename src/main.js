import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSession from 'vue-session'


import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import axios from 'axios';
//import PerfectScrollbar from 'vue2-perfect-scrollbar'
//import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
//Vue.use(PerfectScrollbar)
import vuescroll from 'vuescroll';
Vue.use(vuescroll);
Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(FontAwesomeIcon)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.$log = console.log.bind(console)
library.add(faHome)
Vue.use(IconsPlugin)
Vue.use(VueSession)

Vue.use(BootstrapVue)


axios.defaults.baseURL = 'http://localhost/Apiphp/'
Vue.mixin({
    data: function() {
        return {
            get RutaApiXml() {
                return "http://192.168.52.1:8081/";
            }
        }
    }
})

new Vue({
    el: '#app',
    router,
    store,
    icons,
    template: '<App/>',
    components: {
        App
    }
})