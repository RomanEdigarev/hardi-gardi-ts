import { apiInstance } from "../config";
import { Menu, History, TooltipMenu, Products, ProductItem } from "../model";
import { Contacts } from "@/services/api/model/Contacts";
import { Social } from "@/services/api/model/Social";

export const getUserCity = async () => {
  const response = await apiInstance().post("user/city/getFavoriteCities.php");
  return response;
};

export const getMenuAPI = async (): Promise<Menu> => {
  try {
    const { data, status } = await apiInstance().post("blocks/getMenu.php");
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getProductAPI = async (id: number): Promise<ProductItem> => {
  try {
    const { data, status } = await apiInstance().post(
      `catalog/item.php?id=${id}`
    );
    if (status === 200 && data.isSuccess) {
      return data.data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getHistoryAPI = async (): Promise<History> => {
  try {
    const { data, status } = await apiInstance().post("about/history.php");
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getTooltipMenuAPI = async (): Promise<TooltipMenu> => {
  try {
    const { data, status } = await apiInstance().post(
      "blocks/getReferMainpage.php"
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

export const getContactsAPI = async (): Promise<Contacts> => {
  try {
    const { data, status } = await apiInstance().post("blocks/getContacts.php");
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getSocialAPI = async (): Promise<Social> => {
  try {
    const { data, status } = await apiInstance().post(
      "blocks/getSocialNets.php"
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
