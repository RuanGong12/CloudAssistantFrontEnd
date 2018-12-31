/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-30 15:30:14
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import VueLazyLoad from 'vue-lazyload';
import appStore from '@/store/index';

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vuex);
Vue.use(Vant);
Vue.use(VueLazyLoad, {
    error: '../../static/img/failed.png',
    loading: '../../static/img/loading-bubbles.svg',
    attempt: 2,
    listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove', 'touchstart']
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
let vue = new Vue({
    el: '#app',
    store: appStore,
    router,
    components: {
        App
    },
    template: '<App/>'
});

// TODO
window.vueIn = vue;
