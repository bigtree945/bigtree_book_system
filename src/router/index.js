/*
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-03-20 15:39:03
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-05-01 14:49:51
 * @FilePath: \my-project\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import VueRouter from "vue-router";
// 导入模块对象
import layout from "@/views/layout"
import BookingManagement from "@/router/BookingManagement"
// import CostManagement from "@/router/CostManagement"
import HospitalInfo from "@/router/HospitalInfo"
import SystemSettings from "@/router/SystemSettings"
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: layout,
        redirect: "/index",
        children: [
            {
                path: "index",
                name: "index",
                meta: {
                    isAuth: true,
                    title: "首页"
                },
                component: () => import("@/views/index"),
            },
            {
                path: "detail/:id/:title",
                name: "detail",
                meta: {
                    isAuth: true,
                    title: "详情"
                },
                component: () => import("@/views/Detail"),
            },
            {
                path: "edit/:id",
                name: "edit",
                meta: {
                    isAuth: true,
                    title: "编辑医生信息"
                },
                component: () => import("@/views/Edit"),
            },
        ]
    },
    BookingManagement,
    // CostManagement,
    HospitalInfo,
    SystemSettings,
    {
        path: "/login",
        name: "login",
        meta: {
            isAuth: false,
            title: "登录"
        },
        component: () => import("@/views/login"),
    },
    {
        path: "*",
        name: "err",
        meta: {
            isAuth: false,
            title: "找不到",
        },
        // component: () => import("@/views/404"),
        beforeEnter: (to, from, next) => {
            let script = document.createElement('script');
            script.src = "//volunteer.cdn-go.cn/404/latest/404.js"
            document.body.appendChild(script);
        }
    },
];

const router = new VueRouter({
    routes,
    mode: 'hash',
    base: process.env.BASE_URL,
});

//路由前置守卫
router.beforeEach((to, from, next) => {
    // 查看目标路由是否需要权限
    if (to.meta.isAuth) {
        // 查看本地是否有token
        if (!sessionStorage.getItem("token")) {
            router.replace("/login", () => { })
        }
    }
    // 修改标题
    document.title = to.meta.title
    // 修改图标

    // 放行
    next()
})

export default router
