import { LayoutAPI } from "@/services/api/model/LayoutAPI";

type BasketProduct = {
  id: string;
  name: string;
  url: string;
  img: string;
  article: string;
};
type BasketItem = {
  currency: string;
  id: string;
  isAvailable: boolean;
  isPackage: boolean;
  measure: "шт";
  priceDiscount: number;
  priceFull: number;
  priceTotal: number;
  product: BasketProduct;
  props: [];
  quantity: number;
  sumDiscount: number;
  sumFull: number;
  sumTotal: number;
};
export type BasketData = {
  items: BasketItem[];
  coupons: [];
  box: [];
  total: {
    sumFull: 0;
    sumDiscount: 0;
    sumTotal: 0;
    weight: 0;
  };
};

export type AddToBasketData = {
  id: number | string;
  quantity: number;
};

export type Basket = LayoutAPI<BasketData>;
