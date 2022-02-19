export const routes = [
  {
    path: "employee",
    name: "employee",
    component: () => import("../views/employees/index.vue"),
  },
  {
    path: "help",
    name: "help",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Help.vue"),
  },
];
