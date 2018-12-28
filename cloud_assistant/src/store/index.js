/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-28 19:07:06
 */

import Vue from 'vue';
import Vuex from 'vuex';
import {
    BACK_PAGE,
    GO_PAGE,
    SHOW_USER_NAME_EDIT_DIALOG,
    CHANGE_USER_NAME
} from './mutation-types';
import Pages from '@/router/Pages';

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
                userName: 'double7',
                userAvatar: '/static/img/2.jpg'
            }
        };
    },
    mutations: {
        [GO_PAGE](state, page) {
            if (state.currentPage.path !== page.path) {
                pageStack.push(state.currentPage);
                state.currentPage = { ...page
                };
            }
        },
        [BACK_PAGE](state) {
            if (pageStack.length > 0) {
                state.currentPage = { ...pageStack.pop()
                };
            }
        },
        [CHANGE_USER_NAME](state, {
            name
        }) {
            state.userInfo.userName = name;
        }
    },
    modules: {
        dialogModule: dialogModule
    }
};

export default new Vuex.Store(appStore);
