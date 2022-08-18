<template>
	<view class="search-container">
		<view class="wrap">
			<view class="left">
				<view class="label-1">艾博乐</view>
				<view class="label-2">艾博乐供需平台</view>
			</view>
		</view>
		<image
		 class="set-img"
			mode="aspectFit"
			src="/static/logo.png"
		></image>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.search-container {
		width: 690rpx;
		padding-top: 50rpx;
		box-sizing: border-box;
		.wrap {
			display: flex;
			justify-content: space-between;
			.left {
				.label-1 {
					color: #1A1A1A;
					font-size: 32rpx;
				}
				.label-2 {
					color: #999999;
					font-size: 22rpx;
					padding-top: 12rpx;
				}
			}
			.right {
				
			}
		}
		.set-img {
			width: 690rpx;
			height: 240rpx;
			border-radius: 24rpx;
			display: block;
			margin: 38rpx 0 60rpx;
		}
	}
</style>
