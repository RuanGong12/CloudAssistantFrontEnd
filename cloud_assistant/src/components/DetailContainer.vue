/*
 * @Author: double7
 * @Date: 2018-12-30 11:30:26
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-30 16:18:03
 */

<template>
    <div>
        <div class="icon-warp">
            <van-icon name="like-o" color="#000" class="icon-like"></van-icon>
        </div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="refreshDisabled">
            <div
                class="container-scroll"
                ref="detailContainerScroll"
                :style="{ 'height': scrollHeight + 'px' }"
                @scroll="onscroll"
            >
                <detail-top :courseTopData="courseTopData"></detail-top>
                <detail-info :courseInfoData="courseInfoData"></detail-info>
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
    z-index: 2001;
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
            courseTopData: {},
            courseInfoData: {}
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
            DataService.getCourseDetail(
                response => {
                    let {title, school, cover, teachers, time, tags, rate, description} = response.result;
                    this.courseTopData = {cover, time, tags};
                    this.courseInfoData = {title, school, teachers, rate, description};
                    this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                },
                err => {
                    console.log(err);
                    // TODO
                    this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                },
                { courseId: this.$route.params.courseId }
            );
        }
    },
    computed: {
        ...mapState({
            refreshCount: state => state.refreshInfo.refreshCount,
            refreshFailed: state => state.refreshInfo.refreshFailed,
            refreshFlag: state => state.refreshInfo.refreshFlag
        })
    },
    components: {
        DetailTop,
        DetailInfo,
        DetailComment
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
    },
    created: function() {
        this.refresh();
    }
};
</script>
