<template>
    <div id="app">
        <app-header
            v-on:back="pageBack"
            v-on:search="pageSearch"
            v-bind:showSearchIcon="showSearchIcon"
        ></app-header>
        <router-view/>
    </div>
</template>

<style>
#app {
    width: 100vw;
    overflow: hidden;
    height: 100vh;
}
</style>

<script>
import '@/assets/css/reset.css';

import AppHeader from '@/components/AppHeader';

let pageStack = [];
let currentPage = '/';

export default {
    name: 'App',
    data() {
        return {
            showSearchIcon: true
        };
    },
    components: {
        AppHeader: AppHeader
    },
    methods: {
        pageBack() {
            currentPage = pageStack.pop();
            this.$router.push(currentPage);
            if (currentPage !== '/search') {
                this.showSearchIcon = true;
            }
        },
        pageSearch() {
            pageStack.push(currentPage);
            currentPage = '/search';
            this.$router.push(currentPage);
            this.showSearchIcon = false;
        }
    }
};
</script>

<style>
#app {
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* background: #2c3e50; */
}
</style>
