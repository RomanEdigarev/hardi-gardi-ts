import { LayoutAPI } from "@/services/api/model/LayoutAPI";

export type MainPagePromoData = {
  items?: MainPagePromoItem[];
};

export type MainPagePromoItem = {
  button?: Button;
  id?: number;
  img?: string;
  name?: string;
  text?: string;
  video?: string;
};

export interface Button {
  name?: string;
  url?: string;
}

export type MainPagePromo = LayoutAPI<MainPagePromoData>;
