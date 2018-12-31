/*
 * @Author: double7
 * @Date: 2018-12-28 22:11:33
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-30 16:59:42
 */
<template>
    <div>
        <div class="recommend-root">
            <van-panel title="标题" desc="描述信息" status="状态">
                <div slot="header" class="header van-hairline--bottom">
                    <span class="header-title">热门课程</span>
                </div>
                <div>
                    <course-list
                        :listItems="listItems"
                        :loading="loading"
                        :finished="finished"
                        :finishedText="finishedText"
                    ></course-list>
                </div>
            </van-panel>
        </div>
    </div>
</template>

<style>
.recommend-root {
    margin-top: 5px;
    padding: 0 20px;
    border-bottom: #f0f0f0 solid 10px;
    background: #fff;
}

.header {
    position: relative;
    height: 40px;
    color: #303133;
    font-size: 1rem;
    line-height: 40px;
    text-align: center;
    font-weight: bold;
}
</style>

<script>
import CourseList from '@/components/CourseList';
import DataService from '@/api/DataService';
import { mapState, mapMutations } from 'vuex';
import { CHANGE_REFRESH_COUNT } from '@/store/mutation-types';

export default {
    data() {
        return {
            listItems: [],
            loading: false,
            finished: true,
            finishedText: ''
        };
    },
    methods: {
        ...mapMutations([CHANGE_REFRESH_COUNT]),
        refresh() {
            this[CHANGE_REFRESH_COUNT]({ isAdd: true });
            DataService.getRecommendCourses(
                response => {
                    this.listItems = [...response.result];
                    this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                },
                err => {
                    console.log(err);
                    // TODO
                    this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                }
            );
        }
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
    },
    created: function() {
        this.refresh();
    },
    components: {
        CourseList
    }
};
</script>
