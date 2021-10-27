export type OrderContactPerson = {
  name: string;
  lastName: string;
  phone: string;
  email: string;
};
type OrderDeliveryType = "self" | "courier" | "post";
type OrderDeliveryId = string;
export type OrderDeliveryVariant = {
  name: string;
  price: string | number;
  time: string;
  comment: string;
  type: OrderDeliveryType;
  id: OrderDeliveryId;
};
type OrderDelivery = {
  // type: OrderDeliveryType;
  [key in OrderDeliveryType]: OrderDeliveryVariant[];
};
export type OrderPaymentType = "onSite" | "onDeliver";
export type OrderTotalPrice = {
  delivery: number;
  products: number;
  sale: number;
  total: number;
};
export type Order = {
  isLoading?: boolean;
  contactPerson?: OrderContactPerson;
  delivery: {
    current: OrderDeliveryId;
    items: OrderDelivery;
  };
  payment: {
    current: OrderPaymentType;
    items: OrderPaymentType[];
  };
  price: OrderTotalPrice;
  comment: string;
  sessId: string;
};
