import config from './config.js';
/*
	需求:根据代码运行环境,动态设置请求的基础路径
		如果是小程序环境,那么基础路径就是http://localhost:3001
		如果是浏览器环境,那么基础路径就是/api

	拆解:
		1.根据代码运行环境
			通过uni.getSystemInfoSync方法可以获取到执行当前代码的运行环境
		2.动态设置请求的基础路径
*/
// const {platform} = uni.getSystemInfoSync();
// console.log('result',result)

// let baseUrl = config[platform];
// if(platform==="devtools"){
// 	// 能进入这里说明当前代码是在小程序环境下运行的
// 	baseUrl = "http://localhost:3001";
// }else if(platform==="ios"){
// 	// 能进入这里说明当前代码是在ios的浏览器环境下运行的
// 	baseUrl = "/api";
// }else if(platform==="android"){
// 	// 能进入这里说明当前代码是在android的浏览器环境下运行的
// 	baseUrl = "/api";
// }

let baseUrl;

// #ifdef MP-WEIXIN
baseUrl = "http://localhost:3001";
// #endif

// #ifdef H5
baseUrl = "/api";
// #endif

function myAxios(url,data={},method="GET") {
	return new Promise((resolve,reject) => {
		uni.request({
			// url: "http://localhost:3001/getIndexData",
			// url:"/api/getIndexData",
			url:baseUrl + url,
			data,
			method,
			success: (res) => {
				// console.log('res',res)
				resolve(res.data);
			}
		})
	})
}

export default myAxios
