<template>
  <footer class="footer">
      <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item mui-active" href="#tabbar">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-chat">
          <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
          <span class="mui-tab-label">商品购买</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-contact">
          <span class="mui-icon mui-icon-extra mui-icon-extra-express">
            <span class="mui-badge">0</span>
          </span>
          <span class="mui-tab-label">购物车</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-map">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">个人中心</span>
        </a>
      </nav>
      <div></div>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
  .footer {
    div {
      height: 50px;
    }
  }
</style>

