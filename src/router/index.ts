import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { getToken } from '@/utils/common'
import { localstorage } from '@/utils/setLocalstorage/setLocalstorage'
import store from '@/store/index'
import types from '@/types';

Vue.use(Router)

const router = new Router({
    routes,
    // mode: 'history'
})

// 登陆页面路由 name
const LOGIN_PAGE_NAME = 'login'



// 跳转之前
router.beforeEach((to, from, next) => {
    // console.log(to.name, 66666);
    next();
    const token = getToken() || localStorage.token;
    setTimeout(() => {


        if (!token && to.name !== LOGIN_PAGE_NAME) {
            // 未登录且要跳转的页面不是登录页

            localstorage('page', 5)

            next({
                name: LOGIN_PAGE_NAME // 跳转到登录页
            })
        } else if (!token && to.name === LOGIN_PAGE_NAME) {
            // 未登陆且要跳转的页面是登录页
            next() // 跳转
        } else if (token && to.name === LOGIN_PAGE_NAME) {
            // 已登录且要跳转的页面是登录页

            
            // localstorage('page', 1);

            store.commit(types.CHOIC_PAGE,0)

            next({
                name: 'index' // 跳转到 index 页
            })
        } else {
            console.log('登录');

            if (token) {

                next() // 跳转
            } else {
                next({
                    name: LOGIN_PAGE_NAME
                })
            }
        }
    }, 1500)
})


// 跳转之后
router.afterEach(to => {
    //
})

export default router;
