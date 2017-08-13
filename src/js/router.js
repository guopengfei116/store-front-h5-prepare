// 导入包
import VueRouter from 'vue-router';

// 导入index组件
import Cindex from '../component/index/index.vue';
// 导入news组件
import CnewsList from '../component/news/list.vue';
import CnewsDetails from '../component/news/details.vue';

// 导出一个路由实例
export default new VueRouter({
    routes: [
        { path: '/', redirect: '/index' },
        { path: '/index', component: Cindex },
        // 新闻详细相关路由配置
        { path: '/news/list', component: CnewsList },
        { path: '/news/details', component: CnewsDetails }
    ]
});
