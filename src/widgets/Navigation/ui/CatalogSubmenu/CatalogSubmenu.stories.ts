import Submenu from "./CatalogSubmenu.vue";
import { Menu } from "@/entities/Menu/model";
import CatalogSubmenu from "@/widgets/Navigation/ui/CatalogSubmenu/CatalogSubmenu.vue";

export default {
  title: "widgets/Navigation/ui",
  component: CatalogSubmenu,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const menu: Menu = {
  top: [
    {
      name: "Акции",
      link: "/actions/",
      icon: "",
    },
  ],
  footer: [],
  catalog: [
    {
      name: "Наборы со скидкой",
      link: "/catalog/Nabori/",
      icon: "/upload/iblock/cc9/7s0ycktv7dcmofqdzurzo3jk1br63uex.png",
      items: [],
    },
    {
      name: "Магнитные игры",
      link: "/catalog/magnitnye_igry/",
      icon: "",
      items: [],
    },
    {
      name: "Наборы магнитов",
      link: "/catalog/nabory_magnitov/",
      icon: "",
      items: [],
    },
    {
      name: "Рисуй-стирай",
      link: "/catalog/risuy_stiray/",
      icon: "",
      items: [],
    },
    {
      name: "Пазлы",
      link: "/catalog/pazly/",
      icon: "",
      items: [],
    },
    {
      name: "Игры с бумагой",
      link: "/catalog/igry_s_bumagoy/",
      icon: "",
      items: [
        {
          name: "Аппликации",
          link: "/catalog/igry_s_bumagoy/applikatsii/",
          icon: "",
          items: [],
        },
        {
          name: "Книжка-вырезалка",
          link: "/catalog/igry_s_bumagoy/knizhka_vyrezalka/",
          icon: "",
          items: [],
        },
        {
          name: "Маски",
          link: "/catalog/igry_s_bumagoy/maski/",
          icon: "",
          items: [],
        },
        {
          name: "Раскраски",
          link: "/catalog/igry_s_bumagoy/rasskraski/",
          icon: "",
          items: [],
        },
      ],
    },
    {
      name: "Детские книги",
      link: "/catalog/detskie_knigi/",
      icon: "",
      items: [],
    },
    {
      name: "Игры-бродилки",
      link: "/catalog/igry_brodilki/",
      icon: "",
      items: [],
    },
  ],
};

export const catalogSubmenu = (args) => ({
  components: {
    Submenu,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 100%; height: 432px; background-color: white;">
     <Submenu :items="args.items"/>
    </div>
  `,
  methods: {},
});
catalogSubmenu.args = {
  items: menu.catalog,
};
