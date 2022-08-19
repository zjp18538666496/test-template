<template>
	<view class="transactionDemandInformationBox">
		<Title Title="我的成交"></Title>
		<view class="card">
			<view class="company">
				<view class="ImgBox">
					<image class="Img" src="/static/logo.png"></image>
				</view>
				<view class="title">
					<view-text class="text1">河南XXXXXX有限公司</view-text>
					<view-text class="text2">联系方式：152XXXXXX49</view-text>
				</view>
			</view>
			<RequirementsInformation v-if="is" :title="title" :msgList="msgList"></RequirementsInformation>
			<view v-if="!is" class="score">
				<view-text>评分等级</view-text>
				<view class="">
					<image class="Img" src="/static/score1.png"></image>
					<image class="Img" src="/static/score1.png"></image>
					<image class="Img" src="/static/score1.png"></image>
					<image class="Img" src="/static/score1.png"></image>
					<image class="Img" src="/static/score1.png"></image>
				</view>
			</view>
			<view v-if="!is" class="satisfaction">
				满意你就夸一夸，点击这里输入评价
			</view>
		</view>
		<view @click="evaluate" class="evaluate">
			评价
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
						title: "工  艺",
						msg: "模座底面加工、正面机构加工安全..."
					},
					{
						title: "材  料",
						msg: "钢模版"
					},
					{
						title: "型  号",
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
				is: true
			};
		},
		components: {
			Title,
			RequirementsInformation
		},
		methods: {
			evaluate() {
				this.is = !this.is;
			}
		}
	}
</script>

<style lang="scss">
	body {
		padding-top: 70rpx;
		background-color: #F8F7FE;
	}

	.transactionDemandInformationBox {
		position: relative;

		.card {

			margin: 60rpx 30rpx 550rpx 30rpx;
			padding: 40rpx 30rpx;
			width: 630rpx;
			background: #FFFFFF;
			border-radius: 24rpx;

			.company {
				display: flex;
				align-items: center;
				margin-bottom: 58rpx;

				.ImgBox {
					margin-right: 20rpx;
					width: 110rpx;
					height: 110rpx;
					border-radius: 5rpx;
					background-color: antiquewhite;

					.Img {
						width: 100%;
						height: 100%;
					}
				}

				.title {
					display: flex;
					flex-direction: column;

					.text1 {
						margin-bottom: 5rpx;
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #1A1A1A;
					}

					.text2 {
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #999999;
					}
				}
			}

			.score {
				display: flex;

				.Img {
					margin: 0 20rpx;
					width: 34rpx;
					height: 34rpx;
				}
			}

			.satisfaction {
				margin-top: 52rpx;
				height: 450rpx;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #CCCCCC;
			}
		}

		.evaluate {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0rpx 30rpx 0 30rpx;
			height: 92rpx;
			background: #2858FF;
			border-radius: 46rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #FFFFFF;
		}
	}
</style>
