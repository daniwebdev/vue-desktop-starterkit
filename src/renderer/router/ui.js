export const routes = [
    {
        path: "ui/form",
        name: "ui.form",
        component: () => import("@/renderer/views/ui-kit/Form.vue"),
    },
    {
        path: "ui/card",
        name: "ui.card",
        component: () => import("@/renderer/views/ui-kit/Card.vue"),
    },
];