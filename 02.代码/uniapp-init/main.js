import App from './App'
import Vue from 'vue'
import store from './store/index.js';

import myAxios from 'utils/myAxios.js';

Vue.config.productionTip = false

//mp->mini program type->类型
// App组件代表整个小程序或者整个应用
App.mpType = 'app'

Vue.prototype.$myAxios = myAxios;

const app = new Vue({
    ...App,
	store
	// onLaunch: function() {
	// 	console.log('App Launch')
	// },
	// onShow: function() {
	// 	console.log('App Show')
	// },
	// onHide: function() {
	// 	console.log('App Hide')
	// }
})
app.$mount()
