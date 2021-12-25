import { ProductItem, Products, Sections } from "@/services/api/model";
import { apiInstance } from "@/services/api/config";
import { Filters } from "@/services/api/model/Filter";
import { LayoutAPI } from "@/services/api/model/LayoutAPI";
import { Product } from "@/entities/Products/Product/model";
import {Sorting} from "@/entities/Products/model";

export const getProductsByPageAPI = async (
  page: number,
  filters: string[] = [],
  sorting: Sorting
): Promise<Products> => {
  let requestString = "";

  const formData = new FormData();
  Object.entries(sorting).forEach(([key, value]) => {
    formData.append(key, value);
  });

  if (filters.length === 0) {
    requestString = "catalog/list.php";
  } else {
    requestString = "catalog/list.php?set_filter=y&" + filters.join("&");
  }

  try {
    const { data, status } = await apiInstance().post(requestString, formData);
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

export const getProductByIdAPI = async (
  id: number
): Promise<LayoutAPI<ProductItem>> => {
  try {
    const { data, status } = await apiInstance().post(
      `catalog/item.php?id=${id}`
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

export const getBestProductsAPI = async (type: string): Promise<Products> => {
  try {
    const { data, status } = await apiInstance().post(
      `catalog/bestItems.php?type=${type}`
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
