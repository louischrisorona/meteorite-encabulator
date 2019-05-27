import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store/meteorites.js'

Vue.config.productionTip = false
Vue.use('./plugins/vuetify')

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
