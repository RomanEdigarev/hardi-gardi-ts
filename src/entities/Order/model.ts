import { Basket } from "@/entities/Basket/model";

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
export type OrderHistoryItem = {
  number: number | string;
  code: string;
  status: {
    deliverStatus: string;
    isPayed: boolean;
  };
  date: string;
  basket: Basket;
  price: string | number;
  quantity: number;
  delivery: {
    address: string;
    type: string;
    name: string;
    price: number;
  };
  payment: OrderPaymentType;
};
export type Order = {
  id?: string;
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
  location: {
    index: string | number;
    address: string;
  };
  comment: string;
  sessId: string;
  historyOrderList?: {
    selectedOrder: OrderHistoryItem;
    orders: OrderHistoryItem[];
  };
};
