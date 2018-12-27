<template>
    <header>
        <div class="top-menu">
            <ul class="swipe-tab float-clear-block">
                <li v-bind:class="{ 'swipe-tab__on': currentPage === 0 }" @click="tabSwitch(0)">首页</li>
                <li v-bind:class="{ 'swipe-tab__on': currentPage === 1 }" @click="tabSwitch(1)">个人信息</li>
                <i v-bind:style="sliderStyle"></i>
            </ul>
        </div>
    </header>
</template>

<style>
.top-menu {
    padding: 0px 90px;
    text-align: center;
    background: #fff;
    border-bottom: 1px solid #eee;
    position: relative;
}

.top-menu i {
    bottom: 0;
}

.top-menu i::before {
    content: ' ';
    display: block;
    height: 2px;
    width: 34px;
    margin: 0 auto;
    background: #f56c6c;
}

.swipe-tab li {
    position: relative;
    display: inline-block;
    height: 48px;
    width: 48%;
    line-height: 50px;
    font-size: 1rem;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

.swipe-tab {
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.swipe-tab li {
    float: left;
    width: 50%;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.swipe-tab i {
    position: absolute;
    left: 0;
    transition: transform 0.3s ease-out;
    -webkit-transition: -webkit-transform 0.3s ease-out;
}

.float-clear-block::after {
    clear: both;
    content: ' ';
    display: block;
    height: 0;
    overflow: hidden;
}

.swipe-tab__on {
    color: #f56c6c;
}
</style>

<script>
export default {
    props: ['currentPage'],
    data() {
        return {
            sliderStyle: {
                width: '50%',
                transitionDuration: '0.4s',
                transform: 'translate3d(0%,0,0)'
            }
        };
    },
    methods: {
        tabSwitch(index) {
            if (index === 0) {
                this.sliderStyle.transform = 'translate3d(0%,0,0)';
                this.$emit('index');
            } else {
                this.sliderStyle.transform = 'translate3d(100%,0,0)';
                this.$emit('user');
            }
        }
    },
    watch: {
        currentPage: function(val) {
            this.tabSwitch(val);
        }
    }
};
</script>
