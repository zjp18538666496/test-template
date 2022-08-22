<template>
	<view class="Menus-container">
		<view class="menus">
			<navigator @click="open(index)"  class="one-box" hover-class="none" v-for="(item,index) in menusList" :key="index" :url="item.url">
				<view class="outside">
					<image class="icon" :src="item.src"></image>
					<view class="text-name">{{ item.name }}</view>
				</view>
			</navigator>
		</view>
		<view class="express">
			<view class="left">
				<image class="image" src="/static/jrkb.png" mode=""></image>
				<view class="rz">
					认证
				</view>
				<view-text class="rzcg">152******49成功认证企业</view-text>
			</view>
			<image class="image2" src="/static/ybd.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menusList: [{
						name: "智能匹配",
						src: "/static/znpp.png",
						url: "/pages/my/smartMatching/SmartMatching"
					},
					{
						name: "展会活动",
						src: "/static/zhhd.png",
						url: "/pages/my/corporateActivities/CorporateActivities"
					},
					{
						name: "企业资讯",
						src: "/static/qyzx.png",
						url: "/pages/my/companyInformation/CompanyInformation"
					},
					{
						name: "法律援助",
						src: "/static/scxq.png",
						url: "/pages/my/legalAid/LegalAid"
					}
				]
			}
		},
		components: {},
		methods: {
			open(index) {
				uni.navigateTo({
					url: "../.." + this.menusList[index].url,
				});
			}
		}
	}
</script>

<style lang="scss">
	.Menus-container {
		.menus {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 650rpx;
			margin: 0 auto;

			.one-box {
				.outside {
					width: 100rpx;

					.icon {
						width: 60rpx;
						height: 65rpx;
						display: block;
						margin: 0 auto 35rpx;
						text-align: center;
					}

					.text-name {
						width: 100%;
						color: #4D4D4D;
						font-size: 24rpx;
						text-align: center;
					}
				}
			}
		}

		.express {
			position: relative;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 690rpx;
			height: 50rpx;
			background-color: #E6ECFF;
			border-radius: 8px;
			margin: 48rpx auto 67rpx;
			.left {
				display: flex;
				align-items: center;
			}
			.image {
				width: 183rpx;
				height: 50rpx;
			}

			.rz {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 64rpx;
				height: 32rpx;
				border: 1rpx solid #82AAFF;
				border-radius: 5rpx;
				font-size: 22rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #0A5CFF;
				margin-left: 20rpx;
			}

			.rzcg {
				margin-left: 20rpx;
				font-size: 20rpx;
				margin-right: 20rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #8F9FD8;
			}

			.image2 {
				width: 52rpx;
				height: 46rpx;
				border-radius: 8px;
			}
		}
	}
</style>
