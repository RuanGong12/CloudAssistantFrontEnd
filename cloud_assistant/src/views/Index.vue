<template>
    <div class="container-root">
        <index-header
            v-on:index="swipeToIndex"
            v-on:user="swipeToUser"
            v-bind:currentPage="currentPage"
        ></index-header>
        <div
            v-bind:style="towPageStyle"
            @touchstart="touchStart($event)"
            @touchmove="touchMove($event)"
            @touchend="touchEnd($event)"
        >
            <div class="container-scroll" v-bind:style="{ 'height': scrollHeight + 'px' }">
                <index-top></index-top>
                <index-channel></index-channel>
                <course-recommend></course-recommend>
                <index-footer></index-footer>
                <footer></footer>
                <div id="tem"></div>
            </div>

            <div class="container-user">
                <user-info></user-info>
            </div>
        </div>
    </div>
</template>

<style>
.container-scroll {
    height: 727px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}

.container-scroll,
.container-user {
    width: 100vw;
    float: left;
}

#tem {
    height: 1000px;
    background: #aaa;
}
</style>

<script>
import IndexHeader from '@/components/IndexHeader.vue';
import IndexTop from '@/components/IndexTop.vue';
import IndexChannel from '@/components/IndexChannel.vue';
import CourseRecommend from '@/components/CourseRecommend.vue';
import IndexFooter from '@/components/IndexFooter.vue';
import UserInfo from '@/views/UserInfo.vue';

let startPoint = {
    x: 0,
    y: 0
};
let swipeFailed = false;
let swipeSucceed = false;
let isSwipe = (x, y) => {
    let dx = Math.abs(x - startPoint.x);
    let dy = Math.abs(y - startPoint.y);
    if (dx + dy < 20) {
        return undefined;
    }
    if (dy === 0) {
        return true;
    }
    if (Math.abs(dy / dx) < 0.5) {
        return true;
    } else {
        return false;
    }
};

export default {
    data() {
        return {
            towPageStyle: {
                width: '200vw',
                transitionDuration: '0.5s',
                transform: 'translate3d(0vw,0px,0px)',
                overflow: 'hidden'
            },
            scrollHeight: document.body.clientHeight - 96,
            clientWidth: document.body.clientWidth,
            currentPage: 0
        };
    },
    methods: {
        swipeToIndex() {
            if (this.currentPage === 0) {
                return;
            }
            this.currentPage = 0;
            this.towPageStyle.transform = 'translate3d(0vw,0px,0px)';
        },
        swipeToUser() {
            if (this.currentPage === 1) {
                return;
            }
            this.currentPage = 1;
            this.towPageStyle.transform = 'translate3d(-100vw,0px,0px)';
        },
        touchStart(event) {
            console.log('start');
            swipeFailed = false;
            swipeSucceed = false;
            startPoint.x = event.targetTouches[0].clientX;
            startPoint.y = event.targetTouches[0].clientY;
        },
        touchMove(event) {
            if (swipeFailed || swipeSucceed) {
                return;
            }
            let x = event.targetTouches[0].clientX;
            let y = event.targetTouches[0].clientY;
            // if (swipeSucceed) {
            //     let dx = x - startPoint.x;
            //     this.movePage(dx);
            //     return;
            // }
            let swipeFlag = isSwipe(x, y);
            if (swipeFlag === true) {
                swipeSucceed = true;
                console.log('succeed');
            } else if (swipeFlag === false) {
                swipeFailed = true;
                console.log('failed');
            }
        },
        touchEnd(event) {
            if (swipeFailed) {
                return;
            }
            let dx = event.changedTouches[0].clientX - startPoint.x;
            if (dx < 0) {
                this.swipeToUser();
            } else {
                this.swipeToIndex();
            }
        },
        movePage(dx) {
            console.log(dx);
            this.towPageStyle.transitionDuration = '0';
            this.towPageStyle.transform = 'translate3d(' + dx + 'px,0px,0px)';
        }
    },
    components: {
        IndexHeader: IndexHeader,
        IndexTop: IndexTop,
        IndexChannel: IndexChannel,
        CourseRecommend: CourseRecommend,
        IndexFooter: IndexFooter,
        UserInfo: UserInfo
    },
    created: function() {
        console.log(document.body.clientHeight);
    }
};
</script>
