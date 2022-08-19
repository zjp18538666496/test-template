<template>
	<view class="transactionBox">
		<Title Title="我的成交"></Title>
		<ProductsList class="productsList" :list="list1"></ProductsList>
	</view>
</template>

<script>
	import Title from '@/components/Title.vue'; //二级菜单标题
	import ProductsList from '@/components/ProductsList.vue'
	export default {
		data() {
			return {
				list1:[
					{
						text1:"大量采购手机芯片",
						text2:"企业需大量采购手机芯片，量...",
						text3:"企业推荐",
						text5:"3499",
						url:"/my/transactionDemandInformation/TransactionDemandInformation"
					},
					{
						text1:"大量采购手机芯片",
						text2:"企业需大量采购手机芯片，量...",
						text3:"官方推荐",
						text5:"3499",
						url:"/my/transactionDemandInformation/TransactionDemandInformation"
					},
					{
						text1:"大量采购手机芯片",
						text2:"企业需大量采购手机芯片，量...",
						text3:"企业推荐",
						text5:"3499",
						url:"/my/transactionDemandInformation/TransactionDemandInformation"
					},
					{
						text1:"大量采购手机芯片",
						text2:"企业需大量采购手机芯片，量...",
						text3:"企业推荐",
						text5:"3499",
						url:"/my/transactionDemandInformation/TransactionDemandInformation"
					}
				]
			};
		},
		components: {
			Title,
			ProductsList
		},
		
	}
</script>

<style lang="scss">
	body{
		padding-top: 70rpx;
		background-color: #F8F7FE;
		
	}
	.productsList {
		margin-top: 40rpx;
	}
</style>
