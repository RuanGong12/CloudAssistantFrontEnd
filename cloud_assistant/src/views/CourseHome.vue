<template>
    <div>
        <course-filter v-on:onRefresh="onRefresh"></course-filter>
        <div class="container-scroll" v-bind:style="{ 'height': scrollHeight + 'px' }">
            <div class="list-root">
                <course-list
                    :listItems="listItems"
                    :loading="loading"
                    :finished="finished"
                    :finishedText="finishedText"
                ></course-list>
            </div>
        </div>
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
import CourseFilter from '@/components/CourseFilter';
import CourseList from '@/components/CourseList';
import DataService from '@/api/DataService';
export default {
    data() {
        return {
            listItems: [],
            loading: false,
            finished: true,
            finishedText: '没有更多了',
            scrollHeight: document.body.clientHeight - 92
        };
    },
    methods: {
        onRefresh(week, time, school) {
            console.log(week + time + school);
            this.refresh(week);
        },
        // ...mapMutations([CHANGE_REFRESH_COUNT]),
        refresh(date) {
            // this[CHANGE_REFRESH_COUNT]({ isAdd: true });
            DataService.getRecommendCourses(
                response => {
                    this.listItems = [...response.result];
                    // this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                },
                err => {
                    console.log(err);
                    // TODO
                    // this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                }
            );
        }
    },
    created: function() {
        this.refresh(0);
    },
    components: {
        CourseList,
        CourseFilter
    }
};
</script>
