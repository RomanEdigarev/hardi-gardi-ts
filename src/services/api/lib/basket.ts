import { AddToBasketData, Basket } from "@/services/api/model/Basket";
import { apiInstance } from "@/services/api/config";

export const addToBasketAPI = async (
  basketData: AddToBasketData
): Promise<Basket> => {
  try {
    const { data, status } = await apiInstance().post(
      `user/basket/add.php?id=${basketData.id}&quality=${basketData.quantity}`
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

export const getBasketAPI = async (): Promise<Basket> => {
  try {
    const { data, status } = await apiInstance().post(`user/basket/get.php`);
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const changeBasketPositionAPI = async (
  positionID,
  quantity: number
): Promise<Basket> => {
  try {
    const { data, status } = await apiInstance().post(
      `user/basket/modify.php?id=${positionID}&quantity=${quantity}`
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

export const addBasketCouponAPI = async (code: string): Promise<Basket> => {
  try {
    const { data, status } = await apiInstance().post(
      `user/basket/coupon.php?coupon=${code}&action=add`
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
