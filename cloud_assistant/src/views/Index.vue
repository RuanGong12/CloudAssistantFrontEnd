/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-30 12:18:02
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
                        ref="indexContainerScroll"
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
import {
    REFRESH_DATA,
    SET_SCROLL_HANDLER,
    REFRESH_INIT
} from '@/store/mutation-types';
import { mapState, mapMutations } from 'vuex';

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
        ...mapMutations([REFRESH_DATA, SET_SCROLL_HANDLER, REFRESH_INIT]),
        onRefresh() {
            this[REFRESH_DATA]();
        },
        onscroll(event) {
            if (event.target.scrollTop === 0) {
                this.refreshDisabled = false;
            } else if (!this.refreshDisabled) {
                this.refreshDisabled = true;
            }
        }
    },
    computed: {
        ...mapState({
            currentPage: state => state.currentPage,
            refreshCount: state => state.refreshInfo.refreshCount,
            refreshFailed: state => state.refreshInfo.refreshFailed,
            refreshFlag: state => state.refreshInfo.refreshFlag
        })
    },
    mounted: function() {
        this[SET_SCROLL_HANDLER]({
            handler: () => {
                return this.$refs.indexContainerScroll.scrollTop;
            }
        });
        this.$nextTick(function() {
            console.log(this.currentPage.scrollLocation);
            setTimeout(() => {
                this.$refs.indexContainerScroll.scrollTo(
                    0,
                    this.currentPage.scrollLocation
                );
            }, 50);
        });
    },
    watch: {
        refreshFailed: function(val) {
            if (val) {
                this.$toast('刷新失败');
                this[REFRESH_INIT]();
                this.isLoading = false;
                console.log('failed');
            }
        },
        refreshCount: function(val) {
            if (this.refreshFlag && val === 0) {
                this.$toast('刷新成功');
                this[REFRESH_INIT]();
                this.isLoading = false;
            }
        }
    }
};
</script>
