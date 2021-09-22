import { getMenuAPI } from "@/services/api";
import { CatalogMenu } from "@/services/api/model/Menu";
import { Shop } from "./model";
import { Section } from "./Catalog/model";
import { Menu } from "./Menu/model";

export const getShopAdapter = async (): Promise<Shop> => {
  // Response API here //
  const response = await getMenuAPI();

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

  const sections: Section[] = getSections(response.data.catalog);
  const menu: Menu = {
    top: response.data.top,
    footer: response.data.footer,
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
