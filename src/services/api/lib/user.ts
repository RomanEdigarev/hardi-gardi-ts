import { AddToBasketData, Basket } from "@/services/api/model/Basket";
import { apiInstance } from "@/services/api/config";
import { UserInfo } from "@/services/api/model/User";

export const getUserAuthInfoAPI = async (): Promise<UserInfo> => {
  try {
    const { data, status } = await apiInstance().post(`user/auth/get.php`);
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const registrationUserAPI = async (
  name: string,
  email: string,
  password: string
): Promise<UserInfo> => {
  try {
    const { data, status } = await apiInstance().post(
      `user/auth/registration.php?name=${name}&email=${email}&password=${password}`
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
