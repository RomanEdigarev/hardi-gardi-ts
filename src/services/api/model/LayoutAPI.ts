export type LayoutAPI<T> = {
  isSuccess: boolean;
  code: string;
  message: string;
  data: T;
};
