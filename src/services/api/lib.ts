import { apiInstance } from "./config";

export const getUserCity = async () => {
  // debugger;
  const response = await apiInstance.post("user/city/getFavoriteCities.php");
  console.log(response);
  return response;
};
