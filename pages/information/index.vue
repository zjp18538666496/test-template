<template>
	<view class="index">
		<GraBackground></GraBackground>
		<view class="navigationBarTitleText">消息</view>
		<ButtonArea></ButtonArea>
		<InfoList></InfoList>
	</view>
</template>

<script setup>
	import ButtonArea from "./components/ButtonArea.vue"
	import InfoList from "./components/InfoList.vue"
	import GraBackground from "@/components/GraBackground.vue"
</script>

<style lang="scss">
	.index {
		height: 100vh;
		background-color: #F7F8FC;
		display: flex;
		flex-direction: column;
		.navigationBarTitleText {
			color: #1A1A1A;
			font-size: 38rpx;
			font-weight: bold;
			text-align: center;
			height: 176rpx;
			line-height: 150rpx;
			background-color: rgba(0, 0, 0, 0);
			z-index: 1;
			position: relative
		}
	}
</style>
