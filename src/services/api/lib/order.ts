import { apiInstance } from "@/services/api/config";
import { Order, OrderHistoryList } from "@/services/api/model/Order";

export const getOrderAPI = async (id?): Promise<Order> => {
  debugger;
  try {
    const { data, status } = await apiInstance().post(
      `user/order/order.php${id ? `?id=${id}` : ""}`
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

export const createOrderAPI = async (form: FormData): Promise<any> => {
  try {
    const { data, status } = await apiInstance().post(
      `user/order/order.php`,
      form
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

export const getOrdersListAPI = async (): Promise<OrderHistoryList> => {
  try {
    const { data, status } = await apiInstance().post(`user/order/list.php`);
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};
