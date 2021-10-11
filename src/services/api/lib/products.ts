import { Products, Sections } from "@/services/api/model";
import { apiInstance } from "@/services/api/config";
import { Filters } from "@/services/api/model/Filter";

export const getProductsByPageAPI = async (
  page: number,
  filters: string[] = []
): Promise<Products> => {
  let requestString = "";

  if (filters.length === 0) {
    requestString = "catalog/list.php";
  } else {
    const arr = filters.map((filterStr) => filterStr + "=Y");
    requestString = "catalog/list.php?" + arr.join("&");
  }

  try {
    const { data, status } = await apiInstance().post(requestString);
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};
export const getFilterFieldsAPI = async (): Promise<Filters> => {
  try {
    const { data, status } = await apiInstance().post(`catalog/filter.php`);
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getSectionsAPI = async (): Promise<Sections> => {
  try {
    const { data, status } = await apiInstance().post(`catalog/sections.php`);
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};
