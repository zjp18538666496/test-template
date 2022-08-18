<template>
	<view class="index">
		<SearchContainer></SearchContainer>
		<Tabs></Tabs>
		<DataList></DataList>
	</view>
</template>

<script setup>
	import SearchContainer from "./components/SearchContainer.vue"
	import Tabs from "./components/Tabs.vue"
	import DataList from "./components/DataList.vue"
	import { onMounted, ref } from "vue"
</script>

<style lang="scss">
	.index {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #F7F8FC;
		min-height: 100vh;
	}
</style>
