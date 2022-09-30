import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home.js';
import cart from './modules/cart.js';

// Vuex可以使用use语法,所以他算是Vue的扩展插件库
Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		home,
		cart
	}
})


// createStore()