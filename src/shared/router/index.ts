import { createRouter, createWebHashHistory } from "vue-router";
import { Home, Catalog } from "@/pages";
import "vue-router";
declare module "vue-router" {
  interface RouteMeta {
    breadcrumb: Breadcrumb[];
  }
}

type Breadcrumb = {
  name: string;
  link?: string;
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      breadcrumb: [
        {
          name: "Главная",
        },
      ],
    },
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
    meta: {
      breadcrumb: [
        {
          name: "Весь каталог",
          link: "catalog",
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
