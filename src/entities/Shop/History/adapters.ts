import { History } from "./model";
import { getHistoryAPI } from "@/services/api";

export const getHistoryAdapter = async (): Promise<History> => {
  // Response API here //
  const response = await getHistoryAPI();
  response.data.items;
  // Response API  //

  // Transformation API data here //
  // Transformation API data here //
  return response.data.items;
};
