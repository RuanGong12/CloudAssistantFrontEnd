/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-30 14:13:03
 */

<template>
    <div id="app">
        <app-dialogs></app-dialogs>
        <app-header></app-header>
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
import { mapState } from 'vuex';
import AppHeader from '@/components/AppHeader';
import AppDialogs from '@/components/AppDialogs';

export default {
    name: 'App',
    data() {
        return {};
    },
    components: {
        AppHeader: AppHeader,
        AppDialogs: AppDialogs
    },
    methods: {},
    computed: {
        ...mapState({
            currentPage: state => state.currentPage
        })
    },
    watch: {
        currentPage: function(val) {
            this.$router.push(val.path);
        }
    }
};
</script>
