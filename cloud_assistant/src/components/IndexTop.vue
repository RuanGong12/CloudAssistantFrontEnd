<template>
    <div class="index-top">
        <el-carousel height="180px" indicator-position="none" arrow="never">
            <el-carousel-item v-for="item in carouselData" :key="item.id">
                <div class="carousel-card" v-bind:style="{'background-image': 'url('+item.cover+')'}">
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style>

.index-top {
    padding: 10px 10px;
}
.carousel-card {
    border-radius: 4px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
}

.carousel-card img {
    width: 100%;
    height: 100%;
}
</style>

<script>
export default {
    data() {
        return {
            carouselData: null
        };
    },
    created: function() {
        this.carouselData = [
            {
                id: 1,
                title: 'hello1',
                cover: '/static/img/1.jpg'
            },
            {
                id: 2,
                title: 'hello2',
                cover: '/static/img/2.jpg'
            },
            {
                id: 3,
                title: 'hello3',
                cover: '/static/img/3.jpg'
            },
            {
                id: 4,
                title: 'hello4',
                cover: '/static/img/4.png'
            },
            {
                id: 5,
                title: 'hello5',
                cover: '/static/img/5.png'
            }
        ];
    }
};
</script>
