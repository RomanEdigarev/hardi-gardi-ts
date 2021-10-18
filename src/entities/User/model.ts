// Alias type //
type UserAuth = boolean;
type UserName = string;
type UserLastName = string;
type UserSecondName = string;
type UserNewPassword = string;
type UserPhone = string;
type UserEmail = string;
type UserPassword = string;
type UserGender = "male" | "female";
type UserBirth = string;
export type UserSessionId = string;
export type UserErrorMessage = string;
// Alias type END //

export type UserChild = {
  name: UserName;
  gender: UserGender;
  birth: UserBirth;
};
export type UserRegistrationData = {
  name: UserName;
  email: UserEmail;
  password: UserPassword;
};

export type User = {
  isLoading?: boolean;
  error?: UserErrorMessage;
  isAuth: UserAuth;
  name: UserName;
  email: UserEmail;
  lastName: UserLastName;
  secondName: UserSecondName;
  newPassword: UserNewPassword;
  phone: UserPhone;
  birth: UserBirth;
  childs: UserChild[];
  sessionId: UserSessionId;
};