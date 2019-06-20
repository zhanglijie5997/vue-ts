/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue'),
        meta: {
            icon: '',
            keepAlives: true,
            title: 'login'
        }
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
        meta: {
            icon: '',
            keepAlives: true,
            title: 'index'
        }
    },
    {
        path: '/find',
        name: 'find',
        component: () => import('@/views/find/find.vue'),
        meta: {
            icon: '',
            keepAlives: true,
            title: 'find'
        }
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user/user.vue'),
        meta: {
            icon: '',
            keepAlives: true,
            title: 'user'
        }
    },
]
