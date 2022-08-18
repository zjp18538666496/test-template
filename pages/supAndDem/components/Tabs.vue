<template>
	<view class="TabsContainer">
		<view class="one-tab">
			<view>综合排序</view>
			<image
				class="arrow"
				src=""
			></image>
		</view>
		<view 
			class="one-tab"
			@click="open"
		>高级筛选</view>
	</view>
	<FilterPopup
		ref="FilterPopupRef"
	></FilterPopup>
</template>

<script setup>
	import FilterPopup from "./FilterPopup.vue"
	import { ref } from "vue"
	
	const FilterPopupRef = ref()
	
	const open = () => {
		FilterPopupRef.value.open()
	}
</script>

<style lang="scss">
	.TabsContainer {
		width: 690rpx;
		margin: 75rpx auto 30rpx;
		display: flex;
		justify-content: space-around;
		.one-tab {
			color: #1A1A1A;
			font-size: 32rpx;
			font-weight: bold;
			width: 130rpx;
			.arrow {
				width: 12px;
				height: 7px;
			}
		}
	}
</style>