<template>
	<view class="titleBox">
		<image @click="back" class="chatHead" src="/static/back.png"></image>
		<view-text class="title-xtxt">{{ Title }}</view-text>
	</view>
</template>

<script>
	export default {
		props:{
		  Title:String
		},
		data() {
			return {
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.titleBox {
		margin-bottom: 20rpx;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		.chatHead {
			position: absolute;
			left: 20rpx;
			width: 40rpx;
			height: 40rpx;
		}

		.title-xtxt {
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #1A1A1A;
		}
	}
</style>
