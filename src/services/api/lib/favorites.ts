import { FavoriteItems, Favorites } from "@/services/api/model/Favorites";
import { apiInstance } from "@/services/api/config";

export const getFavoritesProductsAPI = async (): Promise<Favorites> => {
  try {
    const { data, status } = await apiInstance().post(
      `user/favorites/list.php`
    );
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getFavoritesItemsAPI = async (): Promise<FavoriteItems> => {
  try {
    const { data, status } = await apiInstance().post(`user/favorites/get.php`);
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const addToFavoriteAPI = async (
  id: string | number
): Promise<FavoriteItems> => {
  try {
    const { data, status } = await apiInstance().post(
      `user/favorites/add.php?id=${id}`
    );
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};
export const removeToFavoriteAPI = async (
  id: string | number
): Promise<FavoriteItems> => {
  try {
    const { data, status } = await apiInstance().post(
      `user/favorites/remove.php?id=${id}`
    );
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};
