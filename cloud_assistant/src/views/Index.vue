/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-29 12:02:34
 */

<template>
    <div class="container-root">
        <van-tabs
            class="index-headers"
            sticky
            swipeable
            animated
            :line-width="34"
            :line-height="2"
            :duration="0.4"
            color="#f56c6c"
        >
            <van-tab title="首页">
                <van-pull-refresh
                    v-model="isLoading"
                    @refresh="onRefresh"
                    :disabled="refreshDisabled"
                >
                    <div
                        class="container-scroll"
                        @scroll="onscroll"
                        ref="containerScroll"
                        v-bind:style="{ 'height': scrollHeight + 'px' }"
                    >
                        <index-top></index-top>
                        <index-channel></index-channel>
                        <course-recommend></course-recommend>
                        <index-footer></index-footer>
                        <footer></footer>
                    </div>
                </van-pull-refresh>
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
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}

.container-scroll,
.container-user {
    width: 100vw;
    float: left;
}
</style>

<script>
import IndexHeader from '@/components/IndexHeader.vue';
import IndexTop from '@/components/IndexTop.vue';
import IndexChannel from '@/components/IndexChannel.vue';
import CourseRecommend from '@/components/CourseRecommend.vue';
import IndexFooter from '@/components/IndexFooter.vue';
import UserInfo from '@/views/UserInfo.vue';
import { REFRESH_DATA } from '@/store/mutation-types';
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            scrollHeight: document.body.clientHeight - 92,
            isLoading: false,
            refreshDisabled: false
        };
    },
    components: {
        IndexHeader: IndexHeader,
        IndexTop: IndexTop,
        IndexChannel: IndexChannel,
        CourseRecommend: CourseRecommend,
        IndexFooter: IndexFooter,
        UserInfo: UserInfo
    },
    methods: {
        ...mapMutations([REFRESH_DATA]),
        onRefresh() {
            this[REFRESH_DATA]();
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
            }, 1000);
        },
        onscroll(event) {
            if (event.target.scrollTop === 0) {
                this.refreshDisabled = false;
            } else if (!this.refreshDisabled) {
                this.refreshDisabled = true;
            }
        }
    }
};
</script>
