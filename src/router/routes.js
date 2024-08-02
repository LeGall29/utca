const routes = [
  {
    path: "/",
    component: () => import("pages/IndexPage.vue"),
  },
  { path: "/90km", component: () => import("src/pages/Page90km.vue") },
  { path: "/60km", component: () => import("pages/Page60km.vue") },
  { path: "/47km", component: () => import("pages/Page47km.vue") },
  { path: "/32km", component: () => import("pages/Page32km.vue") },
  { path: "/20km", component: () => import("pages/Page20km.vue") },
  { path: "/11km", component: () => import("pages/Page11km.vue") },
  //{ path: "/Benevoles", component: () => import("pages/BenevolesPage.vue") },
  //{ path: "/Photos", component: () => import("pages/PhotosPage.vue") },
  /*{
    path: "/Environnement",
    component: () => import("pages/EnvironnementPage.vue"),
  },*/
  //{ path: "/Contacts", component: () => import("pages/ContactsPage.vue") },
  //{ path: "/Legales", component: () => import("pages/LegalesPage.vue") },
  {
    path: "/Maintenance",
    component: () => import("pages/MaintenancePage.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
