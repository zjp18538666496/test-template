<template>
	<view class="personalInformationBox">
		<Title Title="个人信息"></Title>
		<view class="propertyBox">
			<view class="personalInformation">
				<view class="title">头像</view>
				<view class="detailsBox">
					<image class="chatHead" src="/static/chatHead.png"></image>
					<image class="detailsImg" src="/static/rightClick.png"></image>
				</view>
			</view>
		</view>
		<OptionsList :personalInformationList="personalInformationList"></OptionsList>
	</view>
</template>

<script>
	import Title from '@/components/Title.vue'; //二级菜单标题
	import OptionsList from '@/components/OptionsList.vue'; //选项列表
	export default {
		data() {
			return {
				personalInformationList: [{
						name: "昵称",
						src: "/static/rightClick.png",
						className: "",
						url: "",
						text: "天天向上"
					},
					{
						name: "性别",
						src: "/static/rightClick.png",
						className: "",
						url: "",
						text: "男"
					},
					{
						name: "个人简介",
						src: "/static/rightClick.png",
						className: "",
						url: "",
						text: ""
					},
					{
						name: "我的企业",
						src: "/static/rightClick.png",
						className: "",
						url: "",
						text: "共同富裕产业互助联盟"
					}
				]
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
		background: #fff;
	}

	.personalInformationBox {
		background: #fff;

		.propertyBox {
			padding: 0 30rpx;
			display: flex;
			border-bottom: 2rpx solid #F5F5F5;

			.personalInformation {
				width: 100%;
				height: 100%;
				padding: 45rpx 0;
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

					.chatHead {
						width: 76rpx;
						height: 76rpx;
					}
				}
			}
		}
	}
</style>
