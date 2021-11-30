import { apiInstance } from "@/services/api/config";
import { Actions } from "@/services/api/model/Actions";

export const getActionsAPI = async (): Promise<Actions> => {
  try {
    const { data, status } = await apiInstance().post(`actions/list.php`);
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};
