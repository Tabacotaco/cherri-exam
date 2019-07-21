import Vue from 'vue';
import $ from 'jquery';

import i18n from './services/i18n.service';
import store from './services/store';

import router from './router';
import App from './App.vue';

import 'popper.js/dist/umd/popper.min.js';
import 'hammerjs/hammer.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';


Vue.config.productionTip = false;
(window as any).$ = $;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app');
