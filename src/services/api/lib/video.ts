import { MainPagePromo } from "@/services/api/model/MainPagePromo";
import { apiInstance } from "@/services/api/config";

export const getPromoMainPageAPI = async (): Promise<MainPagePromo> => {
  try {
    const { data, status } = await apiInstance().post(
      `blocks/getPromoMainpage.php`
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
