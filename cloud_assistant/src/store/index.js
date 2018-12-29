/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-29 23:38:09
 */

import Vue from 'vue';
import Vuex from 'vuex';
import {
    BACK_PAGE,
    GO_PAGE,
    SHOW_USER_NAME_EDIT_DIALOG,
    CHANGE_USER_INFO,
    REFRESH_DATA,
    REFRESH_ERROR,
    REFRESH_INIT,
    CHANGE_REFRESH_COUNT,
    SET_SCROLL_HANDLER
} from './mutation-types';
import {
    LOAD_USER_INFO
} from './action-types';
import Pages from '@/router/Pages';
import DataService from '@/api/DataService';

Vue.use(Vuex);

const dialogModule = {
    namespaced: true,
    state() {
        return {
            userNameEditDialog: {
                showFlag: false
            }
        };
    },
    mutations: {
        [SHOW_USER_NAME_EDIT_DIALOG](state) {
            state.userNameEditDialog.showFlag = true;
        }
    }
};

let pageStack = [];

const appStore = {
    state() {
        return {
            currentPage: Pages.AppPage,
            userInfo: {
                userId: '',
                userName: 'double7',
                userAvatar: '/static/img/user_head_img.png'
            },
            refreshInfo: {
                refreshFlag: false,
                refreshCount: 0,
                refreshFailed: false
            },
            scrollHandler: () => {}
        };
    },
    mutations: {
        [GO_PAGE](state, page) {
            if (state.currentPage.path !== page.path) {
                let scrollLocation = state.scrollHandler();
                if (scrollLocation) {
                    state.currentPage.scrollLocation = scrollLocation;
                }
                pageStack.push(state.currentPage);
                state.currentPage = { ...page
                };
                state.scrollHandler = () => {};
            }
        },
        [BACK_PAGE](state) {
            if (pageStack.length > 0) {
                state.currentPage = { ...pageStack.pop()
                };
            }
        },
        [CHANGE_USER_INFO](state, {
            id,
            name,
            avatar
        }) {
            if (id) {
                state.userInfo.userId = id;
            }
            if (name) {
                state.userInfo.userName = name;
            }
            if (avatar) {
                state.userInfo.userAvatar = avatar;
            }
            state.userInfo.userName = name;
        },
        [REFRESH_DATA](state) {
            state.refreshInfo.refreshFlag = true;
        },
        [REFRESH_ERROR](state) {
            state.refreshInfo.refreshFailed = true;
        },
        [REFRESH_INIT](state) {
            state.refreshInfo.refreshFlag = false;
            state.refreshInfo.refreshCount = 0;
            state.refreshInfo.refreshFailed = false;
        },
        [CHANGE_REFRESH_COUNT](state, {
            isAdd
        }) {
            if (isAdd) {
                state.refreshInfo.refreshCount++;
            } else {
                state.refreshInfo.refreshCount--;
            }
        },
        [SET_SCROLL_HANDLER](state, {
            handler
        }) {
            state.scrollHandler = handler;
        }
    },
    actions: {
        [LOAD_USER_INFO]({
            commit
        }) {
            DataService.getUserInfo((response) => {
                commit(CHANGE_USER_INFO, response.result);
            }, (err) => {
                console.log(err);
                // TODO
            });
        }
    },
    modules: {
        dialogModule: dialogModule
    }
};

export default new Vuex.Store(appStore);
