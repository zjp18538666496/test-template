<!-- 账号安全 -->
<template>
	<view class="accountSecurity">
		<Title Title="账户与安全"></Title>
		<view class="optionsList">
			<OptionsList :personalInformationList="List1"></OptionsList>
		</view>
		<view class="optionsList">
			<OptionsList :personalInformationList="List2"></OptionsList>
		</view>
	</view>
</template>

<script>
	import Title from '@/components/Title.vue'; //二级菜单标题
	import OptionsList from '@/components/OptionsList.vue'; //选项列表
	export default {
		data() {
			return {
				List1: [{
						name: "修改绑定手机号",
						src: "/static/rightClick.png",
						className: "",
						url: "",
						text: "18888888888"
					},
					{
						name: "修改登录密码",
						src: "/static/rightClick.png",
						className: "",
						url: "",
						text: ""
					},
					{
						name: "修改绑定邮箱",
						src: "/static/rightClick.png",
						className: "",
						url: "",
						text: ""
					},
					{
						name: "注销账户",
						src: "/static/rightClick.png",
						className: "",
						url: "",
						text: ""
					}
				],
				List2: [{
						name: "实名认证",
						src: "/static/rightClick.png",
						className: "",
						url: "",
						text: "未实名"
					},

				]
			}
		},
		components: {
			Title,
			OptionsList
		},
		methods: {}
	}
</script>


<style lang="scss">
	body {
		padding-top: 70rpx;
	}

	.accountSecurity {
		.optionsList {
			margin-bottom: 20rpx;
		}
	}
</style>
