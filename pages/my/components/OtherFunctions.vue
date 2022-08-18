<template>
	<view class="OtherFunctions box-container">
		<view class="title">其他功能</view>
		<view class="action-container">
			<view 
				class="one-button"
				v-for="item in menusList"
				:key="item.name"
			>
				<image
					:class="item.className"
					src="/static/logo.png"
				></image>
				<view class="button-text">{{ item.name }}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const menusList = [
		{ name: "企业认证", src: "", className: "icon1", url: "" },
		{ name: "联系客服", src: "", className: "icon2", url: "" },
		{ name: "问题反馈", src: "", className: "icon3", url: "" },
		{ name: "我的发票", src: "", className: "icon4", url: "" },
		{ name: "交易举报", src: "", className: "icon5", url: "" },
		{ name: "我的活动", src: "", className: "icon6", url: "" },
		{ name: "我的成交", src: "", className: "icon7", url: "" },
		{ name: "常用功能", src: "", className: "icon8", url: "" },
	]
</script>

<style lang="scss">
	.OtherFunctions {
		.icon1 {
			width: 42rpx;
			height: 48rpx;
		}
		.icon2 {
			width: 42rpx;
			height: 49rpx;
		}
		.icon3 {
			width: 47rpx;
			height: 47rpx;
		}
		.icon4 {
			width: 41rpx;
			height: 44rpx;
		}
		.icon5 {
			width: 47rpx;
			height: 47rpx;
		}
		.icon6 {
			width: 47rpx;
			height: 47rpx;
		}
		.icon7 {
			width: 47rpx;
			height: 47rpx;
		}
		.icon8 {
			width: 43rpx;
			height: 48rpx;
		}
	}
</style>