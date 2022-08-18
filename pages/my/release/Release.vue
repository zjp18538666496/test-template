<template>
	<view class="releaseBox">
		<Title Title="我的发布"></Title>
		<view class="product">
			<view class="imageBox">
				<image
					class="icon"
					src="/static/logo.png"
				></image>
			</view>
			<view class="message">
				<view-text class='text1'>大量采购手机芯片</view-text>
				<view-text class='text2'>企业需大量采购手机芯片，量...</view-text>
				<view class="text3box">
					<view-text class='text3'>企业推荐</view-text>
				</view>
				<view class="text4Box">
					<view-text class="text4">意向金：</view-text>
					<view-text class="text5">￥3499元</view-text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Title from '@/components/Title.vue'; //二级菜单标题
	export default {
		data() {
			return {
				
			};
		},
		components: {
			Title
		},
		
	}
</script>

<style lang="scss">
	body{
		padding-top: 70rpx;
		background-color: #F8F7FE;
		
	}
	.product {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 20rpx 10rpx;
		padding: 30rpx 10rpx;
		border-radius: 24rpx;
		background-color: #FFFFFF;
		
		.imageBox {
			width: 200rpx;
			height: 200rpx;
			background: #FFFFFF;
			border-radius: 22px;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.message {
			display: flex;
			justify-content: flex-start;
			flex-direction:column;
			margin-left: 30rpx;
			.text1{
				margin-bottom: 10rpx;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #1A1A1A;
			}
			.text2{
				margin-bottom: 18rpx;
				font-size: 22rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: #999999;
			}
			.text3box{
				margin-bottom: 30rpx;
				width: 120rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #E6ECFF;
				border-radius: 5rpx;
				.text3{
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
				flex-direction:center;
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
