// token o260S742nDXf4BAtaElwhbXns2HC27Ba

import axios from "axios";
import { API_URL, TOKEN } from "@/shared/config";

export const apiInstance = axios.create({
  baseURL: API_URL,
  // withCredentials: true,
  headers: {
    "X-Auth-Token": TOKEN,
  },
});
