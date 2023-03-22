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
        {
            path: "department-management",
            name: "DepartmentManagement",
            meta: {
                isAuth: true,
                title: "科室管理",
            },
            component: () =>
                import("@/views/HospitalInfo/DepartmentManagement"),
        },
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
        {
            path: "health-encyclopedia",
            name: "HealthEncyclopedia",
            meta: {
                isAuth: true,
                title: "健康百科",
            },
            component: () =>
                import("@/views/HospitalInfo/HealthEncyclopedia"),
        },
        {
            path: "hospital-navigation",
            name: "HospitalNavigation",
            meta: {
                isAuth: true,
                title: "医院导航",
            },
            component: () =>
                import("@/views/HospitalInfo/HospitalNavigation"),
        },
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
