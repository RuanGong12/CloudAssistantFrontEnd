let getSwipeData = () => {
    let mockData = [
        {
            id: 1,
            title: 'hello1',
            cover: '/static/img/1.jpg'
        },
        {
            id: 2,
            title: 'hello2',
            cover: '/static/img/2.jpg'
        },
        {
            id: 3,
            title: 'hello3',
            cover: '/static/img/3.jpg'
        },
        {
            id: 4,
            title: 'hello4',
            cover: '/static/img/4.png'
        },
        {
            id: 5,
            title: 'hello5',
            cover: '/static/img/5.png'
        }
    ];
    return mockData;
};

let getUserInfo = () => {
    return {
        userName: 'double7',
        userAvatar: '../../static/img/2.jpg'
    };
};

export default {getSwipeData: getSwipeData, getUserInfo: getUserInfo};
