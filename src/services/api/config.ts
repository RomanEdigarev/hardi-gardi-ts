// token o260S742nDXf4BAtaElwhbXns2HC27Ba

import axios from "axios";
import { API_URL, TOKEN } from "@/shared/config";

export const getTokenAPI = async () => {
  try {
    const { data, status } = await axios.post(
      "https://khardigardi.srv2.caketest.ru/api/security/getToken.php"
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
let instance = axios.create({
  baseURL: API_URL,
});
export const getApiInstance = async () => {
  // if (localStorage.getItem("token")) {
  //   instance.defaults.headers = {
  //     "X-Auth-Token": localStorage.getItem("token"),
  //   };
  // } else {
  const response = await getTokenAPI();
  localStorage.setItem("token", response.data.token);
  instance.defaults.headers = {
    "X-Auth-Token": response.data.token,
  };
  // }
};
getApiInstance();
export const apiInstance = () => {
  return instance;
};
