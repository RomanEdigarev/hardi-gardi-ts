import {
  User,
  UserChild,
  UserErrorMessage,
  UserProfileDataModel,
  UserRegistrationData,
} from "./model";
import {
  getUserProfileAPI,
  getUserAuthInfoAPI,
  loginUserAPI,
  logoutUserAPI,
  registrationUserAPI,
  setUserProfileAPI,
  setUserChildAPI,
  removeUserChildAPI,
} from "@/services/api/lib/user";
import {
  UserChildrenData,
  UserProfileData,
  UserProfileParamsData,
} from "@/services/api/model/User";

const transformChilds = (childs: UserChildrenData[]): UserChild[] => {
  return childs.map((child) => {
    return {
      name: child.name,
      id: child.id,
      gender: child.gender,
      birth: child.birthday,
    };
  });
};

export const getUserAuthInfoAdapter = async (): Promise<User> => {
  // Response API here //
  const { data: userData } = await getUserAuthInfoAPI();
  const { data: userProfileData } = await getUserProfileAPI();
  let profile = {};
  if (userProfileData) {
    profile = {
      birth: userProfileData.profile.PERSONAL_BIRTHDAY,
      childs: transformChilds(userProfileData.childs),
      error: "",
      isLoading: false,
      lastName: userProfileData.profile.LAST_NAME,
      newPassword: userProfileData.profile.NEW_PASSWORD,
      phone: userProfileData.profile.PERSONAL_PHONE,
      secondName: userProfileData.profile.SECOND_NAME,
      sessionId: userProfileData.sessid,
    };
  }

  // Response API  //

  // Transformation API data here //

  // Transformation API data here //
  return {
    isAuth: userData.isAuth,
    name: userData.name,
    email: userData.email,
    ...profile,
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
  let profile = {};
  if (userProfileData) {
    profile = {
      birth: userProfileData.profile.PERSONAL_BIRTHDAY,
      childs: transformChilds(userProfileData.childs),
      error: "",
      isLoading: false,
      lastName: userProfileData.profile.LAST_NAME,
      newPassword: userProfileData.profile.NEW_PASSWORD,
      phone: userProfileData.profile.PERSONAL_PHONE,
      secondName: userProfileData.profile.SECOND_NAME,
      sessionId: userProfileData.sessid,
    };
  }

  if (userData && isSuccess) {
    return {
      isAuth: userData.isAuth,
      name: userData.name,
      email: userData.email,
      ...profile,
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
  let profile = {};
  if (userProfileData) {
    profile = {
      birth: userProfileData.profile.PERSONAL_BIRTHDAY,
      childs: transformChilds(userProfileData.childs),
      error: "",
      isLoading: false,
      lastName: userProfileData.profile.LAST_NAME,
      newPassword: userProfileData.profile.NEW_PASSWORD,
      phone: userProfileData.profile.PERSONAL_PHONE,
      secondName: userProfileData.profile.SECOND_NAME,
      sessionId: userProfileData.sessid,
    };
  }
  // Transformation API data here //

  if (userData && userData.isSuccess) {
    return {
      isAuth: userData.data.isAuth,
      name: userData.data.name,
      email: userData.data.email,
      ...profile,
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
  user: User,
  profileData: UserProfileDataModel
) => {
  const params: UserProfileParamsData = {
    EMAIL: user.email,
    LAST_NAME: profileData.lastName,
    NAME: profileData.firstName,
    NEW_PASSWORD: profileData.newPassword,
    PERSONAL_BIRTHDAY: profileData.birth,
    PERSONAL_PHONE: profileData.phone,
    SECOND_NAME: profileData.secondName,
  };
  // Response API here //
  const response = await setUserProfileAPI(profileData.sessionId, params);
  // Response API  //
  return response;
};

export const setUserChildAdapter = async (child: UserChild[]) => {
  const children: UserChildrenData[] = child.map((child) => {
    return {
      id: child.id || "",
      name: child.name,
      birthday: child.birth,
      gender: child.gender,
    };
  });
  // Response API here //
  const response = await setUserChildAPI(children);
  // Response API  //

  return response.data;
};

export const removeUserChildAdapter = async (
  childId: string
): Promise<UserChild[]> => {
  const { data } = await removeUserChildAPI(childId);
  let userChilds: UserChild[] = [];
  if (data.length > 0) {
    userChilds = data.map((child) => {
      return {
        name: child.name,
        id: child.id,
        birth: child.birthday,
        gender: child.gender,
      };
    });
  }

  return userChilds;
};
