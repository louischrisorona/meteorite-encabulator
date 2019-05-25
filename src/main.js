import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.use('./plugins/vuetify')

new Vue({
  render: h => h(App),
}).$mount('#app')
