<template>
    <div id="app">
        <div class="out-document">
            <div class="app-dialogs">
                <van-dialog
                    class="user-page-dialog"
                    v-model="showUserNameEditDialog"
                    :before-close="beforeClose"
                    show-cancel-button
                >
                    <van-panel title="更改昵称" icon="edit">
                        <van-field
                            v-model="editedName"
                            label="昵称"
                            placeholder="输入昵称"
                            required
                            :error-message="errorMessage"
                        ></van-field>
                    </van-panel>
                </van-dialog>
            </div>
        </div>
        <app-header
            v-on:back="pageBack"
            v-on:search="pageSearch"
            v-bind:showSearchIcon="showSearchIcon"
            v-bind:showBackIcon="showBackIcon"
            v-bind:headerTitle="headerTitle"
        ></app-header>
        <router-view :testFlag="testFlag"/>
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
const AppPage = {
    path: '/',
    title: '高校云助手',
    showSearchIcon: true,
    showBackIcon: false
};
let currentPage = AppPage;
export default {
    name: 'App',
    data() {
        return {
            showSearchIcon: true,
            showBackIcon: false,
            headerTitle: AppPage.title,
            showUserNameEditDialog: false,
            errorMessage: '',
            editedName: '',
            testFlag: 12
        };
    },
    components: {
        AppHeader: AppHeader
    },
    methods: {
        pageBack() {
            currentPage = pageStack.pop();
            if (!currentPage) {
                currentPage = AppPage;
            }
            this.goPage(currentPage);
        },
        pageSearch() {
            this.goPage({
                path: '/search',
                title: '搜索',
                showSearchIcon: false,
                showBackIcon: true
            });
        },
        goPage(page) {
            console.log(page.title);
            pageStack.push(currentPage);
            this.$router.push(page.path);
            this.headerTitle = page.title;
            this.showSearchIcon = page.showSearchIcon;
            this.showBackIcon = page.showBackIcon;
        },
        beforeClose() {}
    }
};
</script>
