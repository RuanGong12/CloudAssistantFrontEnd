<template>
    <div>
        <section class="main-card">
            <div class="course-header">
                <div
                    class="course-cover"
                    v-lazy:background-image="'http://edu-image.nosdn.127.net/8282FBC079673EA3A28339617E2F69E5.jpg?imageView&thumbnail=510y288&quality=100&thumbnail=223x125&quality=100'"
                ></div>
                <div class="info" :style="{'width': clientWidth - 240 + 'px'}">
                    <div class="timeInfo">
                        <p>1-13周 周三 第一大节</p>
                        <p>周五 第三大节</p>
                    </div>
                    <div class="tags">
                        <div class="course-tag">材料</div>
                        <div class="course-tag">物理</div>
                        <div class="course-tag">结课</div>
                        <div class="course-tag">结课</div>
                        <div class="course-tag">结课</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="main-card">
            <div class="course-detail">
                <div class="course-title">
                    <p>
                        <span id="course-title-text">神奇的材料世界</span>
                        <van-icon name="like-o" color="#909399" class="icon-button-lick"></van-icon>
                    </p>
                </div>
                <van-rate></van-rate>
            </div>
        </section>
    </div>
</template>

<style>
.timeInfo {
    padding: 5px;
    padding-bottom: 0;
}

.timeInfo p {
    word-break: normal;
    white-space: pre-warp;
    word-wrap: break-word;
    color: #909399;
    font-size: 12px;
}

.tags {
    margin: 0px;
    overflow: hidden;
}

.course-tag {
    float: left;
    margin: 5px 5px 0 0;
    padding: 3px 6px 2px;
    max-width: 6em;
    font: 10px/11px a;
    color: #53ac7d;
    border: 1px solid #53ac7d;
    border-radius: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.main-card {
    border-bottom: 10px solid #f5f5f5;
}

.course-header {
    position: relative;
    overflow: hidden;
    padding: 20px 10px 20px 20px;
    /* display: table; */
    width: 100%;
    -webkit-box-sizing: border-box;
}

.course-header > div {
    float: left;
}

.course-header .course-cover {
    width: 200px;
    height: 110px;
}

.course-header .info {
    padding: 0 0 0 8px;
    /* display: table-cell; */
    vertical-align: middle;
}

.course-cover {
    position: relative;
    box-shadow: 0 6px 5px -3px #aaa;
    border: 1px solid #f0f0f0;
    border-bottom: none;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
}

.u-booktag {
    margin-left: 3px;
    border: 1px solid #00a0e9;
    border-radius: 4px;
    font-size: 12px;
    line-height: 16px;
    display: inline-block;
    padding: 0 2px;
}

.u-booktag.-serial {
    color: #63bd6e;
    border-color: #63bd6e;
}

.course-title {
    padding: 5px;
    margin: auto auto;
    text-align: center;
}

.course-title p {
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
    line-height: 1.4rem;
    font-size: 1.4rem;
}

.course-title > p {
    position: relative;
}

.icon-button-lick {
    position: absolute;
    font-size: 24px;
    margin-left: 20px;
    top: -2px;
}
</style>

<script>
export default {
    data() {
        return {
            clientWidth: document.body.clientWidth
        };
    },
    created: function() {}
};
</script>
