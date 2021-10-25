import { apiInstance } from "@/services/api/config";
import { City, CityItem } from "@/services/api/model/City";
import { LayoutAPI } from "@/services/api/model/LayoutAPI";

export const getAllCitiesAPI = async (): Promise<City> => {
  try {
    const { data, status } = await apiInstance().post(
      `user/city/getFavoriteCities.php`
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

export const getUserCityAPI = async (): Promise<City> => {
  try {
    const { data, status } = await apiInstance().post(
      `user/city/getUserCity.php`
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

export const setNewUserCityAPI = async (
  id: string
): Promise<LayoutAPI<CityItem>> => {
  try {
    const { data, status } = await apiInstance().post(
      `user/city/setUserCity.php?id=${id}`
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

export const searchByStringAPI = async (str: string): Promise<City> => {
  try {
    const { data, status } = await apiInstance().post(
      `user/city/searchCity.php?name=${str}`
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
