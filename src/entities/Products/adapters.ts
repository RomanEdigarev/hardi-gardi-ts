import { Product } from "@/entities/Products/Product/model";
import { getHistoryAPI } from "@/services/api";
import {
  getBestProductsAPI,
  getProductsByPageAPI,
} from "@/services/api/lib/products";
import { CurrentFilter } from "@/entities/Products/model";

export const getProductsByPageAdapter = async (
  page: number,
  currentFilter: CurrentFilter = {}
): Promise<Product[]> => {
  const filters: string[] = Object.entries(currentFilter).map(
    ([key, value]) => {
      if (key === "section") {
        return `section[${value}]`;
      }
      return `${key}=${value ? value : "Y"}`;
    }
  );
  // Response API here //
  const response = await getProductsByPageAPI(page, filters);
  // Response API  //
  // Transformation API data here //
  const products: Product[] = response.data.products.map((product) => {
    return {
      id: product.id,
      title: product.name,
      currentPrice: product.price.sum,
      prevPrice: product.price.oldSum,
      img: product.img,
      isFavorite: false,
    };
  });
  // Transformation API data here //
  return products;
};

export const getBestProductsAdapter = async (
  type: string
): Promise<Product[]> => {
  const response = await getBestProductsAPI(type);

  const products: Product[] = response.data.products.map((product) => {
    return {
      id: product.id,
      title: product.name,
      currentPrice: product.price.sum,
      prevPrice: product.price.oldSum,
      img: product.img,
      isFavorite: false,
    };
  });
  return products;
};
