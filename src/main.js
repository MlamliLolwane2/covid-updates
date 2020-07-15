import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ChartKick from 'vue-chartkick'
import Chart from 'chart.js'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css"
import store from './store/store.js'

Vue.use(Vuetify);
Vue.use(ChartKick.use(Chart));

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
  vuetify: new Vuetify(),
  store,
  router,
  render: h => h(App),
}).$mount('#app')
