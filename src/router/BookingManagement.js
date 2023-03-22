export default {
    path: "/booking-management",
    name: "booking-management",
    component:()=>import("@/views/layout"),
    meta: {
        isAuth: true,
        type: "预约管理",
    },
    children: [
        {
            path: "booking-register",
            name: "BookingRegister",
            meta: {
                isAuth: true,
                title: "预约挂号",
            },
            component: () =>
                import("@/views/BookingManagement/BookingRegister"),
        },
        {
            path: "booking-monitor",
            name: "BookingMonitor",
            meta: {
                isAuth: true,
                title: "预约核酸检测",
            },
            component: () =>
                import("@/views/BookingManagement/BookingMonitor"),
        },
        {
            path: "booking-checkup",
            name: "BookingCheckup",
            meta: {
                isAuth: true,
                title: "预约体检",
            },
            component: () =>
                import("@/views/BookingManagement/BookingCheckup"),
        },
        {
            path: "doctor-scheduling",
            name: "DoctorScheduling",
            meta: {
                isAuth: true,
                title: "医生排班",
            },
            component: () =>
                import("@/views/BookingManagement/DoctorScheduling"),
        },
    ],
};
