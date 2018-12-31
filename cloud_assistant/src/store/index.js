/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-31 19:46:35
 */

import Vue from 'vue';
import Vuex from 'vuex';
import {
    BACK_PAGE,
    GO_PAGE,
    SHOW_USER_NAME_EDIT_DIALOG,
    SHOW_ADD_COMMENT_DIALOG,
    SHOW_RATE_DIALOG,
    SHOW_SIGNUP_DIALOG,
    REFRESH_DATA,
    REFRESH_ERROR,
    REFRESH_INIT,
    CHANGE_REFRESH_COUNT,
    SET_SCROLL_HANDLER,
    CHANGE_USER_INFO
} from './mutation-types';
import {
    LOAD_USER_INFO,
    PUT_USER_INFO,
    POST_COMMENT,
    POST_RATE,
    POST_USER_INFO,
    POST_LOGIN
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
            },
            addCommentDialog: {
                showFlag: false
            },
            rateDialog: {
                showFlag: false
            },
            signupDialog: {
                showFlag: false
            }
        };
    },
    mutations: {
        [SHOW_USER_NAME_EDIT_DIALOG](state) {
            state.userNameEditDialog.showFlag = true;
        },
        [SHOW_ADD_COMMENT_DIALOG](state) {
            state.addCommentDialog.showFlag = true;
        },
        [SHOW_RATE_DIALOG](state) {
            state.rateDialog.showFlag = true;
        },
        [SHOW_SIGNUP_DIALOG](state) {
            state.signupDialog.showFlag = true;
        }
    }
};

let pageStack = [];

const appStore = {
    state() {
        return {
            currentPage: Pages.LoginPage,
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
                if (page.path === '/') {
                    pageStack = [];
                    state.currentPage = { ...Pages.LoginPage
                    };
                }
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
        },
        [CHANGE_USER_INFO](state, {
            id,
            name,
            avatar
        }) {
            console.log('in change');
            if (id) {
                state.userInfo.userId = id;
            }
            if (name) {
                state.userInfo.userName = name;
            }
            if (avatar) {
                state.userInfo.userAvatar = avatar;
            }
        }
    },
    actions: {
        [LOAD_USER_INFO]({
            state,
            commit
        }) {
            DataService.getUserInfo((response) => {
                commit(CHANGE_USER_INFO, response.result);
            }, (err) => {
                console.log(err);
                // TODO
            }, {
                userId: state.userInfo.userId
            });
        },
        [PUT_USER_INFO]({
            state,
            commit
        }, {
            name,
            avatar
        }) {
            return new Promise((resolve, reject) => {
                DataService.setUserInfoPromise({
                    id: state.userInfo.userId,
                    name,
                    avatar
                }).then(response => {
                    if (response.data.status === 0) {
                        commit(CHANGE_USER_INFO, {
                            name,
                            avatar
                        });
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }, err => {
                    console.log(err);
                    resolve(false);
                });
            });
        },
        [POST_COMMENT]({
            state,
            commit
        }, {
            id,
            comment,
            routeName
        }) {
            let postComment;
            if (routeName === 'CourseDetail') {
                postComment = DataService.postCourseCommentPromise;
            } else if (routeName === 'LectureDetail') {
                postComment = DataService.postLectureCommentPromise;
            }
            return new Promise((resolve, reject) => {
                postComment({
                    userId: state.userInfo.userId,
                    id,
                    comment
                }).then(response => {
                    console.log('in response 12');
                    if (response.data.status === 0) {
                        commit(REFRESH_DATA);
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }, err => {
                    console.log(err);
                    resolve(false);
                });
            });
        },
        [POST_RATE]({
            state
        }, {
            id,
            rate
        }) {
            return new Promise((resolve, reject) => {
                DataService.postCourseRate({
                    userId: state.userInfo.userId,
                    id,
                    rate
                }).then(response => {
                    if (response.data.status === 0) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }, err => {
                    console.log(err);
                    resolve(false);
                });
            });
        },
        [POST_USER_INFO](Null, {
            name,
            avatar,
            password
        }) {
            return new Promise((resolve, reject) => {
                DataService.postUserInfoPromise({
                    name,
                    avatar,
                    password
                }).then(response => {
                    if (response.data.status === 0) {
                        resolve(response.data.result);
                    } else {
                        resolve(null);
                    }
                }, err => {
                    console.log(err);
                    resolve(null);
                });
            });
        },
        [POST_LOGIN]({
            commit
        }, {
            userId,
            password,
            succeedHandler,
            failedHandler
        }) {
            DataService.postLogin((response) => {
                succeedHandler();
                commit(GO_PAGE, Pages.AppPage);
            }, (err) => {
                failedHandler();
                console.log(err);
                // TODO
            }, {
                userId,
                password
            });
        }
    },
    modules: {
        dialogModule: dialogModule
    }
};

export default new Vuex.Store(appStore);
