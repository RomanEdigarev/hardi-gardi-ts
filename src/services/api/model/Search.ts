import { LayoutAPI } from "@/services/api/model/LayoutAPI";
import { ProductItem } from "@/services/api/model/Product";

export type SearchQuery = {
  q: string;
  pageSize: string;
};
export type SearchData = {
  products: ProductItem[];
};
export type Search = LayoutAPI<SearchData>;
