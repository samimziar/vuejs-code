import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import firstpage from './components/pages/MyFirstPage'

const routes = [
	{
		path:'/my-new-vue-route',
		component: firstpage
	}

]

export default  new VueRouter({
	mode: 'history',
	routes
})