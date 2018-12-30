/*
 * @Author: double7
 * @Date: 2018-12-30 11:38:12
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-30 23:12:05
 */

<template>
    <section class="main-card">
        <div class="info-container">
            <div class="detail-title">
                <p class="van-ellipsis">
                    <span>{{ detailInfoData.title }}</span>
                </p>
            </div>
            <div class="van-hairline--bottom">
                <span class="school">{{ detailInfoData.school }}</span>
                <span
                    class="teacher"
                    v-for="teacher in detailInfoData.teachers"
                    :key="teacher"
                >{{ teacher }}</span>
            </div>
            <div class="van-hairline--bottom" v-if="isCourse">
                <div class="rate-container float-clear-block" @click="addRate">
                    <div>评分</div>
                    <van-rate class="detail-rate" :size="25" v-model="detailInfoData.rate" readonly></van-rate>
                </div>
            </div>
            <div class="detail-description"><p v-for="text in detailInfoData.description" :key="text">{{ text }}</p></div>
        </div>
    </section>
</template>

<style>
.info-container {
    padding: 10px 20px;
}

.info-container > div {
    padding: 5px 5px;
}

.detail-title p {
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
    line-height: 1.4rem;
    font-size: 1.4rem;
}

.school,
.teacher {
    font-size: 14px;
    color: #909399;
}

.school {
    margin-right: 32px;
}

.teacher {
    margin-right: 5px;
}

.rate-container {
    margin-top: 10px;
    width: 200px;
}

.rate-container * {
    float: left;
}

.rate-container > div:first-child {
    padding: 5px 5px 5px 0;
    margin-right: 10px;
    font-size: 16px;
    color: #606266;
}

.float-clear-block::after {
    clear: both;
    content: ' ';
    display: block;
    height: 0;
    overflow: hidden;
}

.detail-rate {
    padding: 3px;
}

.detail-description {
    margin-top: 10px;
    color: #606266;
    font-size: 0.9rem;
    text-indent: 2rem;
    line-height: 1.5rem;
}
</style>

<script>
import { MODULES_NAME, SHOW_RATE_DIALOG } from '@/store/mutation-types';
import { mapMutations } from 'vuex';
export default {
    props: ['detailInfoData'],
    data() {
        return {
            rateValue: 0,
            isCourse: true
        };
    },
    methods: {
        ...mapMutations(MODULES_NAME.dialog, [SHOW_RATE_DIALOG]),
        addRate() {
            if (this.detailInfoData.hasRated === 'true') {
                this.$toast('你已经评分过了');
            } else {
                this[SHOW_RATE_DIALOG]();
            }
        }
    },
    mounted: function() {
        this.isCourse = this.$route.name === 'CourseDetail';
    }
};
</script>
