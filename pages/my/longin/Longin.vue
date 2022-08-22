<template>
	<view class="loginBox">
		<view class="signQuickly">
			<view-text>快速登录</view-text>
			<image class="detailsImg" src="/static/rightClick.png" mode=""></image>
		</view>
		<view class="loginName">
			{{ loginName }}
		</view>
		<view class="loginPrompt">
			{{ loginPrompt }}
		</view>
		<view class="input">
			<view class="user">
				<input type="text" placeholder-style="font-size:32rpx;color:#ACACAC;" placeholder="输入手机号">
			</view>
			<view class="password">
				<input type="password" placeholder-style="font-size:32rpx;color:#ACACAC;" placeholder="输入密码">
				<view class="verificationCode">
					<image src="/static/mmby.png"></image>
				</view>
			</view>
		</view>
		
		<view class="agreement">
			<image class="img" src="/static/consent.png"></image>
			<view-text class="text1">我已阅读&nbsp</view-text>
			<view-text class="text2">艾乐博服务协议</view-text>
			<view-text class="text1">&nbsp和&nbsp</view-text>
			<view-text class="text2">隐私政策</view-text>
		</view>
		<view @click="login" class="login">
			登&nbsp; &nbsp;录
		</view>
		<view class="doubt">
			<view-text>验证码登录</view-text>
			<view-text @click="doubt">注册</view-text>
		</view>
		<!-- <view class="tertiaryPeriod">
			<view-text>第三方登录</view-text>
			<view class="wx">

			</view>
		</view> -->
	</view>
</template>

<script>
	import Title from '@/components/Title.vue'; //二级菜单标题
	export default {
		data() {
			return {
				loginName: "密码登录",
				loginPrompt: "首次登录将自动注册",
				verificationCode: "重新获取"
			}
		},
		components: {
			Title,
		},
		methods: {
			login() {
				uni.switchTab({
					url: '/pages/index/index'
				});
			},
			doubt() {
				uni.navigateTo({
					url: '/pages/my/signUp/SignUp'
				});
			}
		}
	}
</script>

<style lang="scss">
	body {
		padding-top: 70rpx;
		background-color: #fff;
	}

	.loginBox {
		padding: 0 30rpx;
		background-color: #fff;

		.signQuickly {
			display: flex;
			justify-content: flex-end;
			margin-bottom: 64rpx;
			font-size: 26rpx;
			align-items: center;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}

		.detailsImg {
			margin-left: 16rpx;
			width: 26rpx;
			height: 26rpx;
		}

		.loginName {
			margin-bottom: 34rpx;
			font-size: 50rpx;
			font-family: PingFang SC;
			font-weight: 800;
			color: #1A1A1A;
		}

		.loginPrompt {
			margin-bottom: 64rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #B3B3B3;
		}

		.user input {
			padding-left: 40rpx;
			margin-bottom: 34rpx;
			width: 646rpx;
			height: 94rpx;
			background: #F7F8FA;
			border-radius: 47px;
		}

		.input {
			margin-bottom: 70rpx;
		}

		.password {
			position: relative;

			.verificationCode {
				position: absolute;
				top: 32rpx;
				right: 65rpx;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #2858FF;

				image {
					width: 30rpx;
					height: 30rpx;
					background: #DBDBDB;
				}
			}
		}

		.password input {
			padding-left: 40rpx;
			width: 646rpx;
			height: 94rpx;
			background: #F7F8FA;
			border-radius: 47px;
		}

		.agreement {
			display: flex;
			align-items: center;
			margin-bottom: 41rpx;

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
				color: #2858FF;
			}
		}

		.login {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 45rpx;
			width: 692rpx;
			height: 93rpx;
			background: #2858FF;
			border-radius: 46rpx;
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
		}

		.doubt {
			display: flex;
			justify-content: space-between;
			margin-bottom: 365rpx;
			padding: 0 40rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #4D4D4D;
		}

		.tertiaryPeriod {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #CCCCCC;

			.wx {
				margin-top: 42rpx;
				width: 84rpx;
				height: 84rpx;
				background: linear-gradient(0deg, #0DD56B 0%, #0ED26C 100%);
				border-radius: 50%;
			}
		}
	}
</style>
