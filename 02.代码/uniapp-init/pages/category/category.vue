<template>
	<view class="categoryContainer">
		<view class="header">
			<view class="search_div">
				搜索商品
			</view>
		</view>
		<view class="content">
			<view class="leftContainer">
				<scroll-view scroll-y="true" class="navScroll">
					<view 
					class="navItem"
					:class="{
						active:currentIndex===index
					}"
					v-for="(item,index) in categoryNames"
					:key="item"
					@click="changeCurrentIndex(index)"
					>{{item}}</view>
				</scroll-view>
			</view>
			<view class="rightContainer">
				<scroll-view scroll-y="true" class="contentScroll">
					<view class="scrollHeader">
						<image class="headerImg" :src="categoryObj.imgUrl" mode=""></image>
					</view>
					<view 
					class="contentItem"
					v-for="item in categoryObj.subCateList"
					:key="item.id"
					>
						<image :src="item.wapBannerUrl" mode=""></image>
						<text>{{item.name}}</text>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categoryDatas:[],
				currentIndex:0
			};
		},
		async created(){
			const result = await this.$myAxios('/getCategoryDatas');
			this.categoryDatas = result;
		},
		computed:{
			categoryNames(){
				return this.categoryDatas.map((category)=>{
					return category.name
				})
			},
			categoryObj(){
				return this.categoryDatas[this.currentIndex]
			}
			/*
				面试题:请问watch和computed的区别?
					相同点
						1.数据结构都是对象中嵌套函数
						2.当监视的响应式数据发生变化的时候,对应的函数会重新执行
						
					不同点
						1.使用场景不同
							computed
								如果需要一个数据,可是手上没有该数据,
									但是可以根据现有的数据计算得到
									
								例如:购物车中的总价和总数等效果
							
							watch
								如果当某个数据发生变化的时候,我们需要做一些事情(代码)
								
								例如:监视地址栏中keyword参数的内容,如果发生变化,就重新发送请求
									$route.query.keyword
									
							总结:computed更注重于结果,watch更注重于过程
							
							
			
			
			*/
		},
		watch:{
			categoryDatas(){
				console.log('categoryDatas')
			}
		},
		methods:{
			changeCurrentIndex(index){
				this.currentIndex= index;
			}
		}
	}
</script>

<style lang="stylus">
.categoryContainer
	height 100%
	.header
		height 60upx
		padding 10upx 0
		border-bottom 2upx solid #eee
		.search_div
			height 60upx
			background #eee
			width 704upx
			margin 0 auto
			border-radius 10upx
			line-height 60upx
			text-align center
			font-size 28upx
	.content
		display flex
		height calc(100vh - 82upx)
		background #eee
		.leftContainer
			width 20%
			height 100%
			font-size 26upx
			text-align center
			border-right 1upx solid #eee
			//border-box 称为怪异盒模型 , 又称为IE盒模型,内缩盒模型,布局占位宽度 width(content+padding+border)+margin
			//content-box 标准盒模型,布局占位宽度 width+padding+border+margin
			box-sizing border-box  
			.navScroll
				height 100%
				background-color white
				.navItem
					position relative
					height 80upx
					line-height 80upx
					&.active::after
						position absolute
						content ''
						top 10upx
						left 4upx
						width 2upx
						height 60upx
						background-color #BB2C08
		.rightContainer
			width 80%
			height 100%
			background-color white
			.contentScroll
				width 100%
				height 100%
				.scrollHeader
					width 100%
					.headerImg
						display block
						width 520upx
						height 190upx
						margin 20upx auto
				.contentItem
					display inline-flex
					flex-direction column
					align-items center
					width 33.333% 
					image
						width 160upx
						height 144upx
					text
						font-size 26upx
</style>
