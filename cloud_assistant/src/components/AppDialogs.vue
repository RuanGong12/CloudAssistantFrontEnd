/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-30 19:45:55
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
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { REFRESH_DATA } from '@/store/mutation-types';
import { POST_USER_INFO, POST_COMMENT } from '@/store/action-types';
export default {
    data() {
        return { editedName: '', showConfirmButton: true, comment: '' };
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
                        } else {
                            this.$toast('修改失败');
                            done(false);
                        }
                    } catch (err) {
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
                        routeName: this.$route.name
                    };
                    if (param.routeName === 'CourseDetail') {
                        param.id = this.$route.params.courseId;
                    } else {
                        param.id = this.$route.params.lectureId;
                    }
                    try {
                        let response = await this[POST_COMMENT](param);
                        if (response) {
                            done();
                            this[REFRESH_DATA]();
                        } else {
                            this.$toast('修改失败');
                            done(false);
                        }
                    } catch (err) {
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
            addCommentDialog: state => state.dialogModule.addCommentDialog
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
    created: function() {
        console.log('dialog created');
        this.editedName = this.$store.state.userInfo.userName;
    }
};
</script>
