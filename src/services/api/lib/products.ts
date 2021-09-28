import { Products, Sections } from "@/services/api/model";
import { apiInstance } from "@/services/api/config";
import { Filter } from "@/services/api/model/Filter";

export const getProductsByPageAPI = async (page: number): Promise<Products> => {
  try {
    const { data, status } = await apiInstance.post(`catalog/list.php`);
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};
export const getFilterFieldsAPI = async (): Promise<Filter> => {
  try {
    const { data, status } = await apiInstance.post(`catalog/filter.php`);
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
    const { data, status } = await apiInstance.post(`catalog/sections.php`);
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};
