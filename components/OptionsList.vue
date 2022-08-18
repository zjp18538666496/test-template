<template>
	<view class="propertyBox" v-for="(item,index) in personalInformationList" :key="index">
		<view class="personalInformation" @click="dynamicEvents(item.fn)">
			<view class="title">{{ item.name }}</view>
			<view class="detailsBox">
				<view-text>{{ item.text }}</view-text>
				<image class="detailsImg" :src="item.src"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
		  personalInformationList:[]
		},
		data() {
			return {
			}
		},
		methods: {
			dynamicEvents(fn){
				this[fn]();
			},
			accountSecurity(){
				uni.navigateTo({
					url: '../../my/accountSecurity/AccountSecurity',
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.propertyBox {
		display: flex;
		border-bottom: 2rpx solid #F5F5F5;
		background-color: #fff;
		padding: 0 30rpx;
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
</style>
