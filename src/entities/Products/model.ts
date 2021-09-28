import { Product } from "./Product/model";

export type ProductsPage = {
  value: number;
  products: Product[];
};
export type Products = {
  currentProduct: Product;
  favorites: Product[];
  isLoading: boolean;
  page: ProductsPage;
};
