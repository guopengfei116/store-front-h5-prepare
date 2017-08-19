const cache = {};
const maxAge = 10000; // 10秒有效期

export default {

  // 存储，存储的时候添加一个时间戳
  set(key, data) {
    cache[key] = {
      data: data,
      time: Date.now()
    };
  },

  // 读取，读取的时候要判断有没有过期，没有缓存数据，或者过期了就删掉数据，返回null
  get(key) {
    let tempObj = cache[key];
    if(!tempObj || Date.now() - tempObj.time > maxAge) {
        this.remove(key);
    }else {
        return tempObj.data;
    }
  },

  // 删除数据
  remove(key) {
    delete cache[key];
  }
};