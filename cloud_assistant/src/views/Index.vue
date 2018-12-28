/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-28 19:07:30
 */

<template>
    <div class="container-root">
        <van-tabs class="index-headers" sticky swipeable animated :line-width="34" :line-height="2" :duration="0.4" color="#f56c6c">
            <van-tab title="首页">
                <div class="container-scroll" v-bind:style="{ 'height': scrollHeight + 'px' }">
                    <index-top></index-top>
                    <index-channel></index-channel>
                    <course-recommend></course-recommend>
                    <index-footer></index-footer>
                    <footer></footer>
                    <div id="tem"></div>
                </div>
            </van-tab>
            <van-tab title="个人信息">
                <div class="container-user">
                    <user-info></user-info>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<style>
.container-scroll {
    height: 727px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}

.container-scroll,

.container-user {
    width: 100vw;
    float: left;
}

#tem {
    height: 1000px;
    background: #aaa;
}
</style>

<script>
import IndexHeader from '@/components/IndexHeader.vue';
import IndexTop from '@/components/IndexTop.vue';
import IndexChannel from '@/components/IndexChannel.vue';
import CourseRecommend from '@/components/CourseRecommend.vue';
import IndexFooter from '@/components/IndexFooter.vue';
import UserInfo from '@/views/UserInfo.vue';

export default {
    data() {
        return {
            scrollHeight: document.body.clientHeight - 92
        };
    },
    components: {
        IndexHeader: IndexHeader,
        IndexTop: IndexTop,
        IndexChannel: IndexChannel,
        CourseRecommend: CourseRecommend,
        IndexFooter: IndexFooter,
        UserInfo: UserInfo
    }
};
</script>
