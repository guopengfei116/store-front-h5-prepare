// 导入包
import VueRouter from 'vue-router';

// 导入index组件
import Cindex from '../component/index/index.vue';

// 导出一个路由实例
export default new VueRouter({
    routes: [
        { path: '/', redirect: '/index' },
        { path: '/index', component: Cindex }
    ]
});
