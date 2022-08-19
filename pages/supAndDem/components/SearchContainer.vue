<template>
	<view class="SearchContainer">
		<view class="select-address">
			<view class="text">郑州</view>
			<image 
				class="arrow"
				src=""
			></image>
		</view>
		<view class="search">
			<image 
				class="icon"
				src="/static/logo.png"
			></image>
			<input 
				class="input"
				placeholder="搜索供需产品"
			/>
		</view>
		<view class="add">
			+
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.SearchContainer {
		width: 690rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 50rpx;
		.select-address {
			display: flex;
			align-items: center;
			.text {
				font-size: 30rpx;
				color: #1A1A1A;
			}
			.arrow {
				width: 12px;
				height: 7px;
			}
		}
		.search {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 407rpx;
			height: 72rpx;
			padding: 0 40rpx;
			background: #FFFFFF;
			border-radius: 36rpx;
			font-size: 24rpx;
			.icon {
				width: 28rpx;
				height: 28rpx;
			}
			.input {
				width: 360rpx;
			}
		}
		.add {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 56rpx;
			height: 56rpx;
			background: linear-gradient(-38deg, #33A0FF, #2852FF);
			box-shadow: 0rpx 0rpx 16rpx 0rpx rgba(38, 94, 255, 0.3000);
			border-radius: 50%;
			font-size: 45rpx;
			color: #fdfdfd;
		}
	}
</style>