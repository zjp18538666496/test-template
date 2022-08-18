<template>
	<view class="FilterPopup-container">
		<uni-popup ref="popup" type="bottom" :mask-click="false">
			<view class="popup-container">
				<view class="title">
					<view>筛选条件</view>
					<image
						class="close-icon"
						src=""
						@click="close"
					></image>
				</view>
				<view class="scroll-container">
					<view
						v-for="item in 3"
						:key="item"
					>
						<view class="select-title">行业类别</view>
						<view class="select-container">
							<view 
								class="one-select"
								v-for="label in 5"
								:key="label"
							>制造业</view>
						</view>
					</view>
				</view>
				<view class="button-area">
					<view class="reset">重置</view>
					<view class="ok">确定</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import { defineExpose, ref } from "vue"
	
	const popup = ref()
	
	const open = () => {
		popup.value.open()
	}
	
	const close = () => {
		popup.value.close()
	}
	
	defineExpose({
		open,
		close
	})
</script>

<style lang="scss">
	.FilterPopup-container {
		.popup-container {
			width: 100vw;
			background-color: #FFFFFF;
			padding: 40rpx 30rpx 0 30rpx;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			.title {
				color: #1A1A1A;
				font-size: 32rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10rpx;
				.close-icon {
					width: 20rpx;
					height: 20rpx;
					background-color: #1A1A1A;
				}
			}
			.scroll-container {
				height: 800rpx;
				overflow-y: scroll;
				.select-title {
					color: #333333;
					font-size: 28rpx;
					margin: 70rpx 0 36rpx;
				}
				.select-container {
					display: flex;
					flex-wrap: wrap;
					.one-select {
						width: 214rpx;
						height: 82rpx;
						background: #F6F7F9;
						border-radius: 12rpx;
						text-align: center;
						line-height: 82rpx;
						color: #4D4D4D;
						font-size: 26rpx;
						margin-right: 24rpx;
						margin-bottom: 24rpx;
					}
					.one-select:nth-child(3n) {
						margin-right: 0;
					}
				}
			}
			.button-area {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 20rpx 0;
				.reset {
					width: 226rpx;
					height: 92rpx;
					background: #E6ECFF;
					border-radius: 46rpx;
					text-align: center;
					line-height: 92rpx;
					font-size: 30rpx;
					color: #2858FF;
				}
				.ok {
					width: 442rpx;
					height: 92rpx;
					background: #2858FF;
					border-radius: 46rpx;
					text-align: center;
					line-height: 92rpx;
					font-size: 30rpx;
					color: #FFFFFF;
				}
			}
		}
	}
</style>