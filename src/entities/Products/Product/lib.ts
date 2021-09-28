import { Product } from "./model";

export const useProduct = () => {
  const product: Product = {
    id: 201,
    title: "Набор пазлов «Веселые Зверята»",
    photos: [""],
    currentPrice: "500",
    prevPrice: "400",
    description:
      "В набор входит 3 вида пазлов:\n" +
      "«Веселая Африка», «Веселый паровозик», «Фигурки», «Веселый паровозик», «Фигурки», «Веселый паровозик» ...",
    img: "/images/product-card.jpg",
    isFavorite: false,
    characteristics: undefined,
  };

  return {
    product,
  };
};
