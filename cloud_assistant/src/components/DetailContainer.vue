/*
 * @Author: double7
 * @Date: 2018-12-30 11:30:26
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-31 17:36:07
 */

<template>
    <div>
        <div class="icon-warp">
            <van-icon
                :name="likeIconName"
                :color="likeIconColor"
                class="icon-like"
                @click="changeLike"
            ></van-icon>
        </div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="refreshDisabled">
            <div
                class="container-scroll"
                ref="detailContainerScroll"
                :style="{ 'height': scrollHeight + 'px' }"
                @scroll="onscroll"
            >
                <detail-top :detailTopData="detailTopData"></detail-top>
                <detail-info :detailInfoData="detailInfoData"></detail-info>
                <detail-comment></detail-comment>
            </div>
        </van-pull-refresh>
    </div>
</template>

<style>
.icon-warp {
    position: relative;
}

.icon-like {
    position: absolute;
    font-size: 28px;
    right: 24px;
    top: -38px;
    z-index: 1999;
}
.main-card {
    background: #fff;
    border-bottom: 10px solid #f5f5f5;
}

.container-scroll {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}
</style>

<script>
import DetailTop from '@/components/DetailTop';
import DetailInfo from '@/components/DetailInfo';
import DetailComment from '@/components/DetailComment';
import DataService from '@/api/DataService';
import {
    REFRESH_DATA,
    REFRESH_INIT,
    CHANGE_REFRESH_COUNT
} from '@/store/mutation-types';
import { mapState, mapMutations } from 'vuex';

export default {
    props: ['detailId', 'detailType'],
    data() {
        return {
            scrollHeight: document.body.clientHeight - 48,
            isLoading: false,
            refreshDisabled: false,
            detailTopData: {},
            detailInfoData: {},
            isLike: false
        };
    },
    methods: {
        ...mapMutations([REFRESH_DATA, REFRESH_INIT, CHANGE_REFRESH_COUNT]),
        onRefresh() {
            this[REFRESH_DATA]();
        },
        onscroll(event) {
            if (event.target.scrollTop === 0) {
                this.refreshDisabled = false;
            } else if (!this.refreshDisabled) {
                this.refreshDisabled = true;
            }
        },
        refresh() {
            this[CHANGE_REFRESH_COUNT]({ isAdd: true });
            let getDetail;
            let useCache = true;
            let isCourse;
            if (this.$route.name === 'CourseDetail') {
                isCourse = true;
                getDetail = DataService.getCourseDetail;
            } else {
                isCourse = false;
                getDetail = DataService.getLectureDetail;
            }
            if (isCourse) {
                if (this.detailInfoData.hasRated === 1) {
                    console.log('hasRated');
                    useCache = true;
                } else {
                    useCache = false;
                }
            }
            getDetail(
                response => {
                    let {
                        title,
                        school,
                        cover,
                        teachers,
                        timeLocation,
                        tags,
                        rate,
                        hasRated,
                        isLike,
                        description
                    } = response.result;
                    this.detailTopData = { cover, timeLocation, tags };
                    this.detailInfoData = {
                        title,
                        school,
                        teachers,
                        rate,
                        hasRated,
                        description
                    };
                    this.isLike = isLike === 1;
                    this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                },
                err => {
                    console.log(err);
                    // TODO
                    this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                },
                { id: this.$route.params.id, userId: this.userId },
                useCache
            );
        },
        changeLike() {
            this.isLike = !this.isLike;
            let putLike;
            if (this.$route.name === 'CourseDetail') {
                putLike = DataService.putCourseLike;
            } else {
                putLike = DataService.putLectureLike;
            }
            putLike(
                response => {
                    this.$toast({
                        duration: 1000,
                        message: this.isLike ? '收藏成功' : '取消成功',
                        type: 'success'
                    });
                },
                err => {
                    console.log(err);
                    this.$toast({
                        duration: 1000,
                        message: '操作失败',
                        type: 'fail'
                    });
                },
                { userId: this.userId, id: this.$route.params.id }
            );
        }
    },
    computed: {
        ...mapState({
            refreshCount: state => state.refreshInfo.refreshCount,
            refreshFailed: state => state.refreshInfo.refreshFailed,
            refreshFlag: state => state.refreshInfo.refreshFlag,
            userId: state => state.userInfo.userId
        }),
        likeIconName() {
            if (this.isLike) {
                return 'like';
            } else {
                return 'like-o';
            }
        },
        likeIconColor() {
            if (this.isLike) {
                return '#f44';
            } else {
                return '#000';
            }
        }
    },
    components: {
        DetailTop,
        DetailInfo,
        DetailComment
    },
    watch: {
        refreshFailed: function(val) {
            if (val) {
                this.$toast({
                    duration: 1000,
                    message: '刷新成功',
                    type: 'success'
                });
                this[REFRESH_INIT]();
                this.isLoading = false;
                console.log('failed');
            }
        },
        refreshCount: function(val) {
            if (this.refreshFlag && val === 0) {
                this.$toast({
                    duration: 1000,
                    message: '刷新成功',
                    type: 'success'
                });
                this[REFRESH_INIT]();
                this.isLoading = false;
            }
        },
        refreshFlag: function(val) {
            if (val) {
                this.refresh();
            }
        }
    },
    created: function() {
        this.refresh();
    }
};
</script>
