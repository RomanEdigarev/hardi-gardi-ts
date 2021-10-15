// Alias type //
import { LayoutAPI } from "@/services/api/model/LayoutAPI";

type UserAuth = boolean;
type UserName = string;
type UserEmail = string;
// Alias type END //

type UserInfoData = {
  isAuth: UserAuth;
  name: UserName;
  email: UserEmail;
};

export type UserInfo = LayoutAPI<UserInfoData>;
