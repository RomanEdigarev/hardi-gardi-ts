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
    id: response.id,
    currentPrice: response.price.sum,
    prevPrice: response.price.oldSum,
    description: response.anonce,
    img: response.photos[0].src,
    isFavorite: false,
    title: response.name,
    photos: response.photos.map((photo) => photo.src),
    characteristics,
    linkProducts: response.linkProducts.map((linkProduct) => {
      return {
        id: linkProduct.id,
        title: linkProduct.name,
        prevPrice: linkProduct.price.sum,
        currentPrice: linkProduct.price.oldSum,
        img: linkProduct.img,
        isFavorite: false,
      };
    }),
    parts: response.complectParts.map((partProduct) => {
      return {
        id: partProduct.id,
        title: partProduct.name,
        prevPrice: partProduct.price.sum,
        currentPrice: partProduct.price.oldSum,
        img: partProduct.img,
        isFavorite: false,
      };
    }),
    isComplect: response.isComplect,
  };
  // Transformation API data here //

  return product;
};
