/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: JIEWU
 * @Last Modified time: 2018-12-31 15:20:11
 */

import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index.vue';
import Search from '@/views/Search.vue';
import CourseDetail from '@/views/CourseDetail.vue';
import LectureDetail from '@/views/LectureDetail.vue';
import Login from '@/views/Login.vue';
import Favorites from '@/views/Favorites.vue';
import LectureHome from '@/views/LectureHome.vue';
import CourseHome from '@/views/CourseHome.vue';

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
            path: '/lecture/:id',
            name: 'LectureDetail',
            component: LectureDetail
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
        },
        {
            path: '/lecturehome',
            name: 'LectureHome',
            component: LectureHome
        },
        {
            path: '/coursehome',
            name: 'CourseHome',
            component: CourseHome
        }
    ]
});
