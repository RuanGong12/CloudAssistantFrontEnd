/*
 * @Author: double7
 * @Date: 2018-12-29 11:40:04
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-31 23:44:46
 */

<template>
    <div>
        <van-list
            class="course-list"
            :loading="loading"
            :finished="finished"
            :finished-text="finishedText"
        >
            <div
                class="course-card"
                v-for="item in listItems"
                :key="item.id"
                @click="examineDetail(item.id)"
            >
                <div class="course-card__body float-clear-block" style="padding: 0px;">
                    <div class="course-card-left">
                        <div class="course-card-img" v-lazy:background-image="item.cover"></div>
                    </div>
                    <div class="course-card-right" style="padding: 6px;">
                        <span class="van-ellipsis">{{ item.courseName }}</span>
                        <div class="card-description clearfix">
                            <p class="van-ellipsis">{{ item.school }}</p>
                            <p class="van-ellipsis">
                                <span
                                    class="teacher-unit"
                                    v-for="teacher in item.teachers"
                                    :key="teacher"
                                >{{ teacher }}</span>
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
.teacher-unit {
    margin-right: 7px;
}

.course-card {
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

.course-card__body > div {
    overflow: hidden;
    float: left;
    box-sizing: border-box;
}

.course-card-img {
    height: 100px;
    background-position: center;
    background-size: cover;
}
.course-card-left {
    width: 50%;
}
.course-card-right {
    font-size: 1rem;
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
        examineDetail(courseId) {
            Pages.CourseDetailPage.path = Pages.CourseDetailPage.setPath(
                courseId
            );
            this[GO_PAGE](Pages.CourseDetailPage);
        },
        ...mapMutations([GO_PAGE])
    }
};
</script>
