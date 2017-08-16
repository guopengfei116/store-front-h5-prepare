<template>
  <article class="goods-detail">

  	<!-- 商品购买 -->
    <div class="mui-card">
      <!-- 名称 -->
      <div class="mui-card-header">小米666</div>
      <!-- 价格 -->
      <div class="mui-card-content mui-card-content-inner">
        <div class="price"> <s>市场价:￥8888</s> <span>销售价: </span> <em>￥888</em> </div>
        <div> <span>购买数量：</span>
          <!--数字输入框 -->
          <div class="mui-numbox">
          	<button class="mui-btn mui-btn-numbox-minus">-</button>
          	<input class="mui-input-numbox" type="number">
          	<button class="mui-btn mui-btn-numbox-plus">+</button>
          </div>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="mui-card-footer">
      	<button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">结算</button>
        <div></div>
        <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">加入购物车</button>
      </div>
    </div>

		<!-- 评论与介绍 -->
		<div class="mui-card">
			<!-- 选项卡 -->
		    <mt-navbar value="tab-container2">
			  <mt-tab-item id="tab-container1">商品评论</mt-tab-item>
			  <mt-tab-item id="tab-container2">图文介绍</mt-tab-item>
			</mt-navbar>
			<!-- 内容 -->
		    <mt-tab-container value="tab-container2">
			  <mt-tab-container-item id="tab-container1">
			    <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container2">
			    <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>

  </article>
</template>

<script>
</script>

<style lang="less">
  .goods-detail {
    .mui-card-content {
      .price {
        color: rgb(51, 51, 51);
        margin-bottom: 4px;
        span {
          margin-left: 6px;
        }
        em {
          font-size: 18px;
          color: red;
        }
      }
    }
    .mui-card-footer {
      div {
        width: 100%;
      }
      .mui-btn {
        padding: 8px 0;
        font-size: 16px;
      }
    }
    .mint-tab-item {
    	&.is-selected {
    		margin-bottom: 0;
    		border-bottom: 3px solid #2ce094;
    		color: #2ce094;
    	}
    }
    .mint-tab-item-label {
    	font-size: 18px;
    	color: #2ce094;
    }
  }
</style>