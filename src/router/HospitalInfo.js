/*
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-04-06 17:13:45
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-05-01 14:50:37
 * @FilePath: \my-project\src\router\HospitalInfo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
    path: "/hospital-info",
    name: "hospital-info",
    meta: {
        isAuth: true,
        type: "医院信息",
    },
    component: () => import("@/views/layout"),
    children: [
        {
            path: "doctor-management",
            name: "DoctorManagement",
            meta: {
                isAuth: true,
                title: "医生管理",
            },
            component: () =>
                import("@/views/HospitalInfo/DoctorManagement"),
        },
        // {
        //     path: "department-management",
        //     name: "DepartmentManagement",
        //     meta: {
        //         isAuth: true,
        //         title: "科室管理",
        //     },
        //     component: () =>
        //         import("@/views/HospitalInfo/DepartmentManagement"),
        // },
        {
            path: "physical-examination-package",
            name: "PhysicalExaminationPackage",
            meta: {
                isAuth: true,
                title: "体检套餐",
            },
            component: () =>
                import("@/views/HospitalInfo/PhysicalExaminationPackage"),
        },
        // {
        //     path: "health-encyclopedia",
        //     name: "HealthEncyclopedia",
        //     meta: {
        //         isAuth: true,
        //         title: "健康百科",
        //     },
        //     component: () =>
        //         import("@/views/HospitalInfo/HealthEncyclopedia"),
        // },
        // {
        //     path: "hospital-navigation",
        //     name: "HospitalNavigation",
        //     meta: {
        //         isAuth: true,
        //         title: "医院导航",
        //     },
        //     component: () =>
        //         import("@/views/HospitalInfo/HospitalNavigation"),
        // },
        {
            path: "hospital-profile",
            name: "HospitalProfile",
            meta: {
                isAuth: true,
                title: "医院简介",
            },
            component: () =>
                import("@/views/HospitalInfo/HospitalProfile"),
        },
        {
            path: "reservation-instructions",
            name: "ReservationInstructions",
            meta: {
                isAuth: true,
                title: "预约须知",
            },
            component: () =>
                import("@/views/HospitalInfo/ReservationInstructions"),
        },
    ],
};
