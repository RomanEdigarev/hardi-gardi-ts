import { Product } from "./Product/model";
import { Filter } from "@/entities/Products/Filter/model";
import { Section } from "@/entities/Shop/Catalog/model";

export type ProductsPage = {
  value: number;
  products: Product[];
};

export type Products = {
  currentProduct: Product;
  favorites: Product[];
  isLoading: boolean;
  page: ProductsPage;
  filter: Filter | {};
  sections: Section[];
};
