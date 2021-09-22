import { Product } from "./Product/model";

export type Products = {
  currentProduct: Product;
  favorites: Product[];
  isLoading: boolean;
};
