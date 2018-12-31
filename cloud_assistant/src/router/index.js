/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-30 22:03:11
 */

import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index.vue';
import Search from '@/views/Search.vue';
import CourseDetail from '@/views/CourseDetail.vue';
import Login from '@/views/Login.vue';
import Favorites from '@/views/Favorites.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/course/:id',
            name: 'CourseDetail',
            component: CourseDetail
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/favorites',
            name: 'Favorites',
            component: Favorites
        }
    ]
});
