// Alias type //
import { LayoutAPI } from "@/services/api/model/LayoutAPI";

type UserAuth = boolean;
type UserName = string;
type UserLastName = string;
type UserSecondName = string;
type UserPhone = string;
type UserBirth = string;
type UserNewPassword = string;
type UserEmail = string;
export type UserProfileSession = string;

// Alias type END //
enum UserProfileParams {
  "EMAIL",
  "LAST_NAME",
  "NAME",
  "NEW_PASSWORD",
  "PERSONAL_BIRTHDAY",
  "PERSONAL_PHONE",
  "SECOND_NAME",
}

export type UserProfileParamsData = {
  [key in keyof typeof UserProfileParams]: string;
};

export type UserProfileData = {
  childs: [];
  profile: {
    EMAIL: UserEmail;
    LAST_NAME: UserLastName;
    NAME: UserName;
    NEW_PASSWORD: UserNewPassword;
    PERSONAL_BIRTHDAY: UserBirth;
    PERSONAL_PHONE: UserPhone;
    SECOND_NAME: UserSecondName;
  };
  sessid: UserProfileSession;
};

type UserInfoData = {
  isAuth: UserAuth;
  name: UserName;
  email: UserEmail;
};

export type UserInfo = LayoutAPI<UserInfoData>;
export type UserProfile = LayoutAPI<UserProfileData>;
