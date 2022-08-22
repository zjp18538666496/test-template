<template>
	<view class="releaseBox">
		<view class="product" v-for="(item,index) in list" :key="index" @click="open(index)">
			<view class="imageBox">
				<image class="icon" src="/static/tc2.png"></image>
			</view>
			<view class="message">
				<view-text class='text1'>{{item.text1}}</view-text>
				<view-text class='text2'>{{item.text2}}</view-text>
				<view class="text3box">
					<view-text class='text3'>{{item.text3}}</view-text>
				</view>
				<view class="text4Box">
					<view-text class="text4">意向金：</view-text>
					<view-text class="text5">￥{{item.text5}}元</view-text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		props: {
			list: []
		},
		methods: {
			open(index) {
				uni.navigateTo({
					url: "../.." + this.list[index].url,
				});
			}
		}
	}
</script>

<style lang="scss">
	.product {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 0 20rpx 15rpx;
		padding: 30rpx 10rpx;
		border-radius: 24rpx;
		background-color: #FFFFFF;

		.imageBox {
			width: 200rpx;
			height: 200rpx;
			background: #FFFFFF;
			border-radius: 22px;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.message {
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			width: 400rpx;
			.text1 {
				margin-bottom: 10rpx;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #1A1A1A;
			}

			.text2 {
				margin-bottom: 18rpx;
				font-size: 22rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: #999999;
			}

			.text3box {
				margin-bottom: 30rpx;
				width: 120rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #E6ECFF;
				border-radius: 5rpx;

				.text3 {
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #2858FF;
					line-height: 36rpx;
				}
			}

			.text4Box {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-direction: center;

				.text4 {
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: #999999;
				}

				.text5 {
					font-size: 32rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FF563F;
				}
			}
		}
	}
</style>
