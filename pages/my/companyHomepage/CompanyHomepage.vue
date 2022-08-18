<!-- 公司主页 -->
<template>
	<view class="companyHomepage">
		<Title Title="企业信息"></Title>
		<view  class="optionsList">
			<OptionsList :personalInformationList="list1"></OptionsList>
		</view>
		<view class="optionsList">
			<OptionsList :personalInformationList="list2"></OptionsList>
		</view>
		<view class="optionsList">
			<OptionsList :personalInformationList="list3"></OptionsList>
		</view>
		<view class="">
				<button class="btnSave">保存</button>
		</view>
	</view>
</template>

<script>
	import Title from '@/components/Title.vue'; //二级菜单标题
	import OptionsList from '@/components/OptionsList.vue'; //选项列表
	export default {
		data() {
			return {
				list1: [{
					name: "主题类型",
					src: "/static/rightClick.png",
					className: "",
					url: "",
					text: "未完善"
				}],
				list2: [{
					name: "企业名称",
					src: "/static/rightClick.png",
					className: "",
					url: "",
					text: "未完善"
				},
				{
					name: "信用代码",
					src: "/static/rightClick.png",
					className: "",
					url: "",
					text: "未完善"
				},
				{
					name: "法人姓名",
					src: "/static/rightClick.png",
					className: "",
					url: "",
					text: "未完善"
				},
				{
					name: "法人身份证",
					src: "/static/rightClick.png",
					className: "",
					url: "",
					text: "未完善"
				}],
				list3: [{
					name: "工艺",
					src: "/static/rightClick.png",
					className: "",
					url: "",
					text: "未完善"
				},
				{
					name: "材料",
					src: "/static/rightClick.png",
					className: "",
					url: "",
					text: "未完善"
				},
				{
					name: "型号",
					src: "/static/rightClick.png",
					className: "",
					url: "",
					text: "未完善"
				},
				{
					name: "企业规模",
					src: "/static/rightClick.png",
					className: "",
					url: "",
					text: "未完善"
				},
				{
					name: "生产能",
					src: "/static/rightClick.png",
					className: "",
					url: "",
					text: "未完善"
				},
				{
					name: "地区",
					src: "/static/rightClick.png",
					className: "",
					url: "",
					text: "未完善"
				}],
				

			}
		},
		components: {
			Title,
			OptionsList
		},
		methods: {

		}
	}
</script>

<style lang="scss" >
	body {
		padding-top: 70rpx;
		padding-bottom: 20rpx;
	}
	.companyHomepage {
		
		background: #F8F8FA;
		.optionsList {
			margin-bottom: 20rpx;
		}
		.btnSave {
			color: #fff;
			width: 690rpx;
			height: 92rpx;
			background: #2858FF;
			border-radius: 46rpx;
		}
	}
</style>
