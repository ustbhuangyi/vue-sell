import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

let router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: goods },
    { path: '/goods', component: goods },
    { path: '/ratings', component: ratings },
    { path: '/seller', component: seller }
  ]
});

/* eslint-disable no-new */
/* eslint-disable no-unused-vars*/
const app = new Vue({
  el: '#app',
  components: { App },
  router: router,
  render: h => h('App')
});
