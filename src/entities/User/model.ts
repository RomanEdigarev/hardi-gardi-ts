// Alias type //
type UserAuth = boolean;
type UserName = string;
type UserEmail = string;
type UserPassword = string;
// Alias type END //

export type UserRegistrationData = {
  name: UserName;
  email: UserEmail;
  password: UserPassword;
};
export type User = {
  isLoading?: boolean;
  isAuth: UserAuth;
  name: UserName;
  email: UserEmail;
};
