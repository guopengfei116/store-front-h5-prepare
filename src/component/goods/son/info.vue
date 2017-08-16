<template>
    <div class="mui-card">
        <div class="mui-card-header">{{ info.title }}</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner" v-html="info.content"></div>
        </div>
    </div>
</template>

<script>
  import config from '../../../js/config.js';

  export default {
    props: ['id'],
    data() {
        return {
            info: {}
        };
    },
    methods: {
        // 获取商品图文介绍
        getInfo() {
            let url = config.goodsDetails + this.id;
            this.$http.get(url).then(rep => {
                let body = rep.body;
                body.status == 0 && (this.info = body.message[0]);
            });
        }
    },
    created() {
        this.getInfo();
    }
  };
</script>
