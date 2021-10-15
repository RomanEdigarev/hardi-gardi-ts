import { User, UserRegistrationData } from "./model";
import {
  getUserAuthInfoAPI,
  registrationUserAPI,
} from "@/services/api/lib/user";

export const getUserAuthInfoAdapter = async (): Promise<User> => {
  // Response API here //
  const { data } = await getUserAuthInfoAPI();
  // Response API  //

  // Transformation API data here //

  // Transformation API data here //
  return {
    isAuth: data.isAuth,
    name: data.name,
    email: data.email,
  };
};

export const registrationUserAdapter = async ({
  name,
  password,
  email,
}: UserRegistrationData): Promise<User> => {
  // Response API here //
  const { data } = await registrationUserAPI(name, password, email);
  // Response API  //

  // Transformation API data here //

  // Transformation API data here //
  return {
    isAuth: data.isAuth,
    name: data.name,
    email: data.email,
  };
};
