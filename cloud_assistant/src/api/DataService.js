/*
 * @Author: double7
 * @Date: 2018-12-28 19:05:06
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-30 19:45:32
 */

import axios from 'axios';

// const serverHostApi = '/static';

const errRes = {
    status: 500,
    msg: 'request error'
};

let dataCache = {
    CourseDetail: {},
    Comments: {}
};

let getSwipeData = (resolve, reject, useCache = true) => {
    if (useCache) {
        if (dataCache.SwipeData) {
            resolve(dataCache.SwipeData);
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

let setUserInfoPromise = ({
    id,
    name,
    avatar
}) => {
    // TODO
    // return axios.put('', {
    //     id,
    //     name,
    //     avatar
    // });

    return axios.get('/static/mock/SucceedRes.json');
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

let getCourseDetail = (resolve, reject, {
    courseId
}, useCache = true) => {
    if (useCache) {
        if (dataCache.CourseDetail[courseId]) {
            resolve(dataCache.CourseDetail[courseId]);
            return;
        }
    }
    axios.get('/static/mock/CourseDetail.json').then(
        response => {
            if (response.data.status !== 0) {
                reject(response.data);
            } else {
                dataCache.CourseDetail[courseId] = response.data;
                resolve(response.data);
            }
        },
        err => {
            console.log(err);
            reject(errRes);
        }
    );
};

let getLectureComment = (resolve,
    reject, {
        lectureId
    }, useCache = false) => {
    getComment(resolve, reject, {
        url: '/static/mock/LectureComment.json',
        id: lectureId
    });
};

let getCourseComment = (resolve,
    reject, {
        courseId
    }, useCache = false) => {
    getComment(resolve, reject, {
        url: '/static/mock/CourseComment.json',
        id: courseId
    });
};

let getComment = (resolve,
    reject, {
        url,
        id
    }, useCache = false) => {
    if (useCache) {
        if (dataCache.Comments[id]) {
            resolve(dataCache.Comments[id]);
            return;
        }
    }
    axios.get(url).then(
        response => {
            if (response.data.status !== 0) {
                reject(response.data);
            } else {
                dataCache.Comments[id] = response.data;
                resolve(response.data);
            }
        },
        err => {
            console.log(err);
            reject(errRes);
        }
    );
};

let postCourseCommentPromise = ({
    id,
    comment
}) => {
    // TODO
    // return axios.post('', {id, comment});
    return axios.get('/static/mock/SucceedRes.json');
};

let postLectureCommentPromise = ({
    id,
    comment
}) => {
    // TODO
    // return axios.post('', {id, comment});
    return axios.get('/static/mock/SucceedRes.json');
};

export default {
    getSwipeData,
    getUserInfo,
    setUserInfoPromise,
    getUserInfoPromise,
    getRecommendCourses,
    getCourseDetail,
    getCourseComment,
    getLectureComment,
    postCourseCommentPromise,
    postLectureCommentPromise
};
