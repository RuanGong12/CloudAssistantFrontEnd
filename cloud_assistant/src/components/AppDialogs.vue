/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-31 20:23:41
 */

<template>
    <div>
        <div class="user-page-dialog">
            <van-dialog
                v-model="userNameEditDialog.showFlag"
                :before-close="handleNameEdit"
                show-cancel-button
                :showConfirmButton="showConfirmButton"
            >
                <van-panel title="更改昵称" icon="edit">
                    <van-field
                        v-model="editedName"
                        label="昵称"
                        placeholder="输入昵称"
                        :error-message="nameErrorMessage"
                    ></van-field>
                </van-panel>
            </van-dialog>
        </div>
        <div>
            <van-dialog
                v-model="addCommentDialog.showFlag"
                :before-close="handleCommentAdd"
                show-cancel-button
                :showConfirmButton="showConfirmButton"
            >
                <van-panel title="添加评论" icon="smile-comment-o">
                    <van-field
                        v-model="comment"
                        placeholder="输入评论"
                        :error-message="commentErrorMessage"
                        autosize
                        clearable
                        type="textarea"
                    ></van-field>
                </van-panel>
            </van-dialog>
        </div>
        <div>
            <van-dialog
                v-model="rateDialog.showFlag"
                :before-close="handleRate"
                show-cancel-button
                :showConfirmButton="true"
            >
                <div class="dialog-rate-container">
                    <van-rate class="dialog-detail-rate" :size="25" v-model="rate"></van-rate>
                </div>
            </van-dialog>
        </div>
        <div>
            <van-dialog
                v-model="signupDialog.showFlag"
                :before-close="handlesignup"
                show-cancel-button
                :showConfirmButton="showConfirmButton"
            >
                <van-panel title="注册" icon="add-o">
                    <van-field
                        v-model="editedName"
                        label="昵称"
                        placeholder="请输入昵称"
                        :error-message="nameErrorMessage"
                    ></van-field>
                    <van-field
                        v-model="password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        :error-message="passwordErrorMessage"
                    ></van-field>
                    <van-field
                        v-model="confirmPassword"
                        type="password"
                        label="确认密码"
                        placeholder
                        :error-message="confirmPasswordErrorMessage"
                    ></van-field>
                    <van-collapse v-model="activeNames">
                        <van-collapse-item title="头像" name="1">
                            <van-field v-model="avatar" label="URL(可选)" placeholder="你可以输入头像的url"></van-field>
                        </van-collapse-item>
                    </van-collapse>
                </van-panel>
            </van-dialog>
        </div>
    </div>
</template>

<style>
.dialog-detail-rate {
    padding: 3px;
}

.dialog-rate-container {
    margin: 10px auto;
    width: 155px;
}

.van-cell-group.van-hairline--top-bottom.van-panel::after {
    border: none;
}
</style>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { REFRESH_DATA } from '@/store/mutation-types';
import {
    PUT_USER_INFO,
    POST_COMMENT,
    POST_RATE,
    POST_USER_INFO
} from '@/store/action-types';
export default {
    data() {
        return {
            editedName: '',
            showConfirmButton: true,
            comment: '',
            rate: 0,
            password: '',
            avatar: '',
            confirmPassword: '',
            activeNames: []
        };
    },
    methods: {
        ...mapMutations([REFRESH_DATA]),
        ...mapActions([PUT_USER_INFO, POST_COMMENT, POST_RATE, POST_USER_INFO]),
        async handleNameEdit(action, done) {
            if (action === 'cancel') {
                done();
            } else {
                if (this.nameErrorMessage !== '') {
                    done(false);
                } else {
                    try {
                        let response = await this[PUT_USER_INFO]({
                            name: this.editedName
                        });
                        if (response) {
                            done();
                            this.$toast({
                                duration: 1000,
                                message: '修改成功',
                                type: 'success'
                            });
                        } else {
                            this.$toast({
                                duration: 1000,
                                message: '修改失败',
                                type: 'fail'
                            });
                            done(false);
                        }
                    } catch (err) {
                        this.$toast({
                            duration: 1000,
                            message: '修改失败',
                            type: 'fail'
                        });
                        done(false);
                    }
                }
            }
        },
        async handleCommentAdd(action, done) {
            if (action === 'cancel') {
                done();
            } else {
                if (this.commentErrorMessage !== '') {
                    done(false);
                } else {
                    try {
                        let response = await this[POST_COMMENT]({
                            id: this.$route.params.id,
                            comment: this.comment,
                            routeName: this.$route.name
                        });
                        if (response) {
                            done();
                            this[REFRESH_DATA]();
                        } else {
                            this.$toast({
                                duration: 1000,
                                message: '评论失败',
                                type: 'fail'
                            });
                            done(false);
                        }
                    } catch (err) {
                        this.$toast({
                            duration: 1000,
                            message: '评论失败',
                            type: 'fail'
                        });
                        done(false);
                    }
                }
            }
        },
        async handleRate(action, done) {
            if (action === 'cancel') {
                done();
            } else {
                if (this.nameErrorMessage !== '') {
                    done(false);
                } else {
                    try {
                        let response = await this[POST_RATE]({
                            id: this.$route.params.id,
                            rate: this.rate
                        });
                        if (response) {
                            this[REFRESH_DATA]();
                            done();
                        } else {
                            this.$toast({
                                duration: 1000,
                                message: '评分失败',
                                type: 'fail'
                            });
                            done(false);
                        }
                    } catch (err) {
                        this.$toast({
                            duration: 1000,
                            message: '评分失败',
                            type: 'fail'
                        });
                        done(false);
                    }
                }
            }
        },
        async handlesignup(action, done) {
            if (action === 'cancel') {
                done();
            } else {
                if (this.passwordErrorMessage !== '') {
                    done(false);
                } else {
                    try {
                        let response = await this[POST_USER_INFO]({
                            name: this.editedName,
                            avatar: this.avatar,
                            password: this.password
                        });
                        if (response) {
                            done();
                            this.$dialog.alert({
                                title: '注册成功',
                                message: '账号：' + response.userId
                            });
                        } else {
                            this.$toast({
                                duration: 1000,
                                message: '注册失败',
                                type: 'fail'
                            });
                            done(false);
                        }
                    } catch (err) {
                        this.$toast({
                            duration: 1000,
                            message: '注册失败',
                            type: 'fail'
                        });
                        done(false);
                    }
                }
            }
        },
        changeConfirmButton(flag) {
            this.showConfirmButton = flag;
        }
    },
    computed: {
        ...mapState({
            userNameEditDialog: state => state.dialogModule.userNameEditDialog,
            addCommentDialog: state => state.dialogModule.addCommentDialog,
            rateDialog: state => state.dialogModule.rateDialog,
            signupDialog: state => state.dialogModule.signupDialog,
            userNameEditDialogShowFlag: state =>
                state.dialogModule.userNameEditDialog.showFlag,
            signupDialogShowFlag: state =>
                state.dialogModule.signupDialog.showFlag
        }),
        nameErrorMessage() {
            let val = this.editedName;
            if (val === '') {
                this.changeConfirmButton(false);
                return '昵称不能为空';
            } else if (val.length > 10) {
                this.changeConfirmButton(false);
                return '昵称长度不超过10个字符';
            } else if (
                /^[a-zA-Z]*$/.test(val[0]) ||
                /^[\u4e00-\u9fa5]*$/.test(val[0])
            ) {
                this.changeConfirmButton(true);
                return '';
            } else {
                this.changeConfirmButton(false);
                return '昵称应该以字母或汉字开头';
            }
        },
        commentErrorMessage() {
            let val = this.comment;
            if (val === '') {
                this.changeConfirmButton(false);
                return '评论不能为空';
            } else if (val.length > 300) {
                this.changeConfirmButton(false);
                return '评论不要超过300字噢';
            } else {
                this.changeConfirmButton(true);
                return '';
            }
        },
        passwordErrorMessage() {
            if (this.password.length < 8) {
                this.changeConfirmButton(false);
                return '密码至少为8位';
            } else if (this.password.length > 25) {
                this.changeConfirmButton(false);
                return '密码不超过25位';
            }
            this.changeConfirmButton(true);
            return '';
        },
        confirmPasswordErrorMessage() {
            if (this.password !== this.confirmPassword) {
                this.changeConfirmButton(false);
                return '两次输入的密码不一致';
            }
            this.changeConfirmButton(true);
            return '';
        }
    },
    watch: {
        signupDialogShowFlag(val) {
            if (val) {
                this.editedName = '';
            }
        },
        userNameEditDialogShowFlag(val) {
            if (val) {
                this.editedName = this.$store.state.userInfo.userName;
            }
        }
    }
};
</script>
