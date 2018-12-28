/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-28 19:08:01
 */

<template>
    <div>
        <div>
            <div class="user-head">
                <div class="user-head-img" v-lazy:background-image="userInfo.userAvatar"></div>
                <div class="user-head-border"></div>
            </div>
            <div class="user-name">
                <p>
                    <span id="user-name-text">{{userInfo.userName}}</span>
                    <van-icon name="edit" class="icon-button-edit" @click="showDialog"></van-icon>
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
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    z-index: 1000;
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
    top: -3px;
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
import {
    MODULES_NAME,
    SHOW_USER_NAME_EDIT_DIALOG
} from '@/store/mutation-types';
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {};
    },
    methods: {
        ...mapMutations(MODULES_NAME.dialog, [SHOW_USER_NAME_EDIT_DIALOG]),
        showDialog() {
            this[SHOW_USER_NAME_EDIT_DIALOG]();
        },
        openMsg() {
            this.$message({ message: 'info', customClass: 'message-box' });
        }
    },
    computed: {
        ...mapState({
            userInfo: state => state.userInfo
        })
    }
};
</script>
