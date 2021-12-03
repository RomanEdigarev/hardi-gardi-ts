import { AddToBasketData, Basket } from "@/services/api/model/Basket";
import { apiInstance } from "@/services/api/config";

export const getCertificatesAPI = async (): Promise<any> => {
  try {
    const { data, status } = await apiInstance().post(`about/certificates.php`);
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};
