<template>
    <div>
        <div>
            <div class="user-head">
                <div class="user-head-img"></div>
                <div class="user-head-border"></div>
            </div>
            <div class="user-name">
                <p>double7
                    <van-icon name="edit" class="icon-button-edit"></van-icon>
                </p>
            </div>
        </div>
        <van-cell-group class="user-channel">
            <van-cell title-class="cell-title" title="我的收藏" icon="like-o" is-link size="large"/>
            <van-cell title-class="cell-title" title="切换账号" icon="exchange" is-link size="large"/>
        </van-cell-group>
    </div>
</template>

<style>
.message-box {
    min-width: 100px;
    height: 48px;
    width: 70%;
    top: 12px;
}

.user-head {
    position: relative;
    width: 10rem;
    height: 10rem;
    margin: 32px auto 18px auto;
}

.user-head-img {
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    background: url(../../static/img/2.jpg) no-repeat center;
    background-size: cover;
    border-radius: 50%;
    z-index: 10000;
}

.user-head-border {
    position: absolute;
    width: 93%;
    height: 93%;
    top: 2.3%;
    left: 2.42%;
    border: #999 solid 2px;
    border-radius: 50%;
    background: #fff;
}

.user-name {
    padding: 5px;
    margin: auto auto;
    text-align: center;
}

.user-name p {
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
    line-height: 1.4rem;
    font-size: 1.4rem;
}

.user-name > p {
    position: relative;
}

.icon-button-edit {
    position: absolute;
    font-size: 25px;
    margin-left: 16px;
    top: -4px;
}

.cell-title {
    padding-left: 12px;
}

.user-channel {
    margin-top: 40px;
    padding-left: 4px;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
</style>

<script>
export default {
    methods: {
        openMsg() {
            this.$message({ message: 'info', customClass: 'message-box' });
        }
    }
};
</script>
