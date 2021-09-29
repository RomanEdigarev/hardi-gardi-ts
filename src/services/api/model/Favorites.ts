import { LayoutAPI } from "@/services/api/model/LayoutAPI";
import { LinkProduct } from "@/services/api/model/Product";

export type FavoriteItemData = {
  [key: string]: number;
};

export type FavoritesData = {
  products: LinkProduct[];
  sort: {
    field: string;
    order: string;
  };
  page: {
    pgNum: number;
    pgSize: number;
    pgCount: number;
    itmCount: number;
  };
};

export type Favorites = LayoutAPI<FavoritesData>;
export type FavoriteItems = LayoutAPI<FavoriteItemData[]>;
