<template>
	<view>
		<view class="requirements">
			<view-text class="text1">{{title.text1}}</view-text>
			<view-text v-if="title.is" class="text2">{{title.text2}}</view-text>
		</view>
		<view class="msgBox">
			<view class="msg" v-for="(item,index) in msgList" :key="index">
				<view-text class="text1">{{item.title}}：</view-text>
				<view-text class="text2">{{item.msg}}</view-text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "RequirementsInformation",
		data() {
			return {

			};
		},
		props: {
			msgList: [],
			title: {
				text1: "",
				text2: "",
		 }
		}

	}
</script>

<style lang="scss">
	.requirements {
		display: flex;
		justify-content: space-between;
		margin-bottom: 40rpx;

		.text1 {
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #1A1A1A;
		}

		.text2 {
			padding: 0 10rpx;
			background: #E6ECFF;
			border-radius: 5px;
			font-size: 22rpx;
			line-height: 44rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #2858FF;
		}
	}

	.msgBox {
		.msg {
			display: flex;
			margin: 26rpx 0;

			.text1 {
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}

			.text2 {
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #666;
			}
		}
	}
</style>
