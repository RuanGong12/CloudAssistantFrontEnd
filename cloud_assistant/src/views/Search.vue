<template>
    <div>
        <div>
            <van-search placeholder="请输入课程或教师名" show-action @search="onSearch">
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </div>
        <div>
            <course-list
                :listItems="listItems"
                :loading="loading"
                :finished="finished"
                :finishedText="finishedText"
            ></course-list>
        </div>
    </div>
</template>

<style>
</style>

<script>
import CourseList from '@/components/CourseList';
// import DataService from '@/api/DataService';
// import { CHANGE_REFRESH_COUNT } from '@/store/mutation-types';
// import { mapState } from 'vuex';
export default {
    data() {
        return {
            listItems: [],
            loading: false,
            finished: false,
            finishedText: '没有更多了'
        };
    },
    methods: {
        onSearch() {
            console.log('sad');
        }
    },
    components: {
        CourseList
    }
};
</script>
