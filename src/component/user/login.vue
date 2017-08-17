<template>
  <article class="order">
      <v-title :title="title"></v-title>
      
      <div class="mui-content">
        <form id='login-form' class="mui-input-group">
          <div class="mui-input-row">
            <label>账号</label>
            <input v-model="user_name" id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
          </div>
          <div class="mui-input-row">
            <label>密码</label>
            <input v-model="user_pwd" id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
          </div>
        </form>
        <div class="mui-content-padded">
          <button @click="login" id='login' class="mui-btn mui-btn-block mui-btn-primary">登录</button>
          <div class="link-area"><a id='reg'>注册账号</a> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
          </div>
        </div>
      </div>
  </article>
</template>

<script>
import { Toast } from 'mint-ui';
import Ctitle from '../common/title.vue';

export default {

  data() {
    return {
			title: '登陆',
			user_name: '',
			user_pwd: ''
    };
	},
	
	methods: {
		// 登陆成功后设置cookie，然后根据nextpage字符串进行页面跳转
		login() {
			if(this.user_name == 'me' && this.user_pwd == 123456) {
				document.cookie = 'SESSIONID=' + Date.now();
				this.$router.push(this.$route.query.nextpage);
			}else {
				Toast('用户名密码错误！');
			}
		}
	},

  components: {
    'v-title': Ctitle,
  }
}
</script>

<style>
.area {
				margin: 20px auto 0px auto;
			}
			
			.mui-input-group {
				margin-top: 10px;
			}
			
			.mui-input-group:first-child {
				margin-top: 20px;
			}
			
			.mui-input-group label {
				width: 22%;
			}
			
			.mui-input-row label~input,
			.mui-input-row label~select,
			.mui-input-row label~textarea {
				width: 78%;
			}
			
			.mui-checkbox input[type=checkbox],
			.mui-radio input[type=radio] {
				top: 6px;
			}
			
			.mui-content-padded {
				margin-top: 25px;
			}
			
			.mui-btn {
				padding: 10px;
			}
			
			.link-area {
				display: block;
				margin-top: 25px;
				text-align: center;
			}
			
			.spliter {
				color: #bbb;
				padding: 0px 8px;
			}
</style>

