<template>
	<view class="SearchContainer">
		<view class="select-address">
			<view class="text">郑州</view>
			<image class="arrow" src="/static/xxtb.png"></image>
		</view>
		<view class="search">
			<image class="icon" src="/static/ss.png"></image>
			<input class="input" placeholder="搜索供需产品" />
		</view>
		<view @click="openAdd" class="add">
			<image class="icon" src="/static/tj.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		components: {},
		methods: {
			openAdd() {
				uni.navigateTo({
					url: "/pages/my/supply/Supply"
				});
			}
		}
	}
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
				height: 12px;
				margin-left: 10rpx;
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
				width: 30rpx;
				height: 30rpx;
			}

			.input {
				width: 360rpx;
			}
		}

		.add {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 70rpx;
			height: 70rpx;

			.icon {
				width: 70rpx;
				height: 70rpx;
			}

			// background: linear-gradient(-38deg, #33A0FF, #2852FF);
			// box-shadow: 0rpx 0rpx 16rpx 0rpx rgba(38, 94, 255, 0.3000);
			// border-radius: 50%;
			// font-size: 45rpx;
			// color: #fdfdfd;
		}
	}
</style>
