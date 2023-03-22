export default {
    path: "/cost-management",
    name: "cost-management",
    meta: {
        isAuth: true,
        type: "费用管理",
    },
    component: () => import("@/views/layout"),
    children: [
        {
            path: "department-consume",
            name: "DepartmentConsume",
            meta: {
                isAuth: true,
                title: "门诊消费记录",
            },
            component: () =>
                import("@/views/CostManagement/DepartmentConsume"),
        },
        {
            path: "department-recharge",
            name: "DepartmentRecharge",
            meta: {
                isAuth: true,
                title: "门诊充值记录",
            },
            component: () =>
                import("@/views/CostManagement/DepartmentRecharge"),
        },
        {
            path: "hospitalization-consume",
            name: "HospitalizationConsume",
            meta: {
                isAuth: true,
                title: "住院消费记录",
            },
            component: () =>
                import("@/views/CostManagement/HospitalizationConsume"),
        },
        {
            path: "hospitalization-recharge",
            name: "HospitalizationRecharge",
            meta: {
                isAuth: true,
                title: "住院充值记录",
            },
            component: () =>
                import("@/views/CostManagement/HospitalizationRecharge"),
        },
        {
            path: "refund",
            name: "Refund",
            meta: {
                isAuth: true,
                title: "退款记录",
            },
            component: () =>
                import("@/views/CostManagement/Refund"),
        },
    ],
};
