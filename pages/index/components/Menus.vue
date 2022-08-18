<template>
	<view class="Menus-container">
		<view class="menus">
			<navigator
				class="one-box"
				hover-class="none"
				v-for="item in menusList"
				:key="item.name"
				:url="item.url"
			>
				<view class="outside">
					<image
						class="icon"
						:src="item.src"
					></image>
					<view class="text-name">{{ item.name }}</view>
				</view>
			</navigator>	
		</view>
		<view class="express">
			
		</view>
	</view>
</template>

<script setup>
	const menusList = [
		{ name: "市场需求", src: "/static/logo.png", url: "" },
		{ name: "展会活动", src: "/static/logo.png", url: "" },
		{ name: "企业资讯", src: "/static/logo.png", url: "" },
		{ name: "智能匹配", src: "/static/logo.png", url: "" }
	]
</script>

<style lang="scss">
	.Menus-container {
		.menus {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 650rpx;
			margin: 0 auto;
			.one-box {
				.outside {
					width: 100rpx;
					.icon {
						width: 60rpx;
						height: 65rpx;
						display: block;
						margin: 0 auto 35rpx;
						text-align: center;
					}
					.text-name {
						width: 100%;
						color: #4D4D4D;
						font-size: 24rpx;
						text-align: center;
					}
				}
			}
		}
		.express {
			width: 690rpx;
			height: 50rpx;
			background-color: #E6ECFF;
			border-radius: 8px;
			margin: 48rpx auto 67rpx;
		}
	}
</style>