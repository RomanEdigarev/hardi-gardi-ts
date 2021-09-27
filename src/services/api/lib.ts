import { apiInstance } from "./config";
import { Menu, Product, History, TooltipMenu } from "./model";
import { Contacts } from "@/services/api/model/Contacts";
import { Social } from "@/services/api/model/Social";

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

export const getProductAPI = async (id: number): Promise<Product> => {
  try {
    const { data, statusText } = await apiInstance.post(
      `catalog/item.php?id=${id}`
    );
    if (statusText === "OK" && data.isSuccess) {
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
    const { data, statusText } = await apiInstance.post("about/history.php");
    if (statusText === "OK" && data.isSuccess) {
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
    const { data, statusText } = await apiInstance.post(
      "blocks/getReferMainpage.php"
    );
    if (statusText === "OK" && data.isSuccess) {
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
    const { data, statusText } = await apiInstance.post(
      "blocks/getContacts.php"
    );
    if (statusText === "OK" && data.isSuccess) {
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
    const { data, statusText } = await apiInstance.post(
      "blocks/getSocialNets.php"
    );
    if (statusText === "OK" && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};
