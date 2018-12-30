/*
 * @Author: double7
 * @Date: 2018-12-30 11:38:12
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-30 11:50:43
 */

<template>
    <section class="main-card">
        <div class="info-container">
            <div class="detail-title">
                <p class="van-ellipsis">
                    <span>神奇的材料世界</span>
                </p>
            </div>
            <div class="van-hairline--bottom">
                <span class="school">材料学院</span>
                <span class="teacher">文进</span>
                <span class="teacher">赵春霞</span>
            </div>
            <div class="van-hairline--bottom">
                <div class="rate-container float-clear-block">
                    <div>评分</div>
                    <van-rate class="detail-rate" :size="25" v-model="rateValue" readonly></van-rate>
                </div>
            </div>
            <div
                class="detail-description"
            >形形色色的材料构成了丰富多彩的物质世界，为我们创造了美好的生活,推进了人类文明的发展，影响和改变了我们的生活。玻璃、陶瓷、金属和塑料…….这些神奇物质是如何改变我们的世界？新材料的出现会给我们带来哪些惊喜？想知道背后精彩的科学故事和相关科学原理吗？让我们一起走进神奇的材料世界。</div>
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
    font-size: 1rem;
    text-indent: 2rem;
    line-height: 1.5rem;
}
</style>

<script>
export default {
    data() {
        return {
            rateValue: 0
        };
    }
};
</script>
