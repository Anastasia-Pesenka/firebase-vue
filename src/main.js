import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire';

Vue.use(VueFire);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
