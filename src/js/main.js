// 一、导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import MintUI from 'mint-ui';    // MintUI是vue插件，将来需要手动use才可以使用
import 'mint-ui/lib/style.css';  // 引入样式库还需单独导入css文件
import 'mui/dist/css/mui.css';    // 引入mui样式
import 'mui/examples/hello-mui/css/icons-extra.css'; // 引入mui的扩展图标样式

// 1.1、记得手动use启用插件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);

// 二、导入我们自己的东西

// 2.0 导入插件
import ImgPreview from '../component/plugin/img_preview_install.js';
Vue.use(ImgPreview);

// 2.1 导入过滤器
import Filter from './filter.js';
Vue.use(Filter);

// 2.2 导入组件
import App from '../component/App.vue';  // 根组件

// 2.3 导入路由对象
import router from './router.js';  // 路由

// 三、创建一个Vue实例，关联视图，把根组件渲染到视图中
new Vue({
    el: '#app',
    render: c => c(App),
    router
});
