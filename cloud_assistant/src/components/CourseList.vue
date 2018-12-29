/*
 * @Author: double7
 * @Date: 2018-12-29 11:40:04
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-29 23:22:24
 */

<template>
    <div>
        <van-list
            class="course-list"
            v-model="loading"
            :finished="finished"
            :finished-text="finishedText"
            @load="onLoad"
        >
            <div
                class="course-card"
                v-for="item in listItems"
                :key="item.id"
                @click="examineDetail"
            >
                <div class="course-card__body float-clear-block" style="padding: 0px;">
                    <div class="card-left">
                        <div class="card-img" v-lazy:background-image="item.cover"></div>
                    </div>
                    <div class="card-right" style="padding: 6px;">
                        <span class="van-ellipsis">{{ item.courseName }}</span>
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
.course-card {
    margin: 20px auto;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: 0.3s;
    min-width: 300px;
    max-width: 400px;
    width: 88%;
    line-height: normal;
}

.float-clear-block::after {
    clear: both;
    content: ' ';
    display: block;
    height: 0;
    overflow: hidden;
}

.course-card__body > div {
    overflow: hidden;
    float: left;
    box-sizing: border-box;
}

.card-img {
    height: 100px;
    background-position: center;
    background-size: cover;
}
.card-left {
    width: 50%;
}
.card-right {
    font-size: 1.1rem;
    color: #606266;
    width: 50%;
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
        examineDetail() {
            this[GO_PAGE](Pages.CourseDetailPage);
        },
        onLoad() {
            this.$emit('onLoad');
        },
        ...mapMutations([GO_PAGE])
    }
};
</script>
