import { Product } from "@/entities/Products/Product/model";

export type Search = {
  query: string;
  results: Product[];
  isLoading?: boolean;
};
