/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: JIEWU
 * @Last Modified time: 2018-12-31 12:16:07
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
import { POST_USER_INFO, POST_COMMENT } from '@/store/action-types';
export default {
    data() {
        return {
            editedName: '',
            showConfirmButton: true,
            comment: '',
            rate: 0
        };
    },
    methods: {
        ...mapMutations([REFRESH_DATA]),
        ...mapActions([POST_USER_INFO, POST_COMMENT]),
        async handleNameEdit(action, done) {
            if (action === 'cancel') {
                done();
            } else {
                if (this.nameErrorMessage !== '') {
                    done(false);
                } else {
                    try {
                        let response = await this[POST_USER_INFO]({
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
                    let param = {
                        comment: this.comment,
                        routeName: this.$route.name,
                        id: this.$route.params.id
                    };
                    try {
                        let response = await this[POST_COMMENT](param);
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
                        let response = await this[POST_USER_INFO]({
                            name: this.editedName
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
        changeConfirmButton(flag) {
            this.showConfirmButton = flag;
        }
    },
    computed: {
        ...mapState({
            userNameEditDialog: state => state.dialogModule.userNameEditDialog,
            addCommentDialog: state => state.dialogModule.addCommentDialog,
            rateDialog: state => state.dialogModule.rateDialog
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
        }
    },
    created: function () {
        this.editedName = this.$store.state.userInfo.userName;
    }
};
</script>
