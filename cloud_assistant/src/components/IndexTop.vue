/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-30 10:08:52
 */

<template>
    <div class="index-top">
        <van-swipe :autoplay="3000" :height="180">
            <van-swipe-item v-for="item in swipeData" :key="item.id">
                <a :href="item.url" target="_blank">
                    <img class="swipe-item-img" v-lazy="item.cover" :alt="item.title">
                </a>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<style>
.index-top {
    /* margin-top: 5px; */
    padding: 10px 10px;
    border-bottom: #f0f0f0 solid 10px;
    border-top: #f0f0f0 solid 10px;
    background: #fff;
}

.swipe-item-img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
}
</style>

<script>
import DataService from '@/api/DataService';
import { mapState, mapMutations } from 'vuex';
import { CHANGE_REFRESH_COUNT } from '@/store/mutation-types';

export default {
    data() {
        return {
            swipeData: []
        };
    },
    methods: {
        ...mapMutations([CHANGE_REFRESH_COUNT]),
        refresh() {
            this[CHANGE_REFRESH_COUNT]({ isAdd: true });
            DataService.getSwipeData(
                response => {
                    this.swipeData = [...response.result];
                    this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                },
                err => {
                    console.log(err);
                    // TODO
                    this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                }
            );
        }
    },
    computed: {
        ...mapState({
            refreshFlag: state => state.refreshInfo.refreshFlag
        })
    },
    created: function() {
        this.refresh();
    },
    watch: {
        refreshFlag: function(val) {
            if (val) {
                this.refresh();
            }
        }
    }
};
</script>
