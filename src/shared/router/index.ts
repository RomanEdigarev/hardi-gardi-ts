import { createRouter, createWebHashHistory } from "vue-router";
import {
  Home,
  Catalog,
  SearchResultsPage,
  Product,
  Favorites,
  Basket,
  Ordering,
  Payment,
  History,
  Philosophy,
} from "@/pages";
import "vue-router";
declare module "vue-router" {
  interface RouteMeta {
    breadcrumb?: Breadcrumb[];
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
          link: "product",
        },
      ],
    },
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites,
  },
  {
    path: "/basket",
    name: "Basket",
    component: Basket,
  },
  {
    path: "/ordering",
    name: "Ordering",
    component: Ordering,
  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment,
  },
  {
    path: "/history",
    name: "History",
    component: History,
    meta: {
      breadcrumb: [
        {
          name: "Наша история",
          link: "history ",
        },
      ],
    },
  },
  {
    path: "/philosophy",
    name: "Philosophy",
    component: Philosophy,
    meta: {
      breadcrumb: [
        {
          name: "Философия",
          link: "philosophy ",
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
