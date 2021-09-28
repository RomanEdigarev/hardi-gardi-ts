import { Products } from "@/services/api/model";
import { apiInstance } from "@/services/api/config";

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
