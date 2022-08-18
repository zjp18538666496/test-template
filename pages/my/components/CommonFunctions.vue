<template>
	<view class="CommonFunctions box-container">
		<view class="title">常用功能</view>
		<view class="action-container">
			<view @click="openPage(index)" class="one-button" v-for="(item,index) in menusList" :key="index">
				<image :class="item.className" src="/static/logo.png"></image>
				<view class="button-text">{{ item.name }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menusList: [{
						name: "我的发布",
						src: "",
						className: "icon1",
						url: "/pages/my/release/Release"
					},
					{
						name: "我的收藏",
						src: "",
						className: "icon2",
						url: ""
					},
					{
						name: "我的关注",
						src: "",
						className: "icon3",
						url: ""
					},
					{
						name: "公司主页",
						src: "",
						className: "icon4",
						url: "/pages/my/companyHomepage/CompanyHomepage"
					}
				]
			}
		},
		components: {},
		methods: {
			openPage(index) {
				uni.navigateTo({
					url: "../.." + this.menusList[index].url,
				});
			}
		}
	}
</script>
<style lang="scss">
	.CommonFunctions {
		.icon1 {
			width: 46rpx;
			height: 48rpx;
		}

		.icon2 {
			width: 42rpx;
			height: 48rpx;
		}

		.icon3 {
			width: 51rpx;
			height: 49rpx;
		}

		.icon4 {
			width: 45rpx;
			height: 49rpx;
		}
	}
</style>
