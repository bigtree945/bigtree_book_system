/*
 * @Author: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @Date: 2023-04-06 17:13:45
 * @LastEditors: 邓嘉伟 12241158+big--tree@user.noreply.gitee.com
 * @LastEditTime: 2023-05-01 14:51:31
 * @FilePath: \my-project\src\router\SystemSettings.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
    path: "/system-settings",
    name: "system-settings",
    meta: {
        isAuth: true,
        type: "系统设置",
    },
    component: () => import("@/views/layout"),
    children: [
        // {
        //     path: "administrator-management",
        //     name: "AdministratorManagement",
        //     meta: {
        //         isAuth: true,
        //         title: "管理员管理",
        //     },
        //     component: () =>
        //         import("@/views/SystemSettings/AdministratorManagement"),
        // },
        // {
        //     path: "role-management",
        //     name: "RoleManagement",
        //     meta: {
        //         isAuth: true,
        //         title: "角色管理",
        //     },
        //     component: () =>
        //         import("@/views/SystemSettings/RoleManagement"),
        // },
        // {
        //     path: "title-management",
        //     name: "TitleManagement",
        //     meta: {
        //         isAuth: true,
        //         title: "职称管理",
        //     },
        //     component: () =>
        //         import("@/views/SystemSettings/TitleManagement"),
        // },
        // {
        //     path: "message-announcement",
        //     name: "MessageAnnouncement",
        //     meta: {
        //         isAuth: true,
        //         title: "消息公告",
        //     },
        //     component: () =>
        //         import("@/views/SystemSettings/MessageAnnouncement"),
        // },
        {
            path: "change-password",
            name: "ChangePassword",
            meta: {
                isAuth: true,
                title: "修改密码",
            },
            component: () =>
                import("@/views/SystemSettings/ChangePassword"),
        },
    ],
};
