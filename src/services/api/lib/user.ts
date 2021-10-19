import { AddToBasketData, Basket } from "@/services/api/model/Basket";
import { apiInstance } from "@/services/api/config";
import {
  UserChildren,
  UserChildrenData,
  UserInfo,
  UserProfile,
  UserProfileParamsData,
  UserProfileSession,
} from "@/services/api/model/User";

const getStrQueryFromObject = (object) => {
  const arr = [];
  Object.entries(object).map(([key, value]) => {
    arr.push(`${key}=${value}`);
  });
  return arr.join("&");
};

export const getUserAuthInfoAPI = async (): Promise<UserInfo> => {
  try {
    const { data, status } = await apiInstance().post(`user/auth/get.php`);
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const registrationUserAPI = async ({
  name,
  email,
  password,
}): Promise<UserInfo> => {
  try {
    const { data, status } = await apiInstance().post(
      `user/auth/registration.php?name=${name}&email=${email}&password=${password}`
    );
    if (status === 200) {
      return data;
    } else {
      return data.message;
    }
  } catch (e) {
    console.log(e);
  }
};

export const loginUserAPI = async ({
  email,
  password,
  remember,
}): Promise<UserInfo> => {
  try {
    const { data, status } = await apiInstance().post(
      `user/auth/login.php?login=${email}&password=${password}&remember=${remember}`
    );
    if (status === 200) {
      return data;
    } else {
      return data.message;
    }
  } catch (e) {
    console.log(e);
  }
};
export const logoutUserAPI = async (): Promise<boolean> => {
  try {
    const { data, status } = await apiInstance().post(`user/auth/logout.php`);
    if (status === 200 && data.isSuccess) {
      return data.isSuccess;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getUserProfileAPI = async (): Promise<UserProfile> => {
  try {
    const { data, status } = await apiInstance().post(`user/auth/profile.php`);
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      return data.message;
    }
  } catch (e) {
    console.log(e);
  }
};

export const setUserProfileAPI = async (
  sessionId: UserProfileSession,
  params: UserProfileParamsData
): Promise<UserProfile> => {
  const strArr = Object.entries(params).map(([key, value]) => {
    return `${key}=${value}`;
  });
  const queryStr = strArr.join("&");
  try {
    const { data, status } = await apiInstance().post(
      `user/auth/profile.php?save=y&sessid=${sessionId}&${queryStr}`
    );
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      return data.message;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getUserChildsAPI = async (): Promise<UserChildren> => {
  try {
    const { data, status } = await apiInstance().post(`user/childs/get.php`);
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      return data.message;
    }
  } catch (e) {
    console.log(e);
  }
};

export const setUserChildAPI = async (child: UserChildrenData[]) => {
  const arrStr = child
    .map((child) => {
      return getStrQueryFromObject(child);
    })
    .join("&");
  try {
    const { data, status } = await apiInstance().post(
      `user/childs/save.php?${arrStr}`
    );
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      return data.message;
    }
  } catch (e) {
    console.log(e);
  }
};

export const removeUserChildAPI = async (
  childId: string
): Promise<UserChildren> => {
  try {
    const { data, status } = await apiInstance().post(
      `user/childs/delete.php?id=${childId}`
    );
    if (status === 200 && data.isSuccess) {
      return data;
    } else {
      return data.message;
    }
  } catch (e) {
    console.log(e);
  }
};
