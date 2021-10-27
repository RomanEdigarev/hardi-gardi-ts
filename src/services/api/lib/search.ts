import { Search } from "@/services/api/model/Search";
import { apiInstance } from "@/services/api/config";

export const searchProductsAPI = async (form: FormData): Promise<Search> => {
  try {
    const { data, status } = await apiInstance().post(
      `search/search.php`,
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
