<template>
	<view>
		<Title Title="法律援助"></Title>
		<view class="card">
			<view class="qeBox" v-for="(item,index) in 4">
				<image class="image" src="/static/tc4.png" mode=""></image>
				<view class="textBox">
					<view class="text1">
						芯片和科学法案
					</view>
					<view class="text2">
						必要时采取有力措施维护自身合法权益
					</view>
					<view class="text3">
						新华社北京x月xx日电（记者xx）针对...
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
		margin-top: 60rpx;
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
</style>
