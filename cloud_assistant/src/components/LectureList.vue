/*
 * @Author: double7
 * @Date: 2018-12-29 11:40:04
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-31 23:45:45
 */

<template>
    <div>
        <van-list
            class="lecture-list"
            :loading="loading"
            :finished="finished"
            :finished-text="finishedText"
        >
            <div
                class="lecture-card"
                v-for="item in listItems"
                :key="item.id"
                @click="examineDetail(item.id)"
            >
                <div class="lecture-card__body float-clear-block" style="padding: 0px;">
                    <div class="lecture-card-left">
                        <div class="lecture-card-img" v-lazy:background-image="item.cover"></div>
                    </div>
                    <div class="lecture-card-right" style="padding: 6px;">
                        <p>{{ item.lectureName }}<p>
                        <div class="card-description clearfix">
                            <p class="van-ellipsis">{{ item.school }}</p>
                            <p class="van-ellipsis">
                                <span v-for="teacher in item.teachers" :key="teacher">{{ teacher }}</span>
                            </p>
                            <p class="van-ellipsis">{{ item.timeInfo }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </van-list>
    </div>
</template>

<style>
.lecture-card {
    margin: 16px auto;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: 0.3s;
    min-width: 300px;
    max-width: 400px;
    width: 100%;
}

.float-clear-block::after {
    clear: both;
    content: ' ';
    display: block;
    height: 0;
    overflow: hidden;
}

.lecture-card__body > div {
    overflow: hidden;
    float: left;
    box-sizing: border-box;
}

.lecture-card-img {
    height: 150px;
    background-position: center;
    background-size: cover;
}
.lecture-card-left {
    width: 35%;
}
.lecture-card-right {
    font-size: 1rem;
    color: #606266;
    width: 65%;
}

.card-description {
    font-size: 0.9rem;
    color: #909399;
    margin-top: 8px;
    line-height: 1.3rem;
}
</style>

<script>
import { mapMutations } from 'vuex';
import { GO_PAGE } from '@/store/mutation-types';
import Pages from '@/router/Pages';
export default {
    props: ['listItems', 'loading', 'finished', 'finishedText'],
    data() {
        return {};
    },
    methods: {
        examineDetail(lectureId) {
            Pages.LectureDetailPage.path = Pages.LectureDetailPage.setPath(
                lectureId
            );
            this[GO_PAGE](Pages.LectureDetailPage);
        },
        ...mapMutations([GO_PAGE])
    }
};
</script>
