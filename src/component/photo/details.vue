<template>
  <section class="details">
    <div class="mui-card">
      <div class="mui-card-header">
        <h4>{{ info.title }}</h4>
        <p>
          <span>发布时间：{{ info.add_time | formatDate }}</span>
          <span>预览量：{{ info.click }}</span>
        </p>
      </div>
      <div class="mui-card-content">
        <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="item in hums" :key="item.src">
		            <img v-preview="item.src" :src="item.src"/>
            </li>
		    </ul>
      </div>
      <div class="mui-card-footer" v-html='info.content'></div>
    </div>
  </section>
</template>

<script>
import config from '../../js/config.js';

export default {
  data() {
    return {
      info: {},
      hums: []
    };
  },
  methods: {
    // 获取数据
    getInfo() {
      let url = config.photoInfo + this.$route.params.id;
      this.$http.get(url).then(rep => {
        let body = rep.body;
        body.status == 0 && (this.info = body.message[0]);
      });
    },

    // 获取缩略图
    getHums() {
      let url = config.photoHums + this.$route.params.id;
      this.$http.get(url).then(rep => {
        let body = rep.body;
        if(body.status == 0) {
          // 遍历图片列表，修改每一个图片对象的img_url地址
          this.hums = body.message.map(function(photo, i) {
            photo.src = config.imgDomain + photo.src;
            return photo;
          });
        }
      });
    }
  },
  created() {
    this.getInfo();
    this.getHums();
  }
};
</script>

<style scoped lang="less">
  /* 如果style中加了scoped那么这里的样式只在当前组件生效 */ 
  .mui-card-header, .mui-card-footer {
    display: block
  }
  .mui-card-content img {
    width: 100%;
  }
</style>
