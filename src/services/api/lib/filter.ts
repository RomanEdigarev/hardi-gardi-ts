import { FavoriteItems } from "@/services/api/model/Favorites";
import { apiInstance } from "@/services/api/config";
import { Filters } from "@/services/api/model/Filter";

export const getAllFiltersAPI = async (): Promise<Filters> => {
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
