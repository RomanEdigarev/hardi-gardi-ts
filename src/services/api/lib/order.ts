import { apiInstance } from "@/services/api/config";
import { Order } from "@/services/api/model/Order";

export const getOrderAPI = async (): Promise<Order> => {
  try {
    const { data, status } = await apiInstance().post(`user/order/order.php`);
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
