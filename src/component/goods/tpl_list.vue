<template>
  <article class="goods-list">
    <ul class="mui-table-view mui-grid-view">
      <!-- 商品详情 -->
      <li class="mui-table-view-cell mui-media mui-col-xs-6">
      	<router-view to="/">
	        <div class="mui-card">
	          <!-- 商品图片 -->
	          <div class="mui-card-header">
	          	<img src="https://img14.360buyimg.com/n1/s450x450_jfs/t6859/270/720868896/241631/c96fb342/59795016N17ef8bc4.jpg" alt="" />
	          </div>
	          <!-- 商品描述 -->
	          <div class="mui-card-footer ">
	            <p class="mui-ellipsis-2">大范甘迪水电费斯蒂芬森分适当放松的的否是方式方式的否是放是</p>
	          </div>
	          <!-- 商品价格 -->
	          <div class="mui-card-content">
	            <p class="price">
	            	<span>￥233</span>
	            	<s>￥2342</s>
	            </p>
	            <p class="tip">
	            	<span>热卖中</span>
	            	<span>剩余5654件</span>
	            </p>
	          </div>
	        </div>
        </router-view>
      </li>
      <!-- 商品详情 -->
      <li class="mui-table-view-cell mui-media mui-col-xs-6">
        <div class="mui-card">
          <!-- 商品图片 -->
          <div class="mui-card-header">
          	<img src="https://img14.360buyimg.com/n1/s450x450_jfs/t6859/270/720868896/241631/c96fb342/59795016N17ef8bc4.jpg" alt="" />
          </div>
          <!-- 商品描述 -->
          <div class="mui-card-footer ">
            <p class="mui-ellipsis-2">大范甘迪水电费斯蒂芬森分适当放松的的否是方式方式的否是放是</p>
          </div>
          <!-- 商品价格 -->
          <div class="mui-card-content">
            <p class="price">
            	<span>￥233</span>
            	<s>￥2342</s>
            </p>
            <p class="tip">
            	<span>热卖中</span>
            	<span>剩余5654件</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <!-- 加载更多 -->
    <button class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">加载更多</button>
  </article>
</template>

<script>
</script>

<style lang="less">
  .goods-list {
  	.mui-card {
  		box-shadow: 0px 0px 4px rgba(0, 0, 0, .3);
  	}
  	.mui-card-header {
  		padding: 8px;
  		/*height: 100px;*/
  		img {
  			width: 100%;
  			height: 100%;
  		}
  	}
    .mui-card-content {
      text-align: center;
      .price {
        margin-bottom: 4px;
        color: #000;
        span {
          color: red;
        }
      }
      .tip {
        overflow: hidden;
        padding: 0 8px;
        font-size: 12px;
        span:first-child {
          float: left;
        }
        span:last-child {
          float: right;
        }
      }
    }
  }
</style>