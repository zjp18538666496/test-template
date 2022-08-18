<template>
	<view class="ButtonArea-container">
		<view class="one-button">
			<view class="top">
				<view class="image-container bg1">
					<image
						class="image"
						src=""
					></image>
				</view>
				<view class="tips">1</view>
			</view>
			<view class="button-text">供需提醒</view>
		</view>
		<view class="one-button">
			<view class="top">
				<view class="image-container bg2">
					<image
						class="image"
						src=""
					></image>
				</view>
				<view class="tips">1</view>
			</view>
			<view class="button-text">系统通知</view>
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss">
	.ButtonArea-container {
		display: flex;
		align-items: center;
		justify-content: space-around;
		z-index: 1;
		position: relative;
		width: 690rpx;
		margin: 0 auto 69rpx;
		.one-button {
			.top {
				position: relative;
				.bg1 {
					background: linear-gradient(135deg, #00C0FF, #0F5FFF);
				}
				.bg2 {
					background: linear-gradient(-26deg, #539DFF, #507EFF);
				}
				.image-container {
					box-shadow: 0px 0px 18px 0px rgba(0,136,255,0.3000);
					border-radius: 50%;
					width: 92rpx;
					height: 92rpx;
					margin: 0 auto;
					.image {
						width: 48rpx;
						height: 48rpx;
					}
				}
				.tips {
					width: 32rpx;
					height: 32rpx;
					background: #FF0055;
					border: 4rpx solid #FFFFFF;
					border-radius: 50%;
					font-size: 22rpx;
					color: #FFFFFF;
					position: absolute;
					left: 74rpx;
					bottom: 60rpx;
					text-align: center;
					line-height: 32rpx;
				}
			}
			.button-text {
				color: #000000;
				font-size: 26rpx;
				margin-top: 24rpx;
			}
		}
	}
</style>