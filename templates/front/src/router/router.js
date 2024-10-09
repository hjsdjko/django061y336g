import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import zhihuanzhanghuList from '../pages/zhihuanzhanghu/list'
import zhihuanzhanghuDetail from '../pages/zhihuanzhanghu/detail'
import zhihuanzhanghuAdd from '../pages/zhihuanzhanghu/add'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import shangpinleixingList from '../pages/shangpinleixing/list'
import shangpinleixingDetail from '../pages/shangpinleixing/detail'
import shangpinleixingAdd from '../pages/shangpinleixing/add'
import xianzhishangpinList from '../pages/xianzhishangpin/list'
import xianzhishangpinDetail from '../pages/xianzhishangpin/detail'
import xianzhishangpinAdd from '../pages/xianzhishangpin/add'
import zhihuandingdanList from '../pages/zhihuandingdan/list'
import zhihuandingdanDetail from '../pages/zhihuandingdan/detail'
import zhihuandingdanAdd from '../pages/zhihuandingdan/add'
import ershoushangpinList from '../pages/ershoushangpin/list'
import ershoushangpinDetail from '../pages/ershoushangpin/detail'
import ershoushangpinAdd from '../pages/ershoushangpin/add'
import goumaidingdanList from '../pages/goumaidingdan/list'
import goumaidingdanDetail from '../pages/goumaidingdan/detail'
import goumaidingdanAdd from '../pages/goumaidingdan/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussxianzhishangpinList from '../pages/discussxianzhishangpin/list'
import discussxianzhishangpinDetail from '../pages/discussxianzhishangpin/detail'
import discussxianzhishangpinAdd from '../pages/discussxianzhishangpin/add'
import discussershoushangpinList from '../pages/discussershoushangpin/list'
import discussershoushangpinDetail from '../pages/discussershoushangpin/detail'
import discussershoushangpinAdd from '../pages/discussershoushangpin/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'zhihuanzhanghu',
					component: zhihuanzhanghuList
				},
				{
					path: 'zhihuanzhanghuDetail',
					component: zhihuanzhanghuDetail
				},
				{
					path: 'zhihuanzhanghuAdd',
					component: zhihuanzhanghuAdd
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'shangpinleixing',
					component: shangpinleixingList
				},
				{
					path: 'shangpinleixingDetail',
					component: shangpinleixingDetail
				},
				{
					path: 'shangpinleixingAdd',
					component: shangpinleixingAdd
				},
				{
					path: 'xianzhishangpin',
					component: xianzhishangpinList
				},
				{
					path: 'xianzhishangpinDetail',
					component: xianzhishangpinDetail
				},
				{
					path: 'xianzhishangpinAdd',
					component: xianzhishangpinAdd
				},
				{
					path: 'zhihuandingdan',
					component: zhihuandingdanList
				},
				{
					path: 'zhihuandingdanDetail',
					component: zhihuandingdanDetail
				},
				{
					path: 'zhihuandingdanAdd',
					component: zhihuandingdanAdd
				},
				{
					path: 'ershoushangpin',
					component: ershoushangpinList
				},
				{
					path: 'ershoushangpinDetail',
					component: ershoushangpinDetail
				},
				{
					path: 'ershoushangpinAdd',
					component: ershoushangpinAdd
				},
				{
					path: 'goumaidingdan',
					component: goumaidingdanList
				},
				{
					path: 'goumaidingdanDetail',
					component: goumaidingdanDetail
				},
				{
					path: 'goumaidingdanAdd',
					component: goumaidingdanAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussxianzhishangpin',
					component: discussxianzhishangpinList
				},
				{
					path: 'discussxianzhishangpinDetail',
					component: discussxianzhishangpinDetail
				},
				{
					path: 'discussxianzhishangpinAdd',
					component: discussxianzhishangpinAdd
				},
				{
					path: 'discussershoushangpin',
					component: discussershoushangpinList
				},
				{
					path: 'discussershoushangpinDetail',
					component: discussershoushangpinDetail
				},
				{
					path: 'discussershoushangpinAdd',
					component: discussershoushangpinAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
