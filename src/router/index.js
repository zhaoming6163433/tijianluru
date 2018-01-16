import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'//内容路由
import homechild from '@/view/home/homechild'//首页
import loginlogs from '@/view/home/loginlogs'//登录日志
import accountset from '@/view/home/accountset'//账户设置
import caselist from '@/view/case/caselist'//病例列表
import caseadd from '@/view/case/caseadd'//添加病例
import caseset from '@/view/case/caseset'//设置标签
import casecheck from '@/view/case/casecheck'//查看病例
import addphy from '@/view/check/addphy'//添加体检
import nocheck from '@/view/check/nocheck'//未检查
import yetcheck from '@/view/check/yetcheck'//已检查
import setmeal from '@/view/check/setmeal'//套餐设置
import allphy from '@/view/report/allphy'//添加检查
import login from '@/view/login/login'//登录
import handlelog from '@/view/limithandle/handlelog'//权限操作
import physicalexam from '@/view/exam/physicalexam'//体检统计
import exceptionalexam from '@/view/exam/exceptionalexam'//异常统计
import inforegister from '@/view/manage/inforegister'//医师信息注册
import infowrite from '@/view/manage/infowrite'//医师信息填写
import infocheck from '@/view/manage/infocheck'//医师信息审核
import infomanage from '@/view/manage/infomanage'//医师信息管理

Vue.use(Router)

export default new Router({
  routes: [
    /*{ path: '*', component: NotFoundComponent },//404页面*/
    {//菜单内容页面
        path: '/home',
        name: 'home',
        component: home,
        children: [
            /*首页*/
            {//系统首页
                path: '/home/homechild',
                name: 'homechild',
                component: homechild
            },
            {//账户设置
                path: '/home/accountset',
                name: 'accountset',
                component: accountset
            },
            {//登录日志
                path: '/home/loginlogs',
                name: 'loginlogs',
                component: loginlogs
            },
            /*病例*/
            {//病例列表
                path: '/case/caselist',
                name: 'caselist',
                component: caselist
            },
            {//添加病例
                path: '/case/caseadd',
                name: 'caseadd',
                component: caseadd
            },
            {//设置标签
                path: '/case/caseset',
                name: 'caseset',
                component: caseset
            },
            {//查看病例
                path: '/case/caselist/casecheck',
                name: 'casecheck',
                component: casecheck
            },
            /*检查*/
            {//添加体检
                path: '/check/addphy',
                name: 'addphy',
                component: addphy
            },
            {//未检查
                path: '/check/nocheck',
                name: 'nocheck',
                component: nocheck
            },
            {//已检查
                path: '/check/yetcheck',
                name: 'yetcheck',
                component: yetcheck
            },
            {//套餐设置
                path: '/check/setmeal',
                name: 'setmeal',
                component: setmeal
            },
            /*报告*/
            {//全部体检
                path: '/report/allphy',
                name: 'allphy',
                component: allphy
            },
            //权限
            {//操作日志
                path: '/limithandle/handlelog',
                name: 'handlelog',
                component: handlelog
            },
            /*统计*/
            {//体检统计
                path: '/exam/physicalexam',
                name: 'physicalexam',
                component: physicalexam
            },
            {//异常统计
                path: '/exam/exceptionalexam',
                name: 'exceptionalexam',
                component: exceptionalexam
            },
            /*管理 */
            {//医师信息注册
                path: '/manage/inforegister',
                name: 'inforegister',
                component: inforegister
            },
            {//医师信息填写
                path: '/manage/infowrite',
                name: 'infowrite',
                component: infowrite
            },
            {//医师信息审核
                path: '/manage/infocheck',
                name: 'infocheck',
                component: infocheck
            },
            {//医师信息管理
                path: '/manage/infomanage',
                name: 'infomanage',
                component: infomanage
            }
        ]
    },
    {//登录
        path: '/',
        name: 'login',
        component: login
    }
  ]
})
