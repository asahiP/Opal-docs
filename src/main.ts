import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Opal from 'opal-ui'

Vue.config.productionTip = false
Vue.use(Opal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
