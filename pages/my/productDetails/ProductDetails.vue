<template>
	<view class="productDetailsBox">
		<Title Title="需求详情"></Title>
		<view class="card">
			<RequirementsInformation :title="title" :msgList="msgList"></RequirementsInformation>
		</view>
		<view class="card">
			<view class="requirements">
				报价信息
			</view>
			<view class="data-list">
				<view class="quote" v-for="item in 4" :key="item">
					<image class="quote-img" src="/static/gst.png"></image>
					<view class="quote-right">
						<view class="quote-title">河南XXXXXX有限公司</view>
						<view class="quote-details">联系方式：152XXXXXX49</view>
						<view class="price-container">
							<view class="price">
								<text class="text1">报价：</text>
								<text class="text2">￥3499</text>
								<text class="text4">元</text>
							</view>
							<navigator class="quote-btn">成交</navigator>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Title from '@/components/Title.vue'; //二级菜单标题
	import RequirementsInformation from "@/components/RequirementsInformation.vue"
	export default {
		data() {
			return {
				msgList: [{
						title: "需求标题",
						msg: "企业需大量采购手机芯片，量大者..."
					},
					{
						title: "所需数量",
						msg: "20000"
					},
					{
						title: "需求预算",
						msg: "100，000元"
					},
					{
						title: "工"+ '\xa0\xa0\xa0\xa0\xa0\xa0' +"艺",
						msg: "模座底面加工、正面机构加工安全..."
					},
					{
						title: "材"+ '\xa0\xa0\xa0\xa0\xa0\xa0' +"料",
						msg: "钢模版"
					},
					{
						title: "型"+ '\xa0\xa0\xa0\xa0\xa0\xa0' +"号",
						msg: "电子零部件"
					},
					{
						title: "交付日期",
						msg: "2024-4-26"
					},
					{
						title: "交付地点",
						msg: "河南省郑州市金水区"
					}
				],
				title: {
					text1: "需求信息",
					text2: "招标中",
					is:true
				},
			}
		},
		components: {
			Title,
			RequirementsInformation
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	body {
		padding-top: 70rpx;
		background-color: #F8F7FE;

	}

	.card {
		margin: 60rpx 30rpx 60rpx 30rpx;
		padding: 40rpx 30rpx;
		width: 630rpx;
		background: #FFFFFF;
		border-radius: 24rpx;

		.requirements {
			margin-bottom: 53rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #1A1A1A;
		}

		.data-list {
			.quote {
				width: 630rpx;
				background: #FFFFFF;
				border-radius: 24rpx;
				// padding: 30rpx;
				display: flex;
				justify-content: space-between;
				margin-bottom: 32rpx;

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
								color: #666;
								font-size: 28rpx;
							}

							.text2 {
								color: #FF563F;
								font-size: 32rpx;
							}
							.text4 {
								color: #FF563F;
								font-size: 28rpx;
							}

							.text3 {
								color: #FF563F;
								font-size: 28rpx;
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
