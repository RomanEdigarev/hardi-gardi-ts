import { Menu } from "@/services/api/model";
import { apiInstance } from "@/services/api/config";

export const getTextPageAPI = async (code): Promise<any> => {
  try {
    const { data, status } = await apiInstance().post(
      `about/infopage.php?code=${code}`
    );
    if (status === 200 && data.isSuccess) {
      return data.data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};
