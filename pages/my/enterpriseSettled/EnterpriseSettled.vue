<template>
	<view>
		<Title Title="企业入驻"></Title>
	</view>
	<view class="card">
		<view class="titleBox">
			<view @click="qh(1)" class="qy" :style="'background:'+ titleBoxColor1 +';'">
				企业认证
			</view>
			<view @click="qh(2)" class="gr" :style="'background:'+ titleBoxColor2 +';'">
				个人认证
			</view>
		</view>
		<view class="qyrz">
			<view class="ztxx">
				填写主体信息
			</view>
			<view class="inputBox" v-for="(item,index) in list" :key="index">
				<view class="ks">
					<view class="title">
						{{item.title}}
					</view>
					<input class="input" type="text" placeholder-style="font-size:24rpx;color:#989898;"
						:placeholder="item.placeholder">
				</view>
			</view>
		</view>
	</view>
	<view class="card2" v-if="is">
		<view class="title">
			营业执照
		</view>
		<view class="yyzzBox">
			<image class="image" src="/static/zp.png" mode=""></image>
			<view class="text">
				添加营业执照
			</view>
		</view>
	</view>
	<view class="card3">
		<view class="title">
			法人身份证
		</view>
		<view class="ds">
			<view class="yyzzBox">
				<image class="image" src="/static/sfzzm.png" mode=""></image>
				<view class="text">
					添加身份证正面
				</view>
			</view>
			<view style="width: 30rpx;"></view>
			<view class="yyzzBox">
				<image class="image" src="/static/sfzfm.png" mode=""></image>
				<view class="text">
					添加身份证反面
				</view>
			</view>
		</view>
	</view>
	<view class="card3" v-if="!is">
		<view class="title">
			技能证书（选填）
		</view>
		<view class="ds">
			<view class="yyzzBox">
				<image class="image" src="/static/zhzm.png" mode=""></image>
				<view class="text">
					添加技能证书正面
				</view>
			</view>
			<view style="width: 30rpx;"></view>
			<view class="yyzzBox">
				<image class="image" src="/static/zhfm.png" mode=""></image>
				<view class="text">
					添加技能证书反面
				</view>
			</view>
		</view>
	</view>
	<view class="btn">
		确定并提交
	</view>

</template>

<script>
	import Title from '@/components/Title.vue'; //二级菜单标题
	export default {
		data() {
			return {
				titleBoxColor1: "#fff",
				titleBoxColor2: "#F5F8FF",
				is: true,
				list: [{
						title: "企业名称",
						placeholder: "请按照营业执照上的企业名称"

					},
					{
						title: "信用代码",
						placeholder: "13或18位的数字和大写字母"

					},
					{
						title: "法人姓名",
						placeholder: "请输入法人姓名"

					},
					{
						title: "法人身份证",
						placeholder: "请输入法人身份证"

					}
				],
				qyList: [{
						title: "企业名称",
						placeholder: "请按照营业执照上的企业名称"

					},
					{
						title: "信用代码",
						placeholder: "13或18位的数字和大写字母"

					},
					{
						title: "法人姓名",
						placeholder: "请输入法人姓名"

					},
					{
						title: "法人身份证",
						placeholder: "请输入法人身份证"

					}
				],
				grList: [{
						title: "姓名",
						placeholder: "请输入姓名"

					},
					{
						title: "身份证",
						placeholder: "请输入身份证"

					},
					{
						title: "手机号",
						placeholder: "请输入手机号"

					}
				]
			};
		},
		components: {
			Title
		},
		methods: {
			qh(num) {
				if (num == 1) {
					this.titleBoxColor1 = "#fff";
					this.titleBoxColor2 = "#F5F8FF";
					this.is = true;
					this.list = this.qyList;
				} else if (num == 2) {
					this.titleBoxColor1 = "#F5F8FF";
					this.titleBoxColor2 = "#fff";
					this.is = false;
					this.list = this.grList;
				}
			}
		}

	}
</script>

<style lang="scss">
	body {
		padding-top: 70rpx;
		padding-bottom: 60rpx;
	}

	.card {
		padding: 30rpx;
		padding-bottom: 60rpx;
		margin: 0 30rpx;
		margin-bottom: 60rpx;
		width: 630rpx;
		background: #FFFFFF;
		border-radius: 24rpx;

		.titleBox {
			display: flex;
			align-items: center;
			padding: 0 6rpx;
			width: 630rpx;
			height: 78rpx;
			background: #F5F8FF;
			border-radius: 12rpx;

			.qy {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 310rpx;
				height: 66rpx;
				border-radius: 10rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #1A1A1A;
			}

			.gr {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 310rpx;
				height: 66rpx;
				border-radius: 10rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #1A1A1A;
			}
		}

		.ztxx {
			margin-top: 66rpx;
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #989898;
		}

		.inputBox {
			.ks {
				display: flex;
				align-items: center;
				margin-top: 80rpx;

				.title {
					width: 140rpx;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
				}

				.input {
					// margin-left: rpx;
					padding-left: 50rpx;
					width: 450rpx;
				}
			}
		}

	}

	.card2 {
		padding: 30rpx;
		padding-bottom: 60rpx;
		margin: 0 30rpx;
		width: 630rpx;
		background: #FFFFFF;
		border-radius: 24rpx;

		.title {
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #1A1A1A;
		}

		.yyzzBox {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin-top: 53rpx;
			width: 630rpx;
			height: 300rpx;
			background: #F8FAFF;
			border-radius: 12rpx;

			.image {
				width: 55rpx;
				height: 51rpx;
			}

			.text {
				margin-top: 12rpx;
				font-size: 22rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #4D4D4D;
			}
		}
	}

	.card3 {
		padding: 30rpx;
		padding-bottom: 60rpx;
		margin: 0 30rpx;
		margin-top: 60rpx;
		width: 630rpx;
		background: #FFFFFF;
		border-radius: 24rpx;

		.title {
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #1A1A1A;
		}

		.ds {
			display: flex;
			justify-content: cspace-around;

			.yyzzBox {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				margin-top: 53rpx;
				width: 300rpx;
				height: 200rpx;
				background: #F8FAFF;
				border-radius: 12rpx;

				.image {
					width: 55rpx;
					height: 51rpx;
				}

				.text {
					margin-top: 12rpx;
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #4D4D4D;
				}
			}
		}
	}
	.btn {
		display: flex;
		justify-content:center;
		align-items:center;
		margin: 100rpx auto 0;
		width: 690rpx;
		height: 92rpx;
		background: #2858FF;
		border-radius: 46rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
	}
</style>
