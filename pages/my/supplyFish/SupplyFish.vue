<template>
	<view>
		<Title Title="需求详情"></Title>
		<view class="card2">
			<RequirementsInformation :title="title" :msgList="msgList"></RequirementsInformation>
		</view>
		<view class="card">
			<view class="requirements">
				需求详情
			</view>
			<view class="inputBox">
				<view class="input2">
					<view-text class="text1">需求描述</view-text>
					<textarea type="textarea" placeholder-style="font-size:28rpx;color:#ACACAC;" placeholder="需求描述"></textarea>
				</view>
			</view>
			<view class="">
				<view-text class="text1">实物参照</view-text>
				<view class="input2">
					<view class="imgBox">
						<image class="detailsImg" src="/static/tc2.png"></image>
						<view style="width: 10rpx;"></view>
						<image class="detailsImg" src="/static/tc3.png"></image>
						<view style="width: 10rpx;"></view>
						<view class="zpbox">
							<image class="zp" src="/static/zp.png"></image>
							<view class="txtx3">
								添加照片/视频
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="card2">
			<RequirementsInformation :title="title2" :msgList="msgList2"></RequirementsInformation>
		</view>
		<view class="btn">
			我要报价
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
				msgList2: [{
						title: "单位名称",
						msg: "河南xxx有限公司"
					},
					{
						title: "姓"+ '\xa0\xa0\xa0\xa0\xa0\xa0' +"名",
						msg: "官方发布（已认证）"
					},
					{
						title: "职"+ '\xa0\xa0\xa0\xa0\xa0\xa0' +"务",
						msg: "采购/需求"
					},
					{
						title: "联系电话",
						msg: "152XXXXXX49"
					}
				],
				title: {
					text1: "需求信息",
					text2: "招标中",
					is: true
				},
				title2: {
					text1: "联系信息",
					text2: "",
					is: false
				},
			}
		},
		components: {
			Title,
			RequirementsInformation
		},
		methods: {
			open() {
				uni.navigateTo({
					url: "/pages/my/supplyFish/SupplyFish"
				});
			}
		}
	}
</script>

<style lang="scss">
	body {
		padding-top: 70rpx;
		padding-bottom: 20rpx;
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

		.input2 {
			display: flex;
			align-items: flex-start;

			.text1 {
				margin-top: 4rpx;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
				margin-right: 60rpx;
			}

			input,textarea {
				width: 450rpx;
				height: 272rpx;
				padding-left: 20rpx;
				background: #FAFAFA;
				border-radius: 8px;
			}
				
			textarea {
				padding-top: 10rpx;
			}
		}

		.imgBox {
			display: flex;
			flex-wrap: wrap;
			margin-top: 54rpx;

			image {
				margin-bottom: 10rpx;
				width: 198rpx;
				height: 198rpx;
				background: #FAFAFA;
				border-radius: 18rpx;
			}
			.zpbox {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				width: 200rpx;
				height: 200rpx;
				background: #FAFAFA;
				border-radius: 18px;
				.zp {
					width: 60rpx;
					height: 60rpx;
					background: #FAFAFA;
				}
				.txtx3 {
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #4D4D4D;
				}
			}
		}

		.text1 {
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
			margin-right: 60rpx;
		}

	}
	.card2 {
		margin: 60rpx 30rpx 60rpx 30rpx;
		padding: 40rpx 30rpx;
		width: 630rpx;
		background: #FFFFFF;
		border-radius: 24rpx;
	}
	.btn {
		margin: 0rpx 30rpx 10rpx 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		width: 690rpx;
		height: 92rpx;
		background: #2858FF;
		border-radius: 46px;
	}
	.inputBox {
		margin-bottom: 54rpx;
	}
</style>
