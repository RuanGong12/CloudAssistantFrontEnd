<template>
    <div class="index-top">
        <van-swipe :autoplay="3000" :height="180">
            <van-swipe-item v-for="item in swipeData" :key="item.id">
                <img class="swipe-item-img" :src="item.cover" :alt="item.title">
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
import DataProvider from '../../static/js/DataProvider';

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
