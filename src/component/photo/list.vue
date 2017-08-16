<template>
  <section class="list">
    <!-- 图片分类 -->
    <ul class="mui-table-view">
        <li class="mui-table-view-cell">全部</li>
        <li class="mui-table-view-cell" v-for="item in categoryList" :key="item.id">
          <router-link :to="'/photo/list/' + item.id">{{ item.title }}</router-link>
        </li>
    </ul>
    <!-- 图片列表 -->
      <div class="mui-card" v-for="item in photoList" :key="item.id">
        <router-link :to="{ name: 'photoD', params: { id: item.id } }">
          <div class="mui-card-header">
            <img v-lazy="item.img_url" />
          </div>
        </router-link>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>{{ item.title }}</p>
            <p style="color: #333;">{{ item.zhaiyao }}</p>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import config from '../../js/config.js';

export default {
  data() {
    return {
      categoryList: [],
      photoList: []
    };
  },
  watch: {
    // 实例身上有一个$route属性，当前页面变化时，这个属性的值也会跟着变化,
    // 只要页面一变化，那么就根据新的id渲染图片列表
    $route() {
      this.getPhotoList(this.$route.params.id);
    }
  },
  methods: {

    // 获取分类列表
    getCategoryList() {
      let url = config.photoCategoryList;
      this.$http.get(url).then(rep => {
        let body = rep.body;
        body.status == 0 && (this.categoryList = body.message);
      });
    },

    // 获取图片列表
    getPhotoList(id) {
      let url = config.photoList + id;
      this.$http.get(url).then(rep => {
        let body = rep.body;
        if(body.status == 0) {
          // 遍历图片列表，修改每一个图片对象的img_url地址
          this.photoList = body.message.map(function(photo, i) {
            photo.img_url = config.imgDomain + photo.img_url;
            return photo;
          });
        }
      });
    },

    // 获取背景style
    getStyle(item) {
      return 'height:40vw; background-image:url("' + item.img_url + '")';
    }

  },
  created() {
    // 页面一进来就要获取分类列表，然后根据url中附带的id获取图片列表
    this.getCategoryList();
    this.getPhotoList(this.$route.params.id);
  }
};
</script>

<style lang="less">
  .list {
    .mui-table-view {
      overflow: hidden;
      &-cell {
        float: left;
      }
    }
    .mui-card-header img {
      width: 100%;
      height: 100%;
      &[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
    }
  }
</style>

