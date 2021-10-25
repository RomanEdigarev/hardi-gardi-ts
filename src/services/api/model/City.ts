import { LayoutAPI } from "@/services/api/model/LayoutAPI";

export type CityItem = {
  id: string;
  name: string;
};
type CityData = {
  cities: CityItem[];
};
export type City = LayoutAPI<CityData>;
