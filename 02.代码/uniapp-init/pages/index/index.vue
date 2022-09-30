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
		
		<scroll-view 
		class="navScroll" 
		scroll-x="true"
		v-if="indexData.kingKongModule"
		>
			<view 
			class="navItem" 
			:class="{
				active:navIndex===-1
			}"
			@click="changeNavIndex(-1)"
			>
				推荐
			</view>
			
			<!-- Vue2中,v-for优先级更高,Vue3中,v-if优先级更高-->
			<view 
			class="navItem" 
			v-for="(item,index) in indexData.kingKongModule.kingKongList"
			:class="{
				active:navIndex===index
			}"
			:key="item.L1Id"
			@click="changeNavIndex(index)"
			>
				{{item.text}}
			</view>
		</scroll-view>
		
		<scroll-view class="contentScroll" scroll-y="true">
			<Recommend v-if="navIndex===-1" :indexData="indexData"></Recommend>
			<CateList v-else :navIndex="navIndex"></CateList>
		</scroll-view>
	</view>
</template>

<script>
	import Recommend from '../../components/Recommend/Recommend.vue';
	import CateList from '../../components/CateList/CateList.vue';
	import {mapActions} from 'vuex';
	export default {
		data() {
			return {
				navIndex:-1,
				// indexData:{}
			}
		},
		async created(){
			// console.log('created')
			/*
				uniapp中生命周期的选择
					uniapp同时支持小程序以及Vue的生命周期
					
				核心语法全部使用Vue的
			*/
		   // uni.request({
			  //  url:"http://localhost:3001/getIndexData",
			  //  // url:"/api/getIndexData",
			  //  success:(res)=>{
				 //   // console.log('res',res)
				 //   this.indexData = res.data;
			  //  }
		   // })
		   
		   // const result = await this.$myAxios("/getIndexData");
		   // this.indexData = result;
		   
		   // 第一种触发方式
		   // this.$store.dispatch('getIndexData');
		   
		   // 第二,四,五种触发方式
		   this.getIndexData();
		   
		   // 第三种触发方式
		   // this["home/getIndexData"]()
		   
		   
		},
		// onLoad(){
		// 	console.log('onLoad')
		// },
		// mounted(){
		// 	console.log('mounted')
		// },
		methods:{
			changeNavIndex(index){
				this.navIndex = index;
			},
			
			// 第二种写法
			// ...mapActions(["getIndexData"]),
			// getIndexData(){
			// 	this.$store.dispatch('getIndexData');
			// }
			
			// 第三种写法
			// ...mapActions(["home/getIndexData"]),
			
			// 第四种写法
			// ...mapActions("home",["getIndexData"]),
			
			// 第五种写法
			...mapActions("home",{
				getIndexData:"getIndexData"
			}),
			// ...mapActions("cart",["getIndexData"]),
		},
		computed:{
			indexData(){
				return this.$store.state.home.indexData;
			}
		},
		watch:{},
		components:{
			Recommend,
			CateList
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
	.navScroll
		white-space nowrap
		.navItem
			display inline-block
			width 140upx
			height 80upx
			line-height 80upx
			text-align center
			font-size 28upx
			&.active
				border-bottom 4upx solid red
	.contentScroll
		// 小程序height=100vh - header高度 - nav高度
		// 浏览器height=100vh - header高度 - nav高度 - 导航栏高度 - tabBar高度
		// height calc( 100vh - 80upx - 84upx - 88upx - 100upx )
		// /* #ifdef MP */
		// height calc( 100vh - 80upx - 84upx)
		// /* #endif */
		// /* #ifdef H5 */
		// height calc( 100vh - 80upx - 84upx - 88upx - 100upx )
		// /* #endif */
		height calc( 100vh - 80upx - 84upx - var(--window-top) - var(--window-bottom) )
</style>
