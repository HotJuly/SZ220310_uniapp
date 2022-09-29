<template>
	<!-- uniapp中,结构可以使用html标签,也可以使用小程序组件,不过对小程序的组件兼容性更好 -->
	<view class="indexContainer">
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<view class="search">
				<view class="iconfont icon-sousuo"></view>
				<input class="searchInput" placeholder="搜索商品" placeholder-class="placeholder" type="text" value="" />
			</view>
			<button class="username">七月</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'Hello888'
			}
		},
		onLoad(){
			
		},
		methods:{
			
		}
}
</script>

<style lang="stylus">
// uniapp支持小程序的rpx适配单位
// tab向后缩进,shift+tab向前缩进
.indexContainer
	.header
		display flex
		// 如果没有border和背景颜色,就可以使用padding替代marigin
		// margin-top 20upx
		padding-top 20upx
		align-items  center
		.logo
			width 118upx
			height 40upx
			margin 0 20upx
		.search
			position relative
			height 60upx
			background-color  #C0C0C0
			flex-grow  1
			border-radius  10upx
			padding-left 60upx
			.iconfont
				position absolute
				left 20upx
				top 50%
				transform translateY(-50%)
			.searchInput
				height 100%
				.placeholder
					text-align center
					font-size 24upx
					text-indent -40upx
		.username
			width 140upx
			height 60upx
			font-size 24upx
			color red
			margin 0 20upx
</style>
