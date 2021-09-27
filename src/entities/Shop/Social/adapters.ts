import { Social } from "@/entities/Shop/Social/model";
import { getHistoryAPI, getSocialAPI } from "@/services/api";

export const getSocialAdapter = async (): Promise<Social> => {
  // Response API here //
  const response = await getSocialAPI();
  // Response API  //

  // Transformation API data here //
  // Transformation API data here //
  return response.data.items;
};
