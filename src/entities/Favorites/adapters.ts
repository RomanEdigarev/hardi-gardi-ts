import { Favorites } from "@/entities/Favorites/model";
import {
  addToFavoriteAPI,
  getFavoritesProductsAPI,
  removeToFavoriteAPI,
} from "@/services/api/lib/favorites";
import { Product } from "@/entities/Products/Product/model";
import { LinkProduct } from "@/services/api/model";

const transformResponseItems = (items: LinkProduct[]): Product[] => {
  return items.map((product) => {
    return {
      id: product.id,
      title: product.name,
      currentPrice: product.price.sum,
      prevPrice: product.price.oldSum,
      img: product.img,
    };
  });
};

export const getFavoritesAdapter = async (): Promise<Favorites> => {
  // Response API here //
  const response = await getFavoritesProductsAPI();
  // Response API  //

  // Transformation API data here //
  const products: Product[] = transformResponseItems(response.data.products);

  return {
    products,
    totalCount: products.length,
  };
};

export const addToFavoritesAdapter = async (
  id: string | number
): Promise<Favorites> => {
  // Response API here //
  await addToFavoriteAPI(id);
  // Response API  //

  // Transformation API data here //

  return await getFavoritesAdapter();
};

export const removeToFavoritesAdapter = async (
  id: string | number
): Promise<Favorites> => {
  // Response API here //
  await removeToFavoriteAPI(id);
  // Response API  //

  // Transformation API data here //

  return await getFavoritesAdapter();
};
