<template>
  <article class="shopcart-list">

    <v-title :title="title"></v-title>

    <!-- 商品列表 -->
    <div class="goods" v-for="item in shopcartList" :key="item.id">
      <mt-switch class="switch" v-model="item.selected"></mt-switch> 
      <img class="img" :src="item.src">
      <div class="inforight">
        <h4 class="mui-ellipsis-2">{{ item.title }}</h4>
        <div class="bottom">
          <ul>
            <li>￥{{ item.sell_price }}</li>
            <li>
              <v-numbox :initVal="getTotal(item.id)" @change="upTotal(item.id, $event)"></v-numbox>
            </li>
            <li>
              <a href="javascript:void(0)" @click="remove(item.id)">删除</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 总价 -->
    <div class="total">
      <div class="total_val">
        <ul>
          <li>总计（不含运费）</li>
          <li>已勾选商品 {{ sumTotal }} 件,总价:￥ {{ priceTotal }} 元</li>
        </ul>
      </div>
      <div class="total_btn">
        <mt-button type="primary" @click.native="payment">付 款</mt-button>
      </div>
    </div>

  </article>
</template>

<script>
  import { Toast } from 'mint-ui';
  import config from '../../js/config.js';
  import Ctitle from '../common/title.vue';
  import Cnumbox from '../common/numbox.vue';
  import goodsStorage from '../../js/model/goods.js';

  export default {

   data() {
     return {
      title: '购物车',
      shopcartList: []
     };
   },

   // 计算属性
   computed: {

     // 总数量
     sumTotal() {
        // 遍历取出每个商品的数量，如果这个商品是未选中状态，那么数量设为0
        let totalArr = this.shopcartList.map(item => item.selected? +goodsStorage.get(item.id): 0);
        return totalArr.length && totalArr.reduce((v1, v2) => v1 + v2);
     },

     // 总价格
     priceTotal() {
       let title = this.title;
       let priceArr = this.shopcartList.map(item => item.selected? +goodsStorage.get(item.id) * item.sell_price: 0);
       return priceArr.length && priceArr.reduce((v1, v2) => v1 + v2);
     }
   },

   methods: {
     // 获取购物车商品数据
     getShopcartList() {

      // 如果之前没有选购过商品，就不用请求接口了
      let idList = goodsStorage.getIDList();
      if(!idList.length) { return; }

      // 有的话再请求
      let url = config.shopcartList + idList;
      this.$http.get(url).then(rep => {
        let body = rep.body;
        // 因为请求回来的图片没有域名，所以加一下
        // 每个商品都额外添加一个selected属性用来控制该商品的选取，默认选取状态
        if(body.status == 0) {
          this.shopcartList = body.message.map(item => {
            item.selected = true;
            item.src = config.imgDomain + item.thumb_path;
            return item;
          });
        }
      });
     },

     // 删除商品
     remove(id) {

       // 页面中删除，这样做开销有点大，因为把原来的整个数组覆盖掉了
       // 在vue中覆盖一个数组，vue需要重新遍历整个数组重新对每个值进行监听
       //  this.shopcartList = this.shopcartList.filter(item => item.id !== id);

       // 找到要删除商品的下标，如果有则删除
       let index = this.shopcartList.findIndex(item => item.id == id);
       index > -1 && this.shopcartList.splice(index, 1);

       // 本地永久删除
       goodsStorage.remove(id);
     },

     // 通过id拿到商品的选购数量
     getTotal(id) {
       return goodsStorage.get(id);
     },

     // 更新指定商品的购买数量
     upTotal(id, total) {
       this.shopcartList[0].selected = !this.shopcartList[0].selected;
       this.shopcartList[0].selected = !this.shopcartList[0].selected;
       goodsStorage.set(id, total);
       
       // 把商品的总数挂载上去
       document.querySelector('.mui-badge').innerHTML = goodsStorage.get();
     },

     // 付款
     payment() {

      // 只要有一个商品被选购，并且值不为0，那么结果就为true
      let hasSelected = this.shopcartList.some(item => item.selected && goodsStorage.get(item.id));
      if(!hasSelected) {
        Toast('请至少选购一件商品！');
      }
      // 使用正则判断用户是否已经登陆，登陆成功后跳转到订单页
      else if(!/SESSIONID=\w+/.test(document.cookie)){
        this.$router.push({ name: 'login', query: { nextpage: '/shopcart/order' } });
      }
      // 选购了商品，也登陆了，才能转到订单页
      else {
        this.$router.push('/shopcart/order');
      }
     }
   },

   created() {
     this.getShopcartList();
   },

   components: {
     'v-title': Ctitle,
     'v-numbox': Cnumbox
   }

 };
</script>

<style lang="less">
  .shopcart-list {
    .goods {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      height: 102px;
      display: flex;
      padding: 5px;
      .switch {
        flex: 0 0 52px;
      }
      .img {
        margin-left: 5px;
        height: 75px;
        width: 75px;
        flex: 0 0 85px;
      }
      .inforight {
        margin-left: 5px;
        flex: 1;
      }
      .inforight ul {
        padding-left: 0px;
      }
      .inforight li {
        list-style: none;
        display: inline-block;
      }
      .inforight h4 {
        color: #0094ff;
        font-size: 14px;
      }
      .bottom li:first-child {
        color: red;
        margin-right: 5px;
      }
      .bottom li:last-child {
        margin-left: 5px;
      }
    }
    .total {
      height: 84px;
      background-color: rgba(0, 0, 0, 0.1);
      display: flex;
      padding: 5px 14px;
      ul {
		    padding-left: 0px;
		    margin: 14px 0;
		    li {
		      list-style: none;
		      font-size: 14px;
		    }
		  }
		  &_val {
		  	flex: 1;
		  }
		  &_btn {
		  	flex: 0 0 60px;
	      margin: 18px 0 0 0;
		  }
    }
  }
</style>