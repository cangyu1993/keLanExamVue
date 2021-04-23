import Vue from 'vue'
import App from './App.vue'

import AxiosData from '@/axios'

import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.prototype.$Axios = AxiosData.Axios
Vue.prototype.$axios = AxiosData.axios
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
