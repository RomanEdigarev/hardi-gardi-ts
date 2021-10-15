import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
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
  Quality,
  TextPage,
  Promotion,
  Contacts,
  Error,
  SignIn,
  Personal,
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
    path: "/catalog/:section?/:subsection?",
    name: "Catalog",
    component: Catalog,
    props: true,
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
    path: "/product/:productId",
    name: "Product",
    props: true,
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
    path: "/about/history.html",
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
    path: "/about/philosophy.html",
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
  {
    path: "/quality",
    name: "Quality",
    component: Quality,
    meta: {
      breadcrumb: [
        {
          name: "Продукция и качество",
          link: "quality",
        },
      ],
    },
  },
  {
    path: "/about/about.html",
    name: "TextPage",
    component: TextPage,
    meta: {
      breadcrumb: [
        {
          name: "О компании",
          link: "text-page",
        },
      ],
    },
  },
  {
    path: "/actions",
    name: "Promotion",
    component: Promotion,
    meta: {
      breadcrumb: [
        {
          name: "Акции",
          link: "promotion",
        },
      ],
    },
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
    meta: {
      breadcrumb: [
        {
          name: "Контакты",
          link: "contacts",
        },
      ],
    },
  },
  {
    path: "/error",
    name: "Error",
    component: Error,
  },
  {
    path: "/sign-in/:step",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/personal",
    name: "Personal",
    component: Personal,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
