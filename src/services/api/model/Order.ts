import { Basket } from "@/services/api/model/Basket";
import { LayoutAPI } from "@/services/api/model/LayoutAPI";

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

export type Order = LayoutAPI<OrderData>;
