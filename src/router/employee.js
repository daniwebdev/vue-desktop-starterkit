export const routes = [
    {
        path: "employee",
        name: "employee",
        component: () => import("@/views/employees/index.vue"),
    },
    {
        path: 'employee/form',
        name: 'employee.form',
        component:() => import('@/views/employees/form.vue'),
    }
];