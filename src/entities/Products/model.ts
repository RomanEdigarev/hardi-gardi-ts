import { Product } from "./Product/model";
import { Section } from "@/entities/Shop/Catalog/model";
import { Filters } from "@/entities/Products/Filter/model";

export type ProductsPage = {
  value: number;
  products: Product[];
};

export type CurrentFilter = {
  [key: string]: string | number;
};

enum SortFields {
  'price',
  'popular',
  'news'
}

enum SortOrder {
  'asc', 'desc'
}

export type Sorting = {
  sortField : keyof typeof SortFields,
  sortOrder: keyof typeof SortOrder
}

export type Products = {
  currentProduct: Product;
  isLoading: boolean;
  page: ProductsPage;
  filters: Filters;
  currentFilter: CurrentFilter;
  sections: Section[];
  best?: Product[];
  new?: Product[];
  sale?: Product[];
  best_set?: Product[];
  sorting?: Sorting
};
