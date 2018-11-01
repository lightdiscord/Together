import Vue from 'vue';
import App from './App.vue';
import { Router } from './views';
import store from './store';

Vue.config.productionTip = false;

const register = (selector, component) => new Vue({
  router: Router,
  store,
  render: h => h(component),
  el: selector,
});

register('#app', App);

if (process.env.NODE_ENV === 'production') {
  import('./service-worker').then(({ register }) => {
    register();
  });
}
