import { CatalogMenu, FooterMenu, Menu, TopMenu } from "./model";
import { getMenuAPI } from "@/services/api";

export const getMenuAdapter = async (): Promise<Menu> => {
  const response = await getMenuAPI();
  return response?.data ? response.data : { catalog: [], footer: [], top: [] };
};
