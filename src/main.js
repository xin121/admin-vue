import Vue from 'vue'

import VueRouter from 'vue-router';
import Schart from 'vue-schart';
import routeConfig from './route-config';
import App from './App.vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.use(VueRouter);

// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
	routes: routeConfig
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue(Vue.util.extend({
	router
}, App)).$mount('#app')