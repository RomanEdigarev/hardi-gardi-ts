import { Product } from "@/entities/Products/Product/model";
import {
  getProductsByPageAPI,
  getSectionsAPI,
} from "@/services/api/lib/products";
import { Section } from "@/entities/Shop/Catalog/model";

export const getSectionsAdapter = async (): Promise<Section[]> => {
  // Response API here //
  const response = await getSectionsAPI();
  // Response API  //
  // Transformation API data here //
  // Transformation API data here //
  return response.data.sections.map((section) => {
    return {
      id: section.id,
      name: section.name,
      icon: section.img,
      link: section.link,
    };
  });
};
