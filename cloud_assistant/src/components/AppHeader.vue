/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-28 19:05:29
 */

<template>
    <header>
        <div id="app-header" class="app-header">
            <div class="icon-button-back" @click="back" v-if="showBackIcon">
                <van-icon name="arrow-left"></van-icon>
            </div>
            <div class="app-header-title">{{ headerTitle }}</div>
            <div class="icon-button-search" @click="searchPage" v-if="showSearchIcon">
                <van-icon name="search"></van-icon>
            </div>
        </div>
    </header>
</template>

<style>
.app-header {
    position: relative;
    height: 48px;
    width: 100%;
    background: #fff;
    box-shadow: 0 0 10px 1px rgba(7, 17, 27, 0.1);
    z-index: 1000;
}

.app-header-title {
    width: 50%;
    text-align: center;
    line-height: 48px;
    font-size: 1.4rem;
    margin: auto auto;
    color: #303133;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

.icon-button-back {
    font-size: 30px;
    top: 9px;
    left: 8px;
    position: absolute;
}

.icon-button-search {
    font-size: 30px;
    top: 9px;
    right: 20px;
    width: 20px;
    height: 20px;
    position: absolute;
}
</style>

<script>
import { mapState } from 'vuex';
import { BACK_PAGE, GO_PAGE } from '@/store/mutation-types';
import Pages from '@/router/Pages';
export default {
    computed: {
        ...mapState({
            headerTitle: state => state.currentPage.headerTitle,
            showSearchIcon: state => state.currentPage.showSearchIcon,
            showBackIcon: state => state.currentPage.showBackIcon
        })
    },
    methods: {
        back() {
            this.$store.commit(BACK_PAGE);
        },
        searchPage() {
            this.$store.commit(GO_PAGE, Pages.SearchPage);
        }
    }
};
</script>
