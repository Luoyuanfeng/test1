import React from 'react'
import Loadable from 'react-loadable'

const timeout = 3000
const Loading = ({ pastDelay, timedOut, error }) => {
    console.log(pastDelay, timedOut, error)
    if (pastDelay) {
        return <div></div>
    } else if (timedOut) {
        return <div>请求超时...</div>;
    } else if (error) {
        return <div>页面不见了!</div>;
    }
    return null;
};


const ListPage = Loadable({
    loader: () => import('../pages/List/List'),
    loading: Loading,
    timeout: timeout
})

const MinePage = Loadable({
    loader: () => import('../pages/Mine/Mine'),
    loading: Loading,
    timeout: timeout
})

const routeList = [{
    path: '/list',
    component: ListPage
}, {
    path: '/mine',
    component: MinePage
}]

export default {
    routeList
}