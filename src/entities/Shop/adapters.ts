import { getMenuAPI, getTooltipMenuAPI } from "@/services/api";
import { CatalogMenu } from "@/services/api/model/Menu";
import { Shop } from "./model";
import { Section } from "./Catalog/model";
import { Menu, MenuLink } from "./Menu/model";

export const getShopAdapter = async (): Promise<Shop> => {
  // Response API here //
  const responseMenu = await getMenuAPI();
  const responseTolltip = await getTooltipMenuAPI();
  // Response API  //

  // Transformation API data here //
  const getSections = (catalogFromApi: CatalogMenu): Section[] => {
    return catalogFromApi.map((item) => {
      return {
        name: item.name,
        icon: item.icon,
        link: item.link,
        sections: item.items.length > 1 ? getSections(item.items) : [],
      };
    });
  };

  const sections: Section[] = getSections(responseMenu.data.catalog);
  const tooltip: MenuLink[] = responseTolltip.data.items.map((item) => ({
    link: item.url,
    name: item.name,
  }));
  const menu: Menu = {
    top: {
      main: responseMenu.data.top,
      tooltip,
    },
    footer: responseMenu.data.footer,
  };
  // Transformation API data here //

  return {
    catalog: {
      sections,
    },
    contacts: undefined,
    menu,
    history: undefined,
  };
};
