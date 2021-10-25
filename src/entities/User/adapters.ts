import {
  User,
  UserErrorMessage,
  UserRegistrationData,
  UserSessionId,
} from "./model";
import {
  getUserProfileAPI,
  getUserAuthInfoAPI,
  loginUserAPI,
  logoutUserAPI,
  registrationUserAPI,
  setUserProfileAPI,
} from "@/services/api/lib/user";
import {
  UserProfileData,
  UserProfileParamsData,
} from "@/services/api/model/User";

export const getUserAuthInfoAdapter = async (): Promise<User> => {
  // Response API here //
  const { data: userData } = await getUserAuthInfoAPI();
  const { data: userProfileData } = await getUserProfileAPI();
  // Response API  //

  // Transformation API data here //

  // Transformation API data here //
  return {
    isAuth: userData.isAuth,
    name: userData.name,
    email: userData.email,
    birth: userProfileData.profile.PERSONAL_BIRTHDAY,
    childs: [],
    error: "",
    isLoading: false,
    lastName: userProfileData.profile.LAST_NAME,
    newPassword: userProfileData.profile.NEW_PASSWORD,
    phone: userProfileData.profile.PERSONAL_PHONE,
    secondName: userProfileData.profile.SECOND_NAME,
    sessionId: userProfileData.sessid,
  };
};

export const registrationUserAdapter = async ({
  name,
  password,
  email,
}: UserRegistrationData): Promise<User | UserErrorMessage> => {
  // Response API here //
  const { data: userData, isSuccess, message } = await registrationUserAPI({
    name,
    password,
    email,
  });
  const { data: userProfileData } = await getUserProfileAPI();
  // Response API  //

  if (userData && isSuccess) {
    return {
      isAuth: userData.isAuth,
      name: userData.name,
      email: userData.email,
      birth: userProfileData.profile.PERSONAL_BIRTHDAY,
      childs: [],
      error: "",
      isLoading: false,
      lastName: userProfileData.profile.LAST_NAME,
      newPassword: userProfileData.profile.NEW_PASSWORD,
      phone: userProfileData.profile.PERSONAL_PHONE,
      secondName: userProfileData.profile.SECOND_NAME,
      sessionId: userProfileData.sessid,
    };
  } else {
    return message;
  }
};

export const loginUserAdapter = async ({
  email,
  password,
  remember,
}): Promise<User | UserErrorMessage> => {
  // Response API here //
  const userData = await loginUserAPI({
    email,
    password,
    remember: remember ? "y" : "n",
  });

  const { data: userProfileData } = await getUserProfileAPI();
  // Response API  //

  // Transformation API data here //

  // Transformation API data here //
  if (userData && userData.isSuccess) {
    return {
      isAuth: userData.data.isAuth,
      name: userData.data.name,
      email: userData.data.email,
      birth: userProfileData.profile.PERSONAL_BIRTHDAY,
      childs: [],
      error: "",
      isLoading: false,
      lastName: userProfileData.profile.LAST_NAME,
      newPassword: userProfileData.profile.NEW_PASSWORD,
      phone: userProfileData.profile.PERSONAL_PHONE,
      secondName: userProfileData.profile.SECOND_NAME,
      sessionId: userProfileData.sessid,
    };
  } else {
    return userData.message;
  }
};

export const logoutUserAdapter = async (): Promise<boolean> => {
  // Response API here //
  const isLogout = await logoutUserAPI();
  // Response API  //

  return isLogout;
};

export const setUserProfileDataAdapter = async (
  profileData: User,
  sessionId: UserSessionId
) => {
  const params: UserProfileParamsData = {
    EMAIL: profileData.email,
    LAST_NAME: profileData.lastName,
    NAME: profileData.name,
    NEW_PASSWORD: profileData.newPassword,
    PERSONAL_BIRTHDAY: profileData.birth,
    PERSONAL_PHONE: profileData.phone,
    SECOND_NAME: profileData.secondName,
  };
  // Response API here //
  const response = await setUserProfileAPI(sessionId, params);
  // Response API  //
  return response;
};
