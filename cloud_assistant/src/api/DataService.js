/*
 * @Author: double7
 * @Date: 2018-12-28 19:05:06
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-29 22:24:40
 */

import axios from 'axios';

// const serverHostApi = '/static';

const errRes = {
    status: 500,
    msg: 'request error'
};

let dataCache = {};

let getSwipeData = (resolve, reject, useCache = true) => {
    if (useCache) {
        if (dataCache.SwipeData) {
            setTimeout(() => {
                resolve(dataCache.SwipeData);
            }, 50);
            return;
        }
    }
    axios.get('/static/mock/Swipes.json').then(
        response => {
            if (response.data.status !== 0) {
                reject(response.data);
            } else {
                dataCache.SwipeData = response.data;
                resolve(response.data);
            }
        },
        err => {
            console.log(err);
            reject(errRes);
        }
    );
};

let getUserInfo = (resolve, reject, useCache = true) => {
    if (useCache) {
        if (dataCache.UserInfo) {
            setTimeout(() => {
                resolve(dataCache.UserInfo);
            }, 50);
            return;
        }
    }
    axios.get('/static/mock/UserInfo.json').then(
        response => {
            if (response.data.status !== 0) {
                reject(response.data);
            } else {
                dataCache.UserInfo = response.data;
                resolve(response.data);
            }
        },
        err => {
            console.log(err);
            reject(errRes);
        }
    );
};

let getUserInfoPromise = () => {
    return axios.get('/static/mock/UserInfo.json');
};

let setUserName = (resolve, reject, {
    name
}) => {
    axios.get('/static/mock/SucceedRes.json').then(response => {
        if (response.data.status !== 0) {
            reject(response.data);
        } else {
            dataCache.UserInfo = response.data;
            resolve(response.data);
        }
    }, err => {
        console.log(err);
        reject(errRes);
    });
};

let getRecommendCourses = (resolve, reject, useCache = true) => {
    if (useCache) {
        if (dataCache.RecommendCourses) {
            setTimeout(() => {
                resolve(dataCache.RecommendCourses);
            }, 50);
            return;
        }
    }
    axios.get('/static/mock/RecommendCourses.json').then(
        response => {
            if (response.data.status !== 0) {
                reject(response.data);
            } else {
                dataCache.RecommendCourses = response.data;
                resolve(response.data);
            }
        },
        err => {
            console.log(err);
            reject(errRes);
        }
    );
};

export default {
    getSwipeData,
    getUserInfo,
    setUserName,
    getUserInfoPromise,
    getRecommendCourses
};
