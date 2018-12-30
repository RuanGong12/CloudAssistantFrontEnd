/*
 * @Author: double7
 * @Date: 2018-12-28 19:05:06
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-30 22:12:58
 */

import axios from 'axios';

// const serverHostApi = '/static';

const errRes = {
    status: 500,
    msg: 'request error'
};

let dataCache = {
    CourseDetail: {},
    LectureDetail: {},
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
    id
}, useCache = true) => {
    if (useCache) {
        if (dataCache.CourseDetail[id]) {
            resolve(dataCache.CourseDetail[id]);
            return;
        }
    }
    axios.get('/static/mock/CourseDetail.json').then(
        response => {
            if (response.data.status !== 0) {
                reject(response.data);
            } else {
                dataCache.CourseDetail[id] = response.data;
                resolve(response.data);
            }
        },
        err => {
            console.log(err);
            reject(errRes);
        }
    );
};

let getLectureDetail = (resolve, reject, {
    id
}, useCache = true) => {
    if (useCache) {
        if (dataCache.LectureDetail[id]) {
            resolve(dataCache.LectureDetail[id]);
            return;
        }
    }
    axios.get('/static/mock/LectureDetail.json').then(
        response => {
            if (response.data.status !== 0) {
                reject(response.data);
            } else {
                dataCache.LectureDetail[id] = response.data;
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
        id
    }, useCache = false) => {
    getComment(resolve, reject, {
        url: '/static/mock/LectureComment.json',
        id
    });
};

let getCourseComment = (resolve,
    reject, {
        id
    }, useCache = false) => {
    getComment(resolve, reject, {
        url: '/static/mock/CourseComment.json',
        id
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

let postCourseRate = ({
    id,
    rate
}) => {
    // TODO
    // return axios.post('', {id, rate});
    return axios.get('/static/mock/SucceedRes.json');
};

let putCourseLike = (resolve, reject, {
    userId,
    id
}) => {
    putLike(resolve, reject, {
        url: '',
        userId,
        id
    });
};

let putLectureLike = (resolve, reject, {
    userId,
    id
}) => {
    putLike(resolve, reject, {
        url: '',
        userId,
        id
    });
};

let putLike = (resolve, reject, {
    url,
    userId,
    id
}) => {
    // TODO
    // axios.put(url, {userId, id}).then();
    axios.get('/static/mock/SucceedRes.json').then(
        response => {
            if (response.data.status !== 0) {
                reject(response.data);
            } else {
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
    setUserInfoPromise,
    getUserInfoPromise,
    getRecommendCourses,
    getCourseDetail,
    getLectureDetail,
    getCourseComment,
    getLectureComment,
    postCourseCommentPromise,
    postLectureCommentPromise,
    postCourseRate,
    putCourseLike,
    putLectureLike
};
