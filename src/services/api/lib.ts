import { apiInstance } from "./config";
import { Menu } from "@/services/api/model/Menu";

export const getUserCity = async () => {
  const response = await apiInstance.post("user/city/getFavoriteCities.php");
  console.log(response);
  return response;
};

export const getMenuAPI = async (): Promise<Menu> => {
  try {
    const { data, statusText } = await apiInstance.post("blocks/getMenu.php");
    if (statusText === "OK" && data.isSuccess) {
      return data;
    } else {
      throw new Error(statusText);
    }
  } catch (e) {
    console.log(e);
  }
};
