<template>
	<view class="suppliersBox">
		<Title></Title>
		<view class="currentBox">
			<view-text class='current'>当前为</view-text>
			<view-text class='role'>需求方</view-text>
		</view>
		<view class="illustrate">
			<view-text>我来提供设备,成产加工</view-text>
		</view>
		<view class="img">
			
		</view>
		<view class="">
			<button class="btnExit">切换为采购商</button>
		</view>
	</view>
</template>

<script>
	import Title from '@/components/Title.vue'; //二级菜单标题
	export default {
		data() {
			return {

			}
		},
		components: {
			Title,
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	body {
		background-color: #fff;
		padding-top: 70rpx;
		padding-bottom: 30rpx;
	}

	.btnExit {
		color: #fff;
		width: 690rpx;
		height: 92rpx;
		background: #2858FF;
		border-radius: 46rpx;
		margin-top: 500rpx;
	}

	.suppliersBox {
		background-color: #fff;

		.currentBox {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 60rpx 0 30rpx 0;

			.current {
				font-size: 48rpx;
				font-family: PingFang SC;
				font-weight: 800;
				color: #333333;
				line-height: 36rpx;
			}

			.role {
				font-size: 48rpx;
				font-family: PingFang SC;
				font-weight: 800;
				color: #2858FF;
				line-height: 36rpx;
			}
		}

		.illustrate {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 160rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #666666;
			line-height: 36rpx;
		}
		.img {
			width: 750rpx;
			height: 554rpx;
		}
	}
</style>
