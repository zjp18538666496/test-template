<template>
	<view class="UserInfo-container">
		<view class="setting">
			<image class="icon" @click="openSettings" src="/static/logo.png"></image>
			<image class="icon" src="/static/logo.png"></image>
		</view>
		<view class="userInfo">
			<view @click="switchSuppliers" class="left">
				<image class="avatar" src="/static/logo.png"></image>
				<view class="identity">
					<image class="icon" src=""></image>
					<view>需求方</view>
				</view>
			</view>
			<view class="right">
				<view class="userName-container">
					<view class="username">共同富裕产业互助联盟</view>
					<view @click="personalInformation" class="homepage">
						<view>个人主页</view>
						<image class="icon" src=""></image>
					</view>
				</view>
				<view class="authentication">
					<image class="icon1" src=""></image>
					<view class="auther-text">待企业认证</view>
					<image class="icon2" src=""></image>
				</view>
			</view>
		</view>
		<view class="VIP-container">
			<image class="crown" src=""></image>
			<view class="vip-text">开通超级会员，尊享私人定制饮食</view>
			<view class="receive">领取权益</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		methods: {
			personalInformation(){
				uni.navigateTo({
					url: '../../pages/personalInformation/personalInformation',
				});
			},
			openSettings(){
				uni.navigateTo({
					url: '../../pages/my/accountSettings/AccountSettings',
				});
			},
			switchSuppliers(){
				uni.navigateTo({
					url: '../../pages/my/suppliers/Suppliers',
				});
			}
			
		}
	}
</script>

<style lang="scss">
	.UserInfo-container {
		padding-top: 70rpx;
		display: flex;
		flex-direction: column;

		.setting {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			padding-right: 30rpx;

			.icon {
				width: 43rpx;
				height: 40rpx;
				display: block;
				margin-left: 64rpx;
			}
		}

		.userInfo {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 690rpx;
			margin: 50rpx auto;

			.left {
				.avatar {
					width: 114rpx;
					height: 114rpx;
					z-index: 1;
					position: relative;
					border-radius: 50%;
				}

				.identity {
					margin-top: -40rpx;
					width: 114rpx;
					height: 36rpx;
					background: linear-gradient(-38deg, #33A0FF, #2852FF);
					border-radius: 18rpx;
					color: #FFFFFF;
					font-size: 22rpx;
					z-index: 2;
					position: relative;
					display: flex;
					align-items: center;
					justify-content: center;

					.icon {
						width: 17rpx;
						height: 15rpx;
						display: block;
						margin-right: 4rpx;
					}
				}
			}

			.right {
				width: 550rpx;

				.userName-container {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.username {
						color: #1A1A1A;
						font-size: 30rpx;
						font-weight: bold;
					}

					.homepage {
						display: flex;
						align-items: center;
						color: #1A1A1A;
						font-size: 26rpx;

						.icon {
							width: 9px;
							height: 15px;
							display: block;
							margin-left: 13rpx;
						}
					}
				}

				.authentication {
					width: 210rpx;
					background: #E0E8FF;
					border-radius: 50rpx;
					margin-top: 18rpx;
					display: flex;
					align-items: center;
					padding: 6rpx 12rpx;

					.icon1 {
						width: 18rpx;
						height: 18rpx;
						background: #2858FF;
						border-radius: 50%;
					}

					.icon2 {
						width: 12rpx;
						height: 12rpx;
						background: #2858FF;
					}

					.auther-text {
						font-size: 18rpx;
						color: #2858FF;
						margin: 0 18rpx 0 10rpx;
					}
				}
			}
		}

		.VIP-container {
			width: 640rpx;
			height: 100rpx;
			padding: 0 25rpx;
			background: linear-gradient(0deg, #22202D 0%, #2D2A3F 100%);
			border-radius: 10rpx;
			display: flex;
			align-items: center;
			margin: 0 auto 20rpx;
			position: relative;

			.crown {
				width: 67rpx;
				height: 52rpx;
				background: linear-gradient(135deg, #E6B16B 0%, #FFEEDA 100%);
			}

			.vip-text {
				margin-left: 28rpx;
				font-size: 24rpx;
				color: #EFD7B9;
			}

			.receive {
				width: 116rpx;
				height: 46rpx;
				background: linear-gradient(135deg, #FFEDDC, #E4BE8F);
				border-radius: 23rpx;
				font-size: 24rpx;
				color: #5C3F1C;
				text-align: center;
				line-height: 46rpx;
				position: absolute;
				right: 0;
				margin-right: 25rpx;
			}
		}
	}
</style>
