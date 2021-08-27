const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/" || "/:state", component: () => import("pages/Index.vue") },
      {
        path: "home",
        component: () => import("pages/Index.vue"),
      },
      {
        path: "universal",
        component: () => import("pages/universal/Index.vue"),
      },
      {
        path: "metricas",
        component: () => import("pages/RouterView.vue"),
        children: [
          {
            path: "",
            component: () => import("pages/metrics/Index.vue"),
          },
          {
            path: "rrhh",
            component: () => import("pages/metrics/rrhh/Index.vue"),
          },
          {
            path: "financiero",
            component: () => import("pages/metrics/financiero/Index.vue"),
          },
        ],
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/200" || "/300" || "/400",
    component: () => import("pages/Error404.vue"),
  },
  {
    path: "/300",
    component: () => import("pages/Error404.vue"),
  },
  {
    path: "/400",
    component: () => import("pages/Error404.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    redirect: "/home",
  },
];

export default routes;
