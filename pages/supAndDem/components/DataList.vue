<template>
	<view class="DataListContainer">
		<view 
			class="one-container"
			v-for="item in 4"
			:key="item"
		>
			<view class="top">
				<view class="data-type">
					<view class="ball">需</view>
					<view class="title">采购手机主板</view>
				</view>
				<view class="label">招标中</view>
			</view>
			<view class="center">
				<image 
					class="left-image"
					mode="aspectFit"
					src="/static/tc2.png"
				></image>
				<view class="right-data">
					<view class="line">
						<view>
							<text class="field">行业：</text>
							<text class="data">电子设备</text>
						</view>
						<view>
							<text class="field">付款方式：</text>
							<text class="data">制造业</text>
						</view>
					</view>
					<view class="line">
						<view>
							<text class="field">数量：</text>
							<text class="data">20000</text>
						</view>
						<view>
							<text class="field">发票：</text>
							<text class="data">不限</text>
						</view>
					</view>
					<view class="price">
						<text class="field">预算：</text>
						<text class="price-number">1,500,00</text>
						<text class="yuan">元</text>
					</view>
				</view>
			</view>
			<view class="bottom">
				<view class="container">
					<image
						class="icon1"
						src=""
					></image>
					<view class="text">河南 郑州</view>
				</view>
				<view class="container">
					<image
						class="icon2"
						src=""
					></image>
					<view class="text">888</view>
				</view>
				<view class="container">
					<image
						class="icon3"
						src=""
					></image>
					<view class="text">2022-4-29</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss">
	.DataListContainer {
		.one-container {
			width: 630rpx;
			padding: 30rpx;
			background: #FFFFFF;
			border-radius: 24rpx;
			margin-bottom: 30rpx;
			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.data-type {
					display: flex;
					align-items: center;
					.ball {
						width: 38rpx;
						height: 38rpx;
						background: linear-gradient(-38deg, #33A0FF, #2852FF);
						border-radius: 50%;
						line-height: 38rpx;
						text-align: center;	
						font-size: 24rpx;
						color: #FFFFFF;
						margin-right: 12rpx;
					}
					.title {
						color: #1A1A1A;
						font-size: 30rpx;
					}
				}
				.label {
					width: 86rpx;
					height: 32rpx;
					background: #E6ECFF;
					border-radius: 5rpx;
					color: #2858FF;
					font-size: 22rpx;
					text-align: center;
					line-height: 32rpx;
				}
			}
			.center {
				margin: 35rpx 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left-image {
					width: 180rpx;
					height: 180rpx;
				}
				.right-data {
					width: 440rpx;
					.line {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-bottom: 10rpx;
					}
					.price {
						margin-top: 40rpx;
					}
					.field {
						color: #333333;
						font-size: 24rpx;
					}
					.data {
						color: #666666;
						font-size: 24rpx;
					}
					.price-number {
						color: #FF563F;
						font-size: 30rpx;
					}
					.yuan {
						font-size: 22rpx;
						color: #FF563F;
					}
				}
			}
			.bottom {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.container {
					display: flex;
					align-items: center;
					.icon1 {
						width: 20rpx;
						height: 22rpx;
					}
					.icon2 {
						width: 22rpx;
						height: 18rpx;
					}
					.icon3 {
						width: 22rpx;
						height: 22rpx;
					}
					.text {
						color: #CCCCCC;
						font-size: 24rpx;
					}
				}
			}
		}
	}
</style>