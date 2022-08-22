<template>
	<view>
		<Title Title="企业列表"></Title>
		<view class="tab">
			<view-text @click="qh(1)" class="text2">
				综合
				<view v-if="!isTitle" class="border"></view>
			</view-text>
			<view-text @click="qh(2)" class="text1">
				最新
				<view v-if="isTitle" class="border"></view>
			</view-text>
			<view-text @click="qh(2)" class="text2">
				热门
				<view v-if="!isTitle" class="border"></view>
			</view-text>
			<view-text @click="qh(2)" class="text2">
				类型
				<view v-if="!isTitle" class="border"></view>
			</view-text>
			<view-text @click="qh(2)" class="text2">
				规模
				<view v-if="!isTitle" class="border"></view>
			</view-text>
		</view>
		<view class="card">
			<view class="qeBox" v-for="(item,index) in 4">
				<image class="image" src="/static/gst.png" mode=""></image>
				<view class="textBox">
					<view class="text1">
						共同富裕互助联盟
					</view>
					<view class="text2">
						企业类型：电子芯片
					</view>
					<view class="text3">
						企业需大量采购手机 芯片，量大者优先...
					</view>
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
				isTitle: true,
			}
		},
		components: {
			Title,
		},
		methods: {
			qh(num) {
				// this.isTitle = num == 1 ? true : false;
			}
		}

	}
</script>

<style lang="scss">
	body {
		padding: 70rpx 0 60rpx 0;
	}

	.card {
		padding: 60rpx 30rpx 10rpx;
		margin: 0 30rpx;
		width: 630rpx;
		background: #FFFFFF;
		border-radius: 24px;

		.qeBox {
			margin-bottom: 78rpx;
			display: flex;
			align-items: center;

			.image {
				width: 180rpx;
				height: 180rpx;
				border-radius: 22rpx;
			}

			.textBox {
				display: flex;
				flex-direction: column;
				margin-left: 20rpx;

				.text1 {
					margin-bottom: 10rpx;

					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #1A1A1A;
				}

				.text2 {
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #666666;
					margin-bottom: 60rpx;
				}

				.text3 {
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #CCCCCC;
				}
			}
		}
	}

	.tab {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 50rpx 0 40rpx 0;
		.text1 {
			position: relative;
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #1A1A1A;

			.border {
				display: flex;
				position: absolute;
				bottom: -7rpx;
				left: 6rpx;
				width: 48rpx;
				height: 6rpx;
				background: #2852FF;
				border-radius: 3px;
			}
		}
		.text2{
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
		}
	}
</style>
