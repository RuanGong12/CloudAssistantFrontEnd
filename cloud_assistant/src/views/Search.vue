<template>
    <div>
        <div>
            <van-search v-model="searchText" placeholder="输入课程/教师名" show-action @search="onSearch">
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </div>
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
import CourseList from '@/components/CourseList';
import DataService from '@/api/DataService';
// import DataService from '@/api/DataService';
// import { CHANGE_REFRESH_COUNT } from '@/store/mutation-types';
// import { mapState } from 'vuex';
export default {
    data() {
        return {
            listItems: [],
            loading: false,
            finished: false,
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
                    this.listItems = [...response.result];
                    this.finished = true;
                    // this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                },
                err => {
                    console.log(err);
                    // TODO
                    // this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                }
            );
        },
        onSearch() {
            this.refresh();
        }
    },
    components: {
        CourseList
    }
};
</script>
