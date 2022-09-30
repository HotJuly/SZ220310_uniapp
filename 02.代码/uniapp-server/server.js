// 1.引入express
// const express = require('express');

// 2.调用express生成服务器应用实例对象
// const app = express();

// 4.注册路由
// 回调函数一共具有三个参数
// 1.request->请求报文对象
// 2.response->响应报文对象
// 3.next->数据类型:函数,用处:用于执行下一个中间件函数
// 功能:1.可以统一检查所有请求是否具有token数据	2.可以统一修改请求头和响应头中的内容
// app.use(express.static(......))
// app.get("/getData",function(request,response,next){
// 	response.send('请求成功')
// })

// 3.将内存中服务器应用实例对象运行到电脑的某个端口上,并实现监听操作
// app.listen('3001',function(){
// 	console.log('服务器启动成功')
// })

// 1.引入相关npm包
const Koa = require('koa');
const KoaRouter = require('koa-router');

// 2.创建服务器应用实例对象
const app = new Koa();

// 4.注册路由
// 4.1创建路由器对象
const router = new KoaRouter();

// 4.2声明使用中间件函数
app.use(router.routes());

// 4.3注入相关路由
router.get("/test",function(ctx,next){
	// ctx对象相当于是request对象+response对象
	
	// ctx.body=需要返回的数据
	ctx.body="请求test接口成功"
})

// 用于返回首页推荐区域相关数据
const indexData = require('./datas/index.json');
router.get("/getIndexData",function(ctx,next){
	ctx.body=indexData
})

// 用于返回分类页面相关数据
const categoryDatas = require('./datas/categoryDatas.json');
router.get("/getCategoryDatas",function(ctx,next){
	ctx.body=categoryDatas
})


// 3.将服务器应用实例对象运行在电脑的某个端口上
app.listen('3001',function(){
	console.log('服务器启动成功')
})
