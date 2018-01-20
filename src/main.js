import Vue from 'vue'
import App from './App'
import router from './router'

import fastclick from 'fastclick';
import VueLazyload from 'vue-lazyload';

fastclick.attach(document.body);
Vue.use(VueLazyload, {
   loading: require('@/assets/images/default.png')
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

import '@/assets/sass/base/_redefine.scss';
