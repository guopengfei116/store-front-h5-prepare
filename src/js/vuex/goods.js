import Vue from 'vue';
import storage from '../common/storage.js';

// 商品购买数量的数据格式为：{ id1: total, id2: total, id3: total }
// key为商品的id，value为商品的选择数量。
const storageKey = 'goodsTotal';

export default {

    // 相当于咱们之前的data配置
    state: storage.get(storageKey) || {},  // 默认的数据从storage里面取

    // 相当于咱们之前的computed计算属性，使用方式也一样
    // 注意！！！：这里的方法直接通过属性访问的方式使用，同时因为使用方式的原因，这些方法无法接收参数。
    // 注意！！！：这里的所有方法都有第二个参数getters，为的是实现方法之间的复用
    getters: {

        // 获取所有id组成的数组
        getIDList(state, getters) {
            return Object.keys(state);
        },

        // 获取所有total组成的数组
        getTotalList(state, getters) {
            return Object.values(state);
        },

        // 求购物车数据之和
        getTotalSum(state, getters) {
             // 注意，如果数组length为0，reduce会报错，所以做个判断处理
            let totals = getters.getTotalList;
            return totals.length && totals.reduce((v1, v2) => (+v1) + (+v2));
        }
        
    },
    // 相当于咱们之前的methods，不过这里的方法仅仅是对数据进行改变
    mutations: {
        
        // 根据id存储选择数量,添加后记得持久化存储最新结果
        // 这里的方式第一个参数为state数据，第二个参数为将来我调用时传过来的参数，
        // 但是只能有一个参数，所有我们要传多个的话，就改成对象写法。
        set(state, obj) {
            Vue.set(state, obj.id, obj.total);  // ****这里的id可能是新id，如果给数据添加新的属性，vue是
            storage.set(storageKey, state);
        },
 
        // 根据id删除对应商品的数量,删除后记得持久化存储最新结果
        remove(state, id) {
            // 直接把数据删除掉和直接给对象添加新属性一样，vue无法刷新视图，那么我们就先set方法把数据设为null，最后再删除
            Vue.set(state, id, null);  
            delete state[id];
            storage.set(storageKey, state);
        }
      
    }
}

