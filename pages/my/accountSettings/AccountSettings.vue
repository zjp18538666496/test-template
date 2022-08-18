<template>
	<view class="accountSettingsBox">
		<Title Title="账户设置"></Title>
		<view class="optionsList">
			<view class="propertyBox">
				<view class="personalInformation">
					<view class="personalInformationLeft">
						<image class="chatHead" src="/static/chatHead.png"></image>
						<view-text>共同富裕产业互助联盟</view-text>
					</view>
					<view class="detailsBox">
						<view class="personalInformationName">个人信息</view>
						<image class="detailsImg" src="/static/rightClick.png"></image>
					</view>
				</view>
			</view>
			<OptionsList :personalInformationList="list1"></OptionsList>
		</view>
		<view class="optionsList">
			<OptionsList :personalInformationList="list2"></OptionsList>
		</view>
		<view class="optionsList">
			<OptionsList :personalInformationList="list3"></OptionsList>
		</view>
		<view class="optionsList">
			<OptionsList :personalInformationList="list4"></OptionsList>
		</view>
		<view class="">
			<button class="btnExit">退出当前账号</button>
		</view>
	</view>
</template>

<script>
	import Title from '@/components/Title.vue'; //二级菜单标题
	import OptionsList from '@/components/OptionsList.vue'; //选项列表
	export default {
		data() {
			return {
				list1: [{
					name: "企业信息",
					src: "/static/rightClick.png",
					className: "",
					url: "",
					text: "",
					fn:""
				}],
				list2: [{
					name: "账号安全",
					src: "/static/rightClick.png",
					className: "",
					url: "",
					text: "",
					fn:"accountSecurity"
				}],
				list3: [{
						name: "企业信息",
						src: "/static/rightClick.png",
						className: "",
						url: "",
						text: ""
					},
					{
						name: "企业信息",
						src: "/static/rightClick.png",
						className: "",
						url: "",
						text: ""
					},
					{
						name: "企业信息",
						src: "/static/rightClick.png",
						className: "",
						url: "",
						text: ""
					},
					{
						name: "企业信息",
						src: "/static/rightClick.png",
						className: "",
						url: "",
						text: ""
					}
				],
				list4: [{
						name: "意见反馈",
						src: "/static/rightClick.png",
						className: "",
						url: "",
						text: ""
					},
					{
						name: "关于我们",
						src: "/static/rightClick.png",
						className: "",
						url: "",
						text: ""
					},
					{
						name: "应用权限说明",
						src: "/static/rightClick.png",
						className: "",
						url: "",
						text: ""
					}
				],


			}
		},
		components: {
			Title,
			OptionsList
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	body {
		padding-top: 70rpx;
		padding-bottom: 20rpx;
	}

	.accountSettingsBox {
		background: #F8F8FA;

		.optionsList {
			margin-bottom: 20rpx;
		}

		.btnExit {
			color: #fff;
			width: 690rpx;
			height: 92rpx;
			background: #2858FF;
			border-radius: 46rpx;
		}
	}
	.propertyBox {
		padding: 0 30rpx;
		display: flex;
		border-bottom: 2rpx solid #F5F5F5;
		background-color: #fff;
	
		.personalInformation {
			width: 100%;
			height: 100%;
			padding: 30rpx 0;
			display: flex;
			flex-flow: row;
			justify-content: space-between;
			align-items: center;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
	
			.title {
				color: #1A1A1A;
				height: 38rpx;
				line-height: 38rpx;
			}
	
			.detailsBox {
				display: flex;
				flex-flow: row;
				justify-content: space-between;
				align-items: center;
				height: 38rpx;
				line-height: 38rpx;
				color: #4D4D4D;
	
				.detailsImg {
					margin-left: 16rpx;
					width: 26rpx;
					height: 26rpx;
				}
			}
			.chatHead {
				width: 76rpx;
				height: 76rpx;
			}
			.personalInformationName {
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #999999;
			}
			.personalInformationLeft {
				display: flex;
				justify-content: center;
				align-items: center;
				
				.chatHead{
					margin-right: 20rpx;
				}
			}
		}
	}
</style>
