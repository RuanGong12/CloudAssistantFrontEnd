/*
 * @Author: double7
 * @Date: 2018-12-30 11:30:21
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-30 12:19:19
 */
<template>
    <section class="main-card">
        <div class="top-container">
            <div
                class="detail-cover"
                v-lazy:background-image="'http://edu-image.nosdn.127.net/8282FBC079673EA3A28339617E2F69E5.jpg?imageView&thumbnail=510y288&quality=100&thumbnail=223x125&quality=100'"
            ></div>
            <div class="info" :style="{'width': clientWidth - 240 + 'px'}">
                <div class="timeInfo">
                    <p>1-13周 周三 第一大节</p>
                    <p>周五 第三大节</p>
                </div>
                <div class="tags">
                    <div class="detail-tag">材料</div>
                    <div class="detail-tag">物理</div>
                    <div class="detail-tag">结课</div>
                    <div class="detail-tag">结课</div>
                    <div class="detail-tag">结课</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.detail-cover {
    position: relative;
    box-shadow: 0 6px 5px -3px #aaa;
    border: 1px solid #f0f0f0;
    border-bottom: none;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
}

.top-container {
    position: relative;
    overflow: hidden;
    padding: 20px 10px 20px 20px;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

.top-container > div {
    float: left;
}

.top-container .detail-cover {
    width: 200px;
    height: 110px;
}

.top-container .info {
    padding: 0 0 0 8px;
    vertical-align: middle;
}

.tags {
    margin: 0px;
    overflow: hidden;
}

.detail-tag {
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
</style>

<script>
export default {
    data() {
        return { clientWidth: document.body.clientWidth };
    }
};
</script>
