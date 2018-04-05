import Vue from 'vue'
import App from './App.vue'
import { apolloProvider } from './vue-apollo'
import { Upload } from 'element-ui';

Vue.config.productionTip = false

Vue.component('element-upload', Upload)

new Vue({
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount('#app')
