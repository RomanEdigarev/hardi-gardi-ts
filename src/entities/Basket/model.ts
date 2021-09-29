import { Product } from "@/entities/Products/Product/model";

export type AddToBasketData = {
  id: string | number;
  quality: number;
};

export type BasketItem = {
  product: Product;
  quantity: number;
  positionID: string | number;
};
export type Basket = {
  products: BasketItem[];
  sumOld: number;
  sumDiscount: number;
  sumTotal: number;
  isLoading?: boolean;
};
