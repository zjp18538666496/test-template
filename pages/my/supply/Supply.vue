<template>
	<view>
		<Title Title="发布"></Title>
		<view class="card">
			<view class="requirements">
				供应信息
			</view>
			<view class="input1">
				<view-text class="text1">供应标题</view-text>
				<input type="text" placeholder-style="font-size:28rpx;color:#ACACAC;" placeholder="请填写供应标题">
			</view>
			<view class="input2">
				<view-text class="text1">供应描述</view-text>
				<textarea type="textarea" placeholder-style="font-size:28rpx;color:#ACACAC;" placeholder="请填写供应描述"></textarea>
			</view>
		</view>
		<view class="card">
			<view class="requirements">
				供应信息
			</view>
			<view class="input1">
				<view-text class="text1">工艺</view-text>
				<input placeholder-style="font-size:28rpx;color:#ACACAC;" type="text" placeholder="请填写供应标题">
			</view>
			<view class="input1">
				<view-text class="text1">材料</view-text>
				<input placeholder-style="font-size:28rpx;color:#ACACAC;" type="text" placeholder="请填写供应标题">
			</view>
			<view class="input1">
				<view-text class="text1">型号</view-text>
				<input placeholder-style="font-size:28rpx;color:#ACACAC;" type="text" placeholder="请填写供应标题">
			</view>
		</view>
		<view class="card">
			<view class="requirements">
				实物参照
			</view>
			<view class="imgBox">
				<image class="detailsImg" src="/static/tc2.png"></image>
				<image class="detailsImg" src="/static/tc3.png"></image>
				<image class="detailsImg" src="/static/tc4.png"></image>
				<image class="detailsImg" src="/static/tc2.png"></image>
				<image class="detailsImg" src="/static/tc3.png"></image>
				<image class="detailsImg" src="/static/add.png"></image>
			</view>
		</view>
		<view @click="open" class="btn">
			立即发布
		</view>
	</view>
</template>

<script>
	import Title from '@/components/Title.vue'; //二级菜单标题
	export default {
		data() {
			return {

			}
		},
		components: {
			Title
		},
		methods: {
			open(){
				uni.navigateTo({
					url:"/pages/my/supplyFish/SupplyFish"
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

		.input1 {
			display: flex;
			align-items: center;
			margin-bottom: 40rpx;

			.text1 {
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
				margin-right: 60rpx;
			}

			input {
				width: 435rpx;
				height: 58rpx;
				padding-left: 20rpx;
				background: #FAFAFA;
				border-radius: 8px;
			}
		}

		.input2 {
			display: flex;
			align-items: flex-start;

			.text1 {
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
				margin-right: 60rpx;
			}

			input ,textarea{
				width: 435rpx;
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
			image {
				margin-left: 10rpx;
				margin-bottom: 10rpx;
				width: 198rpx;
				height: 198rpx;
				background: #FAFAFA;
				border-radius: 18rpx;
			}
		}
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
</style>
