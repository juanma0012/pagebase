// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
//require("expose?jQuery!jquery");

import App from './states/App.vue'
import Home from './states/Home.vue';
import About from './states/About.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
        { path: '/',  component: Home},
        { path: '/about', component: About}
  ]
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
		render: h => h(App),
		router
  });
