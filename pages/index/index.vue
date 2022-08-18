<template>
	<view class="index">
		<SearchContainer></SearchContainer>
		<Menus></Menus>
		<QuoteList></QuoteList>
	</view>
</template>

<script setup>
	import SearchContainer from "./components/SearchContainer.vue"
	import Menus from "./components/Menus.vue"
	import QuoteList from "./components/QuoteList.vue"
</script>

<style>
	.index {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #F7F8FC;
	}
</style>
