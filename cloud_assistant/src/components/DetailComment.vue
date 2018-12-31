/*
 * @Author: double7
 * @Date: 2018-12-30 11:51:31
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-30 22:14:41
 */

<template>
    <section class="main-card">
        <van-panel title="评论" desc="在这里写下你对课程的评价，分享有用的资料吧" icon="comment-o">
            <div class="comment-button">
                <van-button size="large" type="danger" text="添加评论" @click="showDialog"></van-button>
            </div>
            <van-list :finished="true" finished-text="没有更多了">
                <van-panel
                    :title="comment.userName"
                    :status="comment.date"
                    class="comment-unit"
                    v-for="comment in comments"
                    :key="comment.id"
                >
                    <div class="comment-content">{{ comment.content }}</div>
                </van-panel>
            </van-list>
        </van-panel>
    </section>
</template>

<style>
.comment-button {
    padding: 10px 20px;
}

.van-cell__title {
    color: #909399;
    font-size: 1em;
}

.comment-content {
    color: #606266;
    line-height: 1.5em;
    padding: 10px 15px;
    border-bottom: 5px solid #f5f5f5;
}

.comment-unit:first-child {
    border-top: 5px solid #f5f5f5;
}

.van-panel__header .van-cell__value {
    color: #909399;
}

.van-button--danger {
    background-color: #f56c6c;
}

/* .van-button--large {
    height: 40px;
    line-height: 40px;
} */
</style>

<script>
import DataService from '@/api/DataService';
import { mapState, mapMutations } from 'vuex';
import {
    CHANGE_REFRESH_COUNT,
    SHOW_ADD_COMMENT_DIALOG,
    MODULES_NAME
} from '@/store/mutation-types';

export default {
    data() {
        return {
            comments: []
        };
    },
    methods: {
        ...mapMutations([CHANGE_REFRESH_COUNT]),
        ...mapMutations(MODULES_NAME.dialog, [SHOW_ADD_COMMENT_DIALOG]),
        refresh() {
            this[CHANGE_REFRESH_COUNT]({ isAdd: true });
            let getComment;
            if (this.$route.name === 'CourseDetail') {
                getComment = DataService.getCourseComment;
            } else {
                getComment = DataService.getLectureComment;
            }
            getComment(
                response => {
                    this.comments = [...response.result];
                    this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                },
                err => {
                    console.log(err);
                    // TODO
                    this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                },
                { id: this.$route.params.id }
            );
        },
        showDialog() {
            this[SHOW_ADD_COMMENT_DIALOG]();
        }
    },
    created: function() {
        this.refresh();
    },
    computed: {
        ...mapState({
            refreshFlag: state => state.refreshInfo.refreshFlag
        })
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
