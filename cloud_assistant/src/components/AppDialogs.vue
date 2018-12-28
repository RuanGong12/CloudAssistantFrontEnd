/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-28 19:10:51
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
                        :error-message="errorMessage"
                    ></van-field>
                </van-panel>
            </van-dialog>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { CHANGE_USER_NAME } from '@/store/mutation-types';
export default {
    data() {
        return { editedName: '', showConfirmButton: true };
    },
    methods: {
        ...mapMutations([CHANGE_USER_NAME]),
        handleNameEdit(action, done) {
            if (action === 'cancel') {
                done();
            } else {
                if (this.errorMessage !== '') {
                    done(false);
                } else {
                    this[CHANGE_USER_NAME]({ name: this.editedName });
                    done();
                }
            }
        },
        changeConfirmButton(flag) {
            this.showConfirmButton = flag;
        }
    },
    computed: {
        ...mapState({
            userNameEditDialog: state => state.dialogModule.userNameEditDialog
        }),
        errorMessage() {
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
        }
    },
    created: function() {
        this.editedName = this.$store.state.userInfo.userName;
    }
};
</script>
