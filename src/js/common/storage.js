// 对localStorage原生方法的封装
export default {
  set(key, data) {
    let strData
    try {
      strData = JSON.stringify(data);
    }catch(e) {
      strData = data;
    }finally {
        localStorage.setItem(key, strData);
    }
  },

  get(key) {
     let strData = localStorage.getItem(key);  // 如果没有存储过这个key，那么这里获取到的值为null
     let result; 
     try { 
        result = JSON.parse(strData); // parse一个null，结果还是null
     }catch(e) {
        result = {};
     }finally {
        return result || {};
     }
  },

//   // 先尝试转为字符串，最后存储
//   set(key, data) {
//     try {
//         data = JSON.stringify(data);
//     }finally {
//         localStorage.setItem(key, data);
//     }
//   },

//   // 获取本地存储的值，尝试转为对象，最后返回
//   get(key) {
//     let strData = localStorage.getItem(key);
//     try {
//         strData = JSON.parse(strData);
//     }finally {
//         return strData || {};
//     }
//   }
};