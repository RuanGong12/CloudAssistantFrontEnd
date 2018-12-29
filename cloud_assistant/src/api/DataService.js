/*
 * @Author: double7
 * @Date: 2018-12-28 19:05:06
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-29 11:27:17
 */

import axios from 'axios';

// const serverHostApi = '/static';

let getSwipeData = () => {
    return axios.get('/static/mock/Swipes.json');
};

let getUserInfo = () => {
    return axios.get('/static/mock/UserInfo.json');
};

let setUserName = ({
    name
}) => {
    return axios.get('/static/mock/SucceedRes.json');
};

let getRecommendCourses = () => {
    return axios.get('/static/mock/RecommendCourses.json');
};

export default {
    getSwipeData,
    getUserInfo,
    setUserName,
    getRecommendCourses
};
