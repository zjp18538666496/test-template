<template>
	<view class="InfoList-container">
		<view class="one-info" v-for="(item,index) in textList" :key="index">
			<view class="left">
				<view :class="`image-container bg${ item % 4 }`">
					<image class="image" :src="item.src"></image>
				</view>
			</view>
			<view class="info-data">
				<view class="info-title">
					<view class="title">{{item.title}}</view>
					<view class="time">{{item.time}}</view>
				</view>
				<view class="info-details">{{item.text}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				textList: [{
						title: "有企业对发布需求报价",
						text: "企业需大量采购手机芯片",
						src: "/static/yqyxqbj.png",
						time:"2022-4-29"
					},
					{
						title: "有企业申请沟通咨询",
						text: "企业需大量采购手机芯片",
						src: "/static/qysqgt.png",
						time:"星期二"
					},
					{
						title: "企业需大量采购手机芯片",
						text: "企业需大量采购手机芯片，量大者优先...",
						src: "/static/sjxp.png",
						time:"09:10"
					},
					{
						title: "企业需大量采购手机后摄",
						text: "企业需大量采购手机芯片，量大者优先...",
						src: "/static/sjhs.png",
						time:"15:35"
					}
				]
			}
		},
		methods: {}

	}
</script>

<style lang="scss">
	.InfoList-container {
		flex: 1;
		overflow-y: scroll;
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		z-index: 1;

		.one-info {
			width: calc(100vw - 60rpx);
			margin-bottom: 40rpx;
			display: flex;
			align-items: center;
			.left {
				.image {
					width: 92rpx;
					height: 92rpx;
				}
			}
			.image-container {
				width: 92rpx;
				height: 92rpx;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;

				.icon0 {
					width: 92rpx;
					height: 92rpx;
				}

				.icon1 {
					width: 92rpx;
					height: 92rpx;
				}

				.icon2 {
					width: 92rpx;
					height: 92rpx;
				}

				.icon3 {
					width: 92rpx;
					height: 92rpx;
				}
			}

			.bg0 {
				background: linear-gradient(135deg, #FF9000, #FF4A00);
			}

			.bg1 {
				background: linear-gradient(135deg, #FFD400, #FDA100);
			}

			.bg2 {
				background: linear-gradient(135deg, #00C0FF, #0F5FFF);
			}

			.bg3 {
				background: linear-gradient(135deg, #458FFF, #4E45FF);
			}
		}

		.info-data {
			margin-left: 24rpx;
			width: calc(100vw - 60rpx);

			.info-title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;

				.title {
					color: #000000;
					font-size: 30rpx;
				}

				.time {
					color: #CCCCCC;
					font-size: 22rpx;
				}
			}

			.info-details {
				color: #999999;
				font-size: 26rpx;
				margin-top: 15rpx;
			}
		}
	}
</style>
