import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import LightService from './components/LightService.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes =  [
  { path: '/', redirect: '/red'},
  { path: '/red', component: LightService},
  { path: '/yellow', component: LightService},
  { path: '/green', component: LightService}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
