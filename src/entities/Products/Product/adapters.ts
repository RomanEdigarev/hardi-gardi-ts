import { getProductAPI } from "@/services/api";
import { Characteristics, Product } from "./model";

export const getProductAdapter = async (id: number): Promise<Product> => {
  // Response API here //
  const response = await getProductAPI(id);
  // Response API  //

  const weight = response.props.find((prop) => {
    return prop.name === "Вес";
  }).value;

  const article = response.props.find((prop) => {
    return prop.name === "Артикул";
  }).value;

  const size = response.props.find((prop) => {
    return prop.name === "Размеры";
  }).value;

  const gender = response.props.find((prop) => {
    return prop.name === "Пол";
  }).value;
  const characteristics: Characteristics = {
    weight,
    article,
    size,
    gender,
  };

  // Transformation API data here //
  const product: Product = {
    currentPrice: response.price.sum,
    prevPrice: response.price.oldSum,
    description: response.anonce,
    img: response.photos[0].src,
    isFavorite: false,
    title: response.name,
    characteristics,
  };
  // Transformation API data here //

  return product;
};
