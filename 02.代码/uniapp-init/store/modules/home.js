// import myAxios from '../../utils/myAxios.js';
// import {SETINDEXDATA} from '../mutation-types.js';
const state = {
	indexData: {}
};

const mutations = {
	// [SETINDEXDATA](state,data){
	// 	// console.log('SETINDEXDATA',data)
	// 	state.indexData = data;
	// },
	// 中间有1000行代码
	SETINDEXDATA(state,data){
		// console.log('SETINDEXDATA',data)
		state.indexData = data;
	}
};

const actions = {
	async getIndexData(context) {
		// action中的this指向当前的store对象
		// action的第一个参数是store对象的浅拷贝版本,是一个context对象
		console.log('getIndexData',context)
		const result = await this._vm.$myAxios("/getIndexData");
		// console.log(result)
		
		// 仅从技术角度来说,action可以直接修改state中的数据
		// 问题:为什么要有mutation,不直接使用action修改state数据
		// 原因:与Vue devtool有关,因为调试工具只会记录触发了多少个mutation,不会记录action的触发
		// context.state.indexData = result;
		context.commit('SETINDEXDATA',result);
	}
};

const getters = {};


export default {
	namespaced:true,
	state,
	mutations,
	actions,
	getters,
}
