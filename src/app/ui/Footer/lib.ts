import { getCatalog, getFooterMenu } from "@/entities/Shop/lib";
import { FooterMenu } from "@/entities/Shop/Menu/model";
import { Catalog } from "@/entities/Shop/Catalog/model";

export const useFooterMenu = (): FooterMenu => {
  return getFooterMenu();
};
export const useFooterCatalog = (): Catalog => {
  return getCatalog();
};
