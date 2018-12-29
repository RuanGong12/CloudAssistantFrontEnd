/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-29 15:34:44
 */

const AppPage = {
    path: '/',
    headerTitle: '高校云助手',
    showSearchIcon: true,
    showBackIcon: false,
    scrollLocation: 0
};

const SearchPage = {
    path: '/search',
    headerTitle: '搜索',
    showSearchIcon: false,
    showBackIcon: true,
    scrollLocation: 0
};

const CourseDetailPage = {
    path: '/course',
    headerTitle: '课程详情',
    showSearchIcon: false,
    showBackIcon: true,
    scrollLocation: 0
};

export default {
    AppPage,
    SearchPage,
    CourseDetailPage
};
