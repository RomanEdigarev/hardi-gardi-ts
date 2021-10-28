import { Basket, BasketItem } from "@/services/api/model/Basket";
import { LayoutAPI } from "@/services/api/model/LayoutAPI";
import { actions } from "@storybook/addon-actions";

type OrderBasket = Basket;
type OrderComment = {
  fieldName: string;
  value: string;
};
type OrderCoupons = [];
export type OrderDeliveriesItem = {
  description: string;
  id: string;
  isChecked: true;
  logo: string;
  name: string;
  period: string;
  price: number;
  stores: [];
};
export type OrderPaySystemItem = {
  description: string;
  id: string;
  isChecked: true;
  logo: string;
  name: string;
  price: number;
};
type OrderPersonTypeItem = {
  id: string;
  isChecked: true;
  name: string;
};
type OrderPropsGroupItem = {
  code: string;
  description: string;
  fieldName: string;
  id: string;
  isRequired: true;
  name: string;
  type: string;
  value: string;
};

type OrderField<T> = {
  fieldName: string;
  items: T[];
};
type OrderDeliveries = OrderField<OrderDeliveriesItem>;
type OrderPaySystems = OrderField<OrderPaySystemItem>;
type OrderPersonType = OrderField<OrderPersonTypeItem>;
export type OrderPropsGroups = {
  code: string;
  id: string;
  name: string;
  props: OrderPropsGroupItem[];
};
export type OrderTotal = {
  sumDelivery: number;
  sumOrderDiscount: number;
  sumOrderFull: number;
  sumPaysystem: number;
  sumTotal: number;
  weight: number;
};

type OrderData = {
  basket: OrderBasket;
  comment: OrderComment;
  coupons: OrderCoupons;
  deliveries: OrderDeliveries;
  paySystems: OrderPaySystems;
  personType: OrderPersonType;
  propGroups: OrderPropsGroups[];
  total: OrderTotal;
};
export type OrderCreateForm = {
  action: "create";
  sessid: string;
  PERSON_TYPE: "1" | "2";
  PAY_SYSTEM_ID: "11" | "13";
  DELIVERY_ID: string;
  ORDER_DESCRIPTION: string;
  //ФИО
  ORDER_PROP_1: string;
  // Email
  ORDER_PROP_2: string;
  //Phone
  ORDER_PROP_3: string;
  //Subscribe
  ORDER_PROP_24?: "y" | "n";
  // Post index
  ORDER_PROP_4: string;
  // Location
  ORDER_PROP_6: string;
};

type OrderHistoryPayment = {
  number: string;
  name: string;
  price: number;
  isPaid: boolean;
  payUrl: string;
};
type OrderHistoryDelivery = {
  number: string;
  name: string;
  price: number;
  trackingNumber: string;
  status: {
    code: string;
    name: string;
  };
};
export type OrderHistoryItem = {
  id: string;
  date: string;
  status: {
    code: string;
    name: string;
  };
  price: number;
  deliveryAddress: string;
  isPayed: boolean;
  isCanceled: boolean;
  isDeducted: boolean;
  delivery: OrderHistoryDelivery[];
  payment: OrderHistoryPayment[];
  basket: BasketItem[];
};
export type OrderHistoryData = {
  orders: OrderHistoryItem[];
};

export type OrderHistoryList = LayoutAPI<OrderHistoryData>;
export type Order = LayoutAPI<OrderData>;
