import storage from '../common/storage.js';

// 商品购买数量的数据格式为：{ id1: total, id2: total, id3: total }
// key为商品的id，value为商品的选择数量。
const storageKey = 'goodsTotal';
let goodsTotal = storage.get(storageKey) || {};
export default {
  
    // 根据id存储选择数量,添加后记得持久化存储最新结果
    set(id, total) {
        goodsTotal[id] = total;
        storage.set(storageKey, goodsTotal);
    },

    // 根据id获取选择数量，没有id则获取全部商品的选择数量总和
    get(id) {
        if(id) {
            return goodsTotal[id] || 0;
        }else {
            // 注意，如果数组length为0，reduce会报错，所以做个判断处理
            let totals = this.getTotalList();
            return totals.length && totals.reduce((v1, v2) => (+v1) + (+v2));
        }
    },

    // 根据id删除对应商品的数量,删除后记得持久化存储最新结果
    remove(id) {
        delete goodsTotal[id];
        storage.set(storageKey, goodsTotal);
    },

    // 获取所有id组成的数组
    getIDList() {
        return Object.keys(goodsTotal);
    },

    // 获取所有total组成的数组
    getTotalList() {
        return Object.values(goodsTotal);
    }

};

// 目前咱们完成的这个商品选购存取，操作的都是内存，关闭页面，数据丢失
// 还需要和localStorage做一个关联：
// 1.1、在初始化goodsTotal的值的时候，应该先尝试着从localStorage里面取值
// 1.2、在set的时候，需要把goodsTotal的值存储到localStorage里