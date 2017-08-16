// 导入包
import VueRouter from 'vue-router';

// 导入index组件
import Cindex from '../component/index/index.vue';
// 导入news组件
import CnewsList from '../component/news/list.vue';
import CnewsDetails from '../component/news/details.vue';
// 导入photo组件
import CphotoList from '../component/photo/list.vue';
import CphotoDetails from '../component/photo/details.vue';

// 导出一个路由实例
export default new VueRouter({
    routes: [

        // 首页
        { path: '/', redirect: '/index' },
        { path: '/index', component: Cindex },

        // 新闻详细
        { path: '/news/list', component: CnewsList, name: 'newsL' },
        { path: '/news/details/:id', component: CnewsDetails, name: 'newsD' },

        // 图片分享
        { path: '/photo/list/:id', component: CphotoList, name: 'photoL' },
        { path: '/photo/details/:id', component: CphotoDetails, name: 'photoD' },
    ]
});
