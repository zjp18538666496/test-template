<template>
	<view class="signUpBox">
		<Title Title="手机注册"></Title>
		<view class="roleBox">
			<view class="role1">
				<view class="head">

				</view>
				<view-text class="text1">我是需求方</view-text>
				<view-text class="text3">我要找资源办事</view-text>
			</view>
			<view class="role2">
				<view class="head">

				</view>
				<view-text class="text2">我是供应方</view-text>
				<view-text class="text4">我要找需求合作</view-text>
			</view>
		</view>
		<view class="signUp">
			<input class="input1" placeholder-style="font-size:28rpx;color:#ACACAC;" type="text" placeholder="请输入手机号">
			<input class="input1" placeholder-style="font-size:28rpx;color:#ACACAC;" type="text" placeholder="请输入短信验证码">
			<input class="input1" placeholder-style="font-size:28rpx;color:#ACACAC;" type="text"
				placeholder="设置密码,6-16位">
			<input class="input2" placeholder-style="font-size:28rpx;color:#ACACAC;" type="text"
				placeholder="确认密码,6-16位">
			<view-text class="getProperty">|&nbsp获取验证码</view-text>
		</view>
		<view class="login">
			注册
		</view>
		<view class="agreement">
			<image class="img" src="/static/consent.png"></image>
			<view-text class="text1">已阅读并已同意&nbsp</view-text>
			<view-text class="text2">《xxx服务协议》</view-text>
			<view-text class="text2">&nbsp《隐私政策》</view-text>
		</view>
	</view>
</template>

<script>
	import Title from '@/components/Title.vue'; //二级菜单标题
	export default {
		data() {
			return {}
		},
		components: {
			Title
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	body {
		padding-top: 70rpx;
	}

	.signUpBox {
		.roleBox {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 60rpx 40rpx 0;

			.role1 {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				width: 300rpx;
				height: 250rpx;
				border-radius: 5rpx;
				background-color: #03A7EF;
			}

			.role2 {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				width: 300rpx;
				height: 250rpx;
				border-radius: 5rpx;
				background-color: #D7D7D7;
			}

			.head {
				margin-bottom: 20rpx;
				width: 80rpx;
				height: 80rpx;
				background-color: #fff;
				border-radius: 50%;
			}

			.text1 {
				margin-bottom: 20rpx;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #fff;
			}

			.text3 {
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #fff;
			}

			.text2 {
				margin-bottom: 20rpx;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #666;
			}

			.text4 {
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #666;
			}
		}

		.signUp {
			position: relative;
			background-color: #F2F2F2;
			margin: 80rpx 40rpx 60rpx 40rpx;
			padding: 10rpx 20rpx;

			.input1 {
				margin-top: 5rpx;
				border-bottom: 1px solid #D7D7D7;
				padding: 20rpx 0 20rpx 40rpx;
			}

			.input2 {
				margin-top: 5rpx;
				padding: 20rpx 0 20rpx 40rpx;
			}

			.getProperty {
				position: absolute;
				top: 25rpx;
				right: 20rpx;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: #868686;
			}
		}

		.login {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0rpx 40rpx 45rpx 40rpx;
			height: 93rpx;
			background: #03A7EF;
			border-radius: 5rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
		}

		.agreement {
			display: flex;
			align-items: center;
			margin: 0rpx 40rpx 41rpx 40rpx;

			.img {
				margin-right: 13rpx;
				width: 26rpx;
				height: 26rpx;
			}

			.text1 {
				font-size: 27rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #B3B3B3;
			}

			.text2 {
				font-size: 27rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #03A7EF;
			}
		}

	}
</style>
