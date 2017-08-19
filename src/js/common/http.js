import Vue from 'vue';
import { Toast } from 'mint-ui';
import cache from './cache.js';

export default {
   
   // 自己封装的get请求方法，基本逻辑是优先使用缓存，缓存没有再请求接口
   get(url, success, config = {}) {

      // 先用缓存
      let data = cache.get(url);
      if(data) {
        success(data);
      }
      // 没有缓存就使用Vue的http静态方法发送请求，请求回来时候先统一做一个判断处理，
      // 如果请求成功把结果传给成功回调。
      else {
        Vue.http.get(url, config).then(rep => {
            let body = rep.body;
            if(body.status == 0) {
                cache.set(url, body);  // 记得请求回来缓存存储
                success(body);
            }else {
                Toast('请求失败！');
            }
        })
      }

   },

   // 自己封装的post请求方法，基本逻辑是优先使用缓存，缓存没有再请求接口
   post() {

   }

};

/*
1、post请求是用来发送数据的，根本不需要缓存，
如果缓存了，反而会造成数据无法提交。

2、get请求我们虽然封装好了，使用了缓存，
但是因为我们的业务需求或者后端提供的特殊接口数据造成一些潜在影响,
解决办法是在缓存数据，缓存这个数据的一个深拷贝版本(clone版本)，
防止后续数据的操作对缓存造成连带影响。

2.1、实现深拷贝1：可以参考jq源码中的extend方法实现，或者直接拿走
2.2、实现深拷贝2：JSON.parse( JSON.stringify(data) )，但是这种方式有个局限必须保证数据严格遵守JSON规范，""包裹字符串

3、我们http请求缓存的key使用的是url，这样有潜在隐患，
如果用户使用配置的方式传参，那么不同的参数按照常理应该对应不同的数据，
但是我们无法区分，造成缓存数据混乱，所有的参数不分。

3.1、解决办法是我们通过在请求的时候，自己把params这一项配置处理掉，拼接到url中，再缓存，
同时自己拼接后，记得把这个配置项delete掉，否则vue-resource库又会多处理一遍。
*/ 