<template>
	<view class="QuoteList-container">
		<uni-popup ref="dialogInput" type="dialog">
			<uni-popup-dialog mode="input" title="产品报价" value="" placeholder="请输入金额" @confirm="dialogInputConfirm"/>
		</uni-popup>
		<view class="title-container">
			<view class="title-name">产品报价</view>
			<view class="more">
				<view class="more-name">更多报价</view>
				<image class="icon" src="/static/rightClick.png"></image>
			</view>
		</view>
		<view class="data-list">
			<view class="quote" v-for="item in 4" :key="item">
				<image class="quote-img" src="/static/tc2.png"></image>
				<view class="quote-right">
					<view class="quote-title">大量采购手机芯片</view>
					<view class="quote-details">企业需大量采购手机芯片， 企业需大量采购手机芯片</view>
					<view class="label-container">
						<view class="label">企业推荐</view>
					</view>
					<view class="price-container">
						<view class="price">
							<text class="text1">预算：</text>
							<text class="text2">￥3499</text>
							<text class="text3">元</text>
						</view>
						<navigator @click="confirmDialog" class="quote-btn">我要报价</navigator>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msgType: 'success',
				value: '默认输入的内容'
			}
		},
		methods: {
			confirmDialog() {
				this.$refs['dialogInput'].open()
			},
			dialogConfirm(done) {
				this.$refs['popupMessage'].open()
			},
			dialogInputConfirm( val) {
				this.value = val
				setTimeout(() => {
					uni.hideLoading()
				}, 1000)
			}
		},
	}
</script>
<!-- <script>
	export default {
		data() {
			return {}
		},
		methods: {
			wybj() {
				
			}
		}
	}
</script> -->

<style lang="scss">
	.QuoteList-container {
		.title-container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 0 auto 30rpx;

			.title-name {
				color: #1A1A1A;
				font-size: 32rpx;
				font-weight: bold;
			}

			.more {
				display: flex;
				align-items: center;

				.more-name {
					color: #808080;
					font-size: 24rpx;
					margin-right: 20rpx;
				}

				.icon {
					width: 8px;
					height: 13px;
				}
			}
		}

		.data-list {
			.quote {
				width: 630rpx;
				background: #FFFFFF;
				border-radius: 24rpx;
				padding: 30rpx;
				display: flex;
				justify-content: space-between;
				margin-bottom: 20rpx;

				.quote-img {
					width: 222rpx;
					height: 222rpx;
					border-radius: 22rpx;
				}

				.quote-right {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					width: 380rpx;

					.quote-title {
						font-size: 30rpx;
						font-weight: bold;
					}

					.quote-details {
						font-size: 22rpx;
						color: #999999;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}

					.label-container {
						display: flex;
						align-items: center;

						.label {
							margin-right: 8rpx;
							padding: 5rpx 9rpx;
							background-color: #E6ECFF;
							color: #2858FF;
							font-size: 22rpx;
							border-radius: 5rpx;
							margin-top: 26rpx;
						}
					}

					.price-container {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-top: 20rpx;

						.price {
							.text1 {
								color: #999999;
								font-size: 22rpx;
							}

							.text2 {
								color: #FF563F;
								font-size: 32rpx;
							}

							.text3 {
								color: #FF563F;
								font-size: 22rpx;
							}
						}

						.quote-btn {
							width: 140rpx;
							height: 60rpx;
							background: #2858FF;
							border-radius: 12px;
							font-size: 24rpx;
							color: #FFFFFF;
							text-align: center;
							line-height: 60rpx;
						}
					}
				}
			}
		}
	}
</style>
