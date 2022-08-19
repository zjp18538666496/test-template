<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//不存在则跳转登录页
			uni.reLaunch({
				url:"/pages/my/longin/Longin",
				success:()=>{
					//跳转完页面后再关闭启动页
					plus.navigator.closeSplashscreen();
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
