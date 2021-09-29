import { Product } from "@/entities/Products/Product/model";

export type Favorites = {
  products: Product[];
  totalCount: number;
  isLoading?: boolean;
};
