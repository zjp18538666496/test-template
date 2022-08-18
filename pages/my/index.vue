<template>
	<view class="index">
		<UserInfo></UserInfo>
		<CommonFunctions></CommonFunctions>
		<OtherFunctions></OtherFunctions>
	</view>
</template>

<script setup>
	import UserInfo from "./components/UserInfo.vue"
	import CommonFunctions from "./components/CommonFunctions.vue"
	import OtherFunctions from "./components/OtherFunctions.vue"
</script>

<style lang="scss">
	.index {
		.box-container {
			width: 630rpx;
			background: #FFFEFE;
			border-radius: 18px;
			padding: 30rpx 30rpx 10rpx 30rpx;
			margin: 30rpx auto 0;
			.title {
				color: #1A1A1A;
				font-size: 30rpx;
				font-weight: bold;
			}
			.action-container {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				.one-button {
					display: flex;
					width: 25%;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					margin-top: 30rpx;
					margin-bottom: 20rpx;
					height: 100rpx;
					.button-text {
						color: #333333;
						font-size: 24rpx;
					}
				}
			}
		}
	}
</style>
