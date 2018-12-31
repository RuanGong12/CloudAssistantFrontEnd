/*
 * @Author: double7
 * @Date: 2018-12-28 19:02:29
 * @Last Modified by: JIEWU
 * @Last Modified time: 2018-12-31 15:17:48
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
    path: '/course/',
    headerTitle: '课程详情',
    showSearchIcon: false,
    showBackIcon: true,
    scrollLocation: 0,
    setPath: (id) => {
        return '/course/' + id;
    }
};

const LoginPage = {
    path: '/login',
    headerTitle: '登录',
    showSearchIcon: false,
    showBackIcon: true,
    scrollLocation: 0
};

const FavoritesPage = {
    path: '/favorites',
    headerTitle: '我的收藏',
    showSearchIcon: false,
    showBackIcon: true,
    scrollLocation: 0
};

const LectureHomePage = {
    path: '/lecturehome',
    headerTitle: '讲座',
    showSearchIcon: false,
    showBackIcon: true,
    scrollLocation: 0
};

const CourseHomePage = {
    path: '/coursehome',
    headerTitle: '课程',
    showSearchIcon: false,
    showBackIcon: true,
    scrollLocation: 0
};
export default {
    AppPage,
    SearchPage,
    CourseDetailPage,
    LoginPage,
    FavoritesPage,
    CourseHomePage,
    LectureHomePage
};
