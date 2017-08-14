<template>
  <section class="comment">
        <div class="mui-card">
            <div class="mui-card-header">提交评论</div>
            <div class="mui-card-content">
                <textarea v-model="content" id="textarea" rows="5" placeholder="请发表您滴看法..."></textarea>
                <button @click="submitComment" type="button" class="mui-btn mui-btn-success mui-btn-block">发表</button>
            </div>
        </div>
  </section>
</template>

<script>
import config from '../../js/config.js';
import { Toast } from 'mint-ui';

export default {
  data() {
      return {
        content: ''
      };
  },
  props: ['id'],
  methods: {
    // 发布评论
    submitComment() {
        let url = config.commentPut + this.id;
        let data = { content: this.content };
        this.$http.post(url, data, {emulateJSON: true}).then(rep => {
            let body = rep.body;

            // 发布成功后给出提示，并清空输入框
            if(body.status == 0) {
                this.content = '';
                Toast({
                    message: '操作成功',
                    iconClass: 'icon icon-success'
                });
            }
        });
    }
  }
};
</script>

<style lang="less">
  .comment {

  }
</style>
