/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-29 15:34:13
 */

import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index.vue';
import Search from '@/views/Search.vue';
import CourseDetail from '@/views/CourseDetail.vue';

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
            path: '/course',
            name: 'CourseDetail',
            component: CourseDetail
        }
    ]
});
