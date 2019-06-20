import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import store from '@/store/index';

import { Tabbar, Icon, Tag, Card } from 'vant';
import '@/assets/css/reset.css';
// import 'vant/lib/index.css';



Vue.use(Tabbar).use(Tag).use(Icon)
console.log(process.env.NODE_ENV,777);

// import "@/assets/scss/common.scss"
// import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
