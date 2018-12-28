import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index.vue';
import Search from '@/views/Search.vue';
import HelloWorld from '@/components/HelloWorld.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            props: true
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/hello',
            name: 'Hello',
            component: HelloWorld
        }
    ]
});
