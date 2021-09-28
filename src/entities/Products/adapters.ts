import { Product } from "@/entities/Products/Product/model";
import { getHistoryAPI } from "@/services/api";
import { getProductsByPageAPI } from "@/services/api/lib/products";

export const getProductsByPageAdapter = async (
  page: number
): Promise<Product[]> => {
  // Response API here //
  const response = await getProductsByPageAPI(page);
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
