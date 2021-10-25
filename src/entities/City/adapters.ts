import { City, CityItem } from "@/entities/City/model";
import {
  getAllCitiesAPI,
  getUserCityAPI,
  searchByStringAPI,
  setNewUserCityAPI,
} from "@/services/api/lib/city";

export const getAllCitiesAdapter = async (): Promise<City["items"]> => {
  const { data: citiesItems } = await getAllCitiesAPI();
  // const { data: currentCity } = await getUserCityAPI();
  // console.log(currentCity);
  let cities: City["items"] = {};
  citiesItems.cities.forEach((city) => {
    cities[city.id] = city.name;
  });
  return cities;
};

// export const getUserCityAdapter = async () => {
//   const response = getUserCityAPI()
//   return response
// }
export const setNewUserCityAdapter = async (
  id: string
): Promise<City["items"]> => {
  const { data } = await setNewUserCityAPI(id);
  let city: City["items"] = {
    [data.id]: data.name,
  };
  return city;
};

export const searchByStringAdapter = async (string): Promise<City["items"]> => {
  const { data } = await searchByStringAPI(string);
  let searchCities: City["items"] = {};
  data.cities.forEach((city) => {
    searchCities[city.id] = city.name;
  });
  return searchCities;
};
