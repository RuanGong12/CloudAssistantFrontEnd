/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-28 19:06:22
 */

<template>
    <div class="index-top">
        <van-swipe :autoplay="3000" :height="180">
            <van-swipe-item v-for="item in swipeData" :key="item.id">
                <img class="swipe-item-img" v-lazy="item.cover" :alt="item.title">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<style>
.index-top {
    margin-top: 5px;
    padding: 10px 10px;
    border-bottom: #f0f0f0 solid 10px;
}

.swipe-item-img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
}
</style>

<script>
import DataProvider from '@/api/DataProvider';

export default {
    data() {
        return {
            swipeData: null
        };
    },
    created: function() {
        this.swipeData = DataProvider.getSwipeData();
    }
};
</script>
