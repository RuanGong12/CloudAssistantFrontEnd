<template>
    <div id="app">
        <app-header
            v-on:back="pageBack"
            v-on:search="pageSearch"
            v-bind:showSearchIcon="showSearchIcon"
            v-bind:showBackIcon="showBackIcon"
        ></app-header>
        <router-view/>
    </div>
</template>

<style>
#app {
    width: 100vw;
    overflow: hidden;
    height: 100vh;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: #f8f8f8;
    /* background: #2c3e50; */
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
            showSearchIcon: true,
            showBackIcon: false
        };
    },
    components: {
        AppHeader: AppHeader
    },
    methods: {
        pageBack() {
            currentPage = pageStack.pop();
            if (!currentPage) {
                currentPage = '/';
            }
            this.$router.push(currentPage);
            if (currentPage !== '/search') {
                this.showSearchIcon = true;
                if (currentPage === '/') {
                    this.showBackIcon = false;
                }
            }
        },
        pageSearch() {
            pageStack.push(currentPage);
            currentPage = '/search';
            this.showBackIcon = true;
            this.$router.push(currentPage);
            this.showSearchIcon = false;
        }
    }
};
</script>
