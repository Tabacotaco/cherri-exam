import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/cherri-exam',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/chat/:id',
    name: 'chat',
    props: true,
    component: () => import('./views/Chat.vue')
  }]
});
