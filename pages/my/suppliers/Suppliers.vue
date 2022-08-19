<template>
	<view class="suppliersBox">
		<Title></Title>
		<view class="currentBox">
			<view-text class='current'>当前为</view-text>
			<view-text class='role'>{{list[num].role}}</view-text>
		</view>
		<view class="illustrate">
			<view-text>{{list[num].illustrate}}</view-text>
		</view>
		<view class="img">
			<image :src="list[num].src"></image>
		</view>
		<view class="">
			<button @click="btnExit" class="btnExit">{{list[num].btn}}</button>
		</view>
	</view>
</template>

<script>
	import Title from '@/components/Title.vue'; //二级菜单标题
	export default {
		data() {
			return {
				list:[
					{
						role:"供应商",
						illustrate:"我来提供设备,成产加工",
						src:"/static/0.png",
						btn:"切换为采购商"
					},
					{
						role:"采购商",
						illustrate:"我有制作需求,寻找厂商",
						src:"/static/xqf.png",
						btn:"切换为需求方"
					}
				],
				is:true,
				num:0
				
			}
		},
		components: {
			Title,
		},
		methods: {
			btnExit(){
				this.is = !this.is
				this.num = this.is == true ? 0 : 1;
			}
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
			display: flex;
			justify-content: center;
			align-items: center;
			width: 750rpx;
			height: 554rpx;
		}
	}
</style>
