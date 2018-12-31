/*
 * @Author: wujie
 * @Date: 2018-12-31 16:10:01
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-31 19:35:45
 */

<template>
    <div>
        <div class="input-card">
            <van-cell-group>
                <van-field
                    v-model="userId"
                    label="账号"
                    icon="question-o"
                    placeholder="请输入账号"
                    @click-icon="$toast('账号为6位数字')"
                />
                <van-field v-model="password" type="password" label="密码" placeholder="请输入密码"/>
            </van-cell-group>
        </div>
        <div class="login-button">
            <van-button type="danger" size="large" @click="login">登录</van-button>
        </div>
        <div class="sginup-button">
            <van-button type="warning" size="large" @click="register" plain>注册</van-button>
        </div>
    </div>
</template>

<style>
.login-button,
.sginup-button {
    margin: 20px auto;
    width: 300px;
}

.login-button {
    margin-top: 40px;
}

.input-card {
    margin-top: 230px;
    background: #ffffff;
}

.van-button--danger {
    background-color: #f56c6c;
}
</style>

<script>
import { mapMutations, mapActions } from 'vuex';
import { SHOW_SIGNUP_DIALOG, MODULES_NAME } from '@/store/mutation-types';
import { POST_LOGIN } from '@/store/action-types';
export default {
    data() {
        return {
            userId: '',
            password: ''
        };
    },
    methods: {
        ...mapActions([POST_LOGIN]),
        ...mapMutations(MODULES_NAME.dialog, [SHOW_SIGNUP_DIALOG]),
        register() {
            this[SHOW_SIGNUP_DIALOG]();
        },
        login() {
            if (this.userId.length !== 6) {
                this.$toast({
                    duration: 1000,
                    message: '账号长度应为6位',
                    type: 'fail'
                });
            } else if (this.password.length < 8 || this.password.length > 25) {
                this.$toast({
                    duration: 1000,
                    message: '密码错误',
                    type: 'fail'
                });
            } else {
                this[POST_LOGIN]({
                    userId: this.userId,
                    password: this.password,
                    succeedHandler: () => {
                        this.$toast({
                            duration: 1000,
                            message: '登录成功',
                            type: 'success'
                        });
                    },
                    failedHandler: () => {
                        this.$toast({
                            duration: 1000,
                            message: '账号或密码错误',
                            type: 'fail'
                        });
                    }
                });
            }
        }
    }
};
</script>
