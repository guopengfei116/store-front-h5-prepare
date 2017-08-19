// 一、导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import MintUI from 'mint-ui';    // MintUI是vue插件，将来需要手动use才可以使用
import 'mint-ui/lib/style.css';  // 引入样式库还需单独导入css文件
import 'mui/dist/css/mui.css';    // 引入mui样式
import 'mui/examples/hello-mui/css/icons-extra.css'; // 引入mui的扩展图标样式

// 1.1、记得手动use启用插件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);
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
    router,
    store: new Vuex.Store({
        // 相当于咱们之前的data配置
        state: {
            count: 200
        },
        // 相当于咱们之前的computed计算属性，使用方式也一样
        getters: {

            // 提供一个获取数据方法，这个方法会接收到state数据对象，
            // 由我们自由去返回数据，也可以对数据进行加工后再返回
            getCount(state) {
                return state.count;
            }
        },
        // 相当于咱们之前的methods，不过这里的方法仅仅是对数据进行改变，
        // 然后还有一个却别就是调用方式不一样，不能使用方法名直接调用这个方法，
        // 必须通过组件实例this.$store.commit(mutations名字)的方式间接调用该方法。
        // 为什么这么复杂：1、vue官方提供的插件要追踪值的变化，必须这样用，否则追踪不到。
        // 为什么这么复杂：2、下面我们写的修改数据方法，vuex会进行二次封装，以给我们提供一些额外的数据
        mutations: {
            
            // 修改count方式1，自增
            countAdd(state) {
                state.count++;
            },

            // 修改count方式2，覆盖
            setCount(state, val) {
                state.count = val;
            }
        }
    })
});
