<template>
    <div>
        <lecture-filter v-on:onRefresh="onRefresh"></lecture-filter>
        <div class="container-scroll" v-bind:style="{ 'height': scrollHeight + 'px' }">
            <div class="list-root">
                <lecture-list
                    :listItems="listItems"
                    :loading="loading"
                    :finished="finished"
                    :finishedText="finishedText"
                ></lecture-list>
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
import LectureFilter from '@/components/LectureFilter';
import LectureList from '@/components/LectureList';
import DataService from '@/api/DataService';
// import { mapMutations } from 'vuex';
// import { CHANGE_REFRESH_COUNT } from '@/store/mutation-types';
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
        onRefresh(date) {
            this.refresh(date);
        },
        // ...mapMutations([CHANGE_REFRESH_COUNT]),
        refresh(date) {
            // this[CHANGE_REFRESH_COUNT]({ isAdd: true });
            DataService.getClassifiedLectureList(
                response => {
                    this.listItems = [...response.result];
                    // this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                },
                err => {
                    console.log(err);
                    // TODO
                    // this[CHANGE_REFRESH_COUNT]({ isAdd: false });
                },
                { date }
            );
        }
    },
    created: function() {
        this.refresh(0);
    },
    components: {
        LectureFilter,
        LectureList
    }
};
</script>
