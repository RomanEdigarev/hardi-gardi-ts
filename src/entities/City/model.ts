export type CityItem = string;
type CityId = string;

export type City = {
  current: CityId;
  items: {
    [key: string]: CityItem;
  };
  searchingItems?: City["items"];
};
