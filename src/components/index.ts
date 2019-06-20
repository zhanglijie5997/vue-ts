const Test = () => import('./component/test.vue'); // 测试
const Titles = () => import('./header/titles.vue');  // 公用title
export {
    Test,
    Titles
}