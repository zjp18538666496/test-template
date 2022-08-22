<template>
	<view class="releaseBox">
		<Title Title="企业信息"></Title>
		<view class="qyxx">
			<view class="left">
				<image src="/static/gst.png" mode=""></image>
			</view>
			<view class="right">
				<view-text class="text1">共同富裕互助联盟</view-text>
				<view class="rz">
					<view class="text1">企业</view>
					<view class="text2">认证</view>
				</view>
				<view-text class="text2">河南郑州</view-text>
				<view class="imgBox">
					<image class="img" src="/static/hp.png" v-for="(item,index) in 5" :key="index"></image>
					<!-- <image class="img" src="/static/cp.png" v-for="(item,index) in 1" :key="index"></image> -->
				</view>
			</view>
		</view>
		<view class="card">
			<view class="tab">
				<view-text @click="qh(1)" class="text1">
					简介
					<view v-if="isTitle" class="border"></view>
				</view-text>
				<view-text @click="qh(2)" class="text1">
					评价
					<view v-if="!isTitle" class="border"></view>
				</view-text>
			</view>
			<view class="je" v-if="isTitle">
				<view class="scgy">
					擅长工艺&特色
				</view>
				<view class="td">
					<view v-for="(item,index) in text1List" :key="index" class="textBox">
						<view class="text">
							{{item.text}}
						</view>
					</view>
				</view>
				<view class="gsje">
					<view class="title">
						公司简介
					</view>
					<view class="text1">
						《共同富裕产业互助联盟》（以下简称联盟）一个金字招牌链接“政、商、企、产、学、研、投、媒”八大维度资源，秉持着点滴服务、成就梦想的价值导向，采用多维度、垂直化路径深度解决中小微企业经营者和创业者的发展痛点，让经营创业更简单。 联盟依托于强大的政府及媒体背书，重塑了商业选择的新思路，构建的“三五八”原则，助力经营者、创业者在商业选择的过程中从少踩坑到不踩坑；联盟在发展过程中严格执行“六不原则”，甄选每一家成员单位。
					</view>
				</view>
				<view class="dtcp">
					<view class="title">
						产品动态
					</view>
					<image class="image" src="/static/tc6.png" mode=""></image>
					<image class="image" src="/static/tc7.png" mode=""></image>
				</view>
			</view>
			<view class="pj" v-if="!isTitle">
				<view class="qbpj">
					全部评价
				</view>
				<view class="yhpjBox" v-for="(item,index) in 3" :key="index">
					<view class="ha">
						<view class="left">
							<view class="tx">
								<image src="/static/chatHead.png" mode=""></image>
							</view>
							<view class="userNameBox">
								<view class="userName">
									诺**光
								</view>
								<view class="xx">
									<image src="/static/hp.png" mode=""></image>
									<image src="/static/hp.png" mode=""></image>
									<image src="/static/hp.png" mode=""></image>
									<image src="/static/hp.png" mode=""></image>
									<image src="/static/cp.png" mode=""></image>
								</view>
							</view>
						</view>
						<view class="right">
							2天前
						</view>
					</view>
					<view class="yhpl">
						按时交付，工艺质量精美，值得信赖。
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
				text1List:[
					{text:"电器柜"},
					{text:"ISO 9001"},
					{text:"ISO 14001"},
					{text:"冷室压轴机"},
					{text:"拉伸"},
					{text:"热室压轴机"},
					{text:"机加工"},
					{text:"4轴加工中心"},
					{text:"钣金"},
					{text:"剪板机"}
				]
			}
		},
		components: {
			Title,
		},
		methods: {
			qh(num) {
				this.isTitle = num == 1 ? true : false;
			}
		}

	}
</script>

<style lang="scss">
	body {
		padding-top: 70rpx;
		background-color: #F8F7FE;
		padding-bottom: 30rpx;
	}

	.qyxx {
		display: flex;
		margin: 30rpx 30rpx 0;

		.left {
			image {
				width: 180rpx;
				height: 180rpx;
				background: #CCCCCC;
				border-radius: 22rpx;
			}
		}

		.right {
			margin-left: 20rpx;

			.text1 {
				margin-bottom: 10rpx;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #1A1A1A;
			}

			.text2 {
				font-size: 22rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #CCD3EE;
			}

			.rz {
				display: flex;

				.text1 {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 80rpx;
					height: 32rpx;
					background: #E6ECFF;
					border-radius: 5px;
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #2858FF;
				}

				.text2 {
					margin-left: 10rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 80rpx;
					height: 32rpx;
					background: #E6ECFF;
					border-radius: 5px;
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #2858FF;
				}
			}

			.imgBox {
				margin-top: 20rpx;
				display: flex;
				align-items: center;

				.img {
					margin-right: 30rpx;
					width: 25rpx;
					height: 25rpx;
				}
			}
		}
	}

	.card {
		margin: 0 30rpx 0 20rpx;
		padding: 30rpx 30rpx 40rpx 30rpx;
		width: 630rpx;
		background: #FFFFFF;
		margin-top: 50rpx;
		border-radius: 24rpx;

		.tab {
			display: flex;
			justify-content: space-around;
			align-items: center;

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
		}
		.je {
			margin-top: 70rpx;
			.scgy {
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
			.td {
				margin-top: 38rpx;
				display: flex;
				flex-wrap: wrap;
				.textBox {
					margin: 0 20rpx 20rpx 0;
					padding: 0 10rpx;
					height: 32rpx;
					border: 1px solid #2858FF;
					border-radius: 5rpx;
					.text{
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #2858FF;
					}
				}
			}
			.gsje {
				
				.title {
					margin-top: 25rpx;
					margin-bottom: 25rpx;
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
				}
				.text1 {
					font-size: 24rpx;
					line-height: 200%;
					font-family: PingFang SC;
					font-weight: 500;
					color: #666666;
				}
			}
			.dtcp {
				.title {
					margin-top: 45rpx;
					margin-bottom: 35rpx;
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
				}
				.image {
					margin-bottom: 18rpx;
					width: 630rpx;
					height: 300rpx;
					border-radius: 24rpx;
				}
			}
		}
		.pj {
			margin-top: 50rpx;
			.qbpj {
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
			.yhpjBox {
				margin-top: 35rpx;
				display: flex;
				flex-direction: column;
				.ha {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 25rpx;
					.left {
						display: flex;
						.tx {
							width: 68rpx;
							height: 68rpx;
							image{
								width: 68rpx;
								height: 68rpx;	
							}
						}
						.userNameBox {
							margin-left: 27rpx;
							display: flex;
							flex-direction: column;
							.userName {
								margin-bottom: 10rpx;
								font-size: 26rpx;
								font-family: PingFang SC;
								font-weight: 500;
								color: #1A1A1A;
							}
							.xx {
								display: flex;
								image {
									margin-right: 18rpx;
									width: 16rpx;
									height: 16rpx;
								}
							}
						}
						
					}
					.right {
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #999999;
					}
				}
				.yhpl {
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #666666;
				}
			}
		}
	}
</style>
