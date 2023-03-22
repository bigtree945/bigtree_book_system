export default {
    path: "/system-settings",
    name: "system-settings",
    meta: {
        isAuth: true,
        type: "系统设置",
    },
    component: () => import("@/views/layout"),
    children: [
        {
            path: "administrator-management",
            name: "AdministratorManagement",
            meta: {
                isAuth: true,
                title: "管理员管理",
            },
            component: () =>
                import("@/views/SystemSettings/AdministratorManagement"),
        },
        {
            path: "role-management",
            name: "RoleManagement",
            meta: {
                isAuth: true,
                title: "角色管理",
            },
            component: () =>
                import("@/views/SystemSettings/RoleManagement"),
        },
        {
            path: "title-management",
            name: "TitleManagement",
            meta: {
                isAuth: true,
                title: "职称管理",
            },
            component: () =>
                import("@/views/SystemSettings/TitleManagement"),
        },
        {
            path: "message-announcement",
            name: "MessageAnnouncement",
            meta: {
                isAuth: true,
                title: "消息公告",
            },
            component: () =>
                import("@/views/SystemSettings/MessageAnnouncement"),
        },
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
