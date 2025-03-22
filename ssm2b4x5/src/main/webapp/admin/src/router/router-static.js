import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import discussyonghuxiangce from '@/views/modules/discussyonghuxiangce/list'
    import yonghuxiangce from '@/views/modules/yonghuxiangce/list'
    import forum from '@/views/modules/forum/list'
    import hanfuzhishi from '@/views/modules/hanfuzhishi/list'
    import chat from '@/views/modules/chat/list'
    import discussfuzhuangzhanshi from '@/views/modules/discussfuzhuangzhanshi/list'
    import orders from '@/views/modules/orders/list'
    import storeup from '@/views/modules/storeup/list'
    import fuzhuangzhanshi from '@/views/modules/fuzhuangzhanshi/list'
    import config from '@/views/modules/config/list'
    import fuzhuangleibie from '@/views/modules/fuzhuangleibie/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/discussyonghuxiangce',
        name: '用户相册评论',
        component: discussyonghuxiangce
      }
          ,{
	path: '/yonghuxiangce',
        name: '用户相册',
        component: yonghuxiangce
      }
          ,{
	path: '/forum',
        name: '论坛交流',
        component: forum
      }
          ,{
	path: '/hanfuzhishi',
        name: '汉服知识',
        component: hanfuzhishi
      }
          ,{
	path: '/chat',
        name: '在线客服',
        component: chat
      }
          ,{
	path: '/discussfuzhuangzhanshi',
        name: '服装展示评论',
        component: discussfuzhuangzhanshi
      }
          ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
          ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
          ,{
	path: '/fuzhuangzhanshi',
        name: '服装展示',
        component: fuzhuangzhanshi
      }
          ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
          ,{
	path: '/fuzhuangleibie',
        name: '服装类别',
        component: fuzhuangleibie
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
