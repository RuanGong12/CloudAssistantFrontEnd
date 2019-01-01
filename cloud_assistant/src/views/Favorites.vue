<template>
    <div class="favorite-root">
        <van-tabs
            v-model="activeTab"
            class="favorites-headers"
            sticky
            swipeable
            animated
            :line-width="34"
            :line-height="2"
            :duration="0.4"
            color="#f56c6c"
        >
            <van-tab title="课程">
                <div class="container-scroll" v-bind:style="{ 'height': scrollHeight + 'px' }">
                    <div class="list-root">
                        <course-list
                            :listItems="courseListItems"
                            :loading="loading"
                            :finished="finished"
                            :finishedText="finishedText"
                        ></course-list>
                    </div>
                </div>
            </van-tab>
            <van-tab title="讲座">
                <div class="container-scroll" v-bind:style="{ 'height': scrollHeight + 'px' }">
                    <div class="list-root">
                        <lecture-list
                            :listItems="lectureListItems"
                            :loading="loading"
                            :finished="finished"
                            :finishedText="finishedText"
                        ></lecture-list>
                    </div>
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

.list-root {
    margin-top: 5px;
    padding: 3px 20px;
    border-bottom: #f0f0f0 solid 10px;
    background: #fff;
}
</style>

<script>
import CourseList from '@/components/CourseList';
import DataService from '@/api/DataService';
import LectureList from '@/components/LectureList';
export default {
    data() {
        return {
            activeTab: 0,
            courseListItems: [],
            lectureListItems: [],
            loading: false,
            finished: true,
            finishedText: '没有更多了',
            searchText: '',
            scrollHeight: document.body.clientHeight - 92
        };
    },
    methods: {
        refresh() {
            // this[CHANGE_REFRESH_COUNT]({ isAdd: true });
            DataService.getRecommendCourses(
                response => {
                    this.courseListItems = [...response.result];
                    // this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                },
                err => {
                    console.log(err);
                    // TODO
                    // this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                }
            );
            DataService.getClassifiedLectureList(
                response => {
                    this.lectureListItems = [...response.result];
                    // this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                },
                err => {
                    console.log(err);
                    // TODO
                    // this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                },
                { date: '全部' }
            );
        }
    },
    created: function() {
        this.refresh();
    },
    components: {
        CourseList,
        LectureList
    }
};
</script>
