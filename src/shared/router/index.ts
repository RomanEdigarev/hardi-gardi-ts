import { createRouter, createWebHashHistory } from "vue-router";
import { Home, Catalog } from "@/pages";
import "vue-router";
import SearchResultsPage from "@/pages/SearchResultsPage/SearchResultsPage.vue";
import Product from "@/pages/Product/Product.vue";
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
  {
    path: "/search-results",
    name: "SearchResultsPage",
    component: SearchResultsPage,
    meta: {
      breadcrumb: [
        {
          name: "Результаты поиска",
          link: "search-results",
        },
      ],
    },
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
    meta: {
      breadcrumb: [
        {
          name: "Каталог",
          link: "search-results",
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
