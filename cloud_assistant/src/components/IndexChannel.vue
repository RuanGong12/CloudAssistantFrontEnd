<template>
    <div class="entrance float-clear-block">
        <ul>
            <li class="channel-unit">
                <div>
                    <div @click="coursehomePage">
                        <van-icon name="apps-o" size="40px"/>
                    </div>
                    <p>课程</p>
                </div>
            </li>
            <li class="channel-unit">
                <div>
                    <div @click="lecturehomePage">
                        <van-icon name="user-o" size="40px"/>
                    </div>
                    <p>讲座</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<style>
.entrance {
    border-bottom: #f0f0f0 solid 10px;
    background: #ffffff;
    padding: 10px;
}

.float-clear-block::after {
    clear: both;
    content: ' ';
    display: block;
    height: 0;
    overflow: hidden;
}

.channel-unit {
    float: left;
    width: 50%;
    text-align: center;
    padding: 10px 30px;
    box-sizing: border-box;
}

.channel-unit:first-child {
    border-right: #dddddd solid 1px;
}
</style>

<script>
import { GO_PAGE } from '@/store/mutation-types';
import Pages from '@/router/Pages';

export default {
    data() {
        return {};
    },
    methods: {
        coursehomePage() {
            this.$store.commit(GO_PAGE, Pages.CourseHomePage);
        },
        lecturehomePage() {
            this.$store.commit(GO_PAGE, Pages.LectureHomePage);
        }
    }
};
</script>
