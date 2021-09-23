import { Product } from "./model";

export const useProduct = () => {
  const product: Product = {
    title: "Набор пазлов «Веселые Зверята»",
    currentPrice: "500",
    prevPrice: "400",
    description:
      "В набор входит 3 вида пазлов:\n" +
      "«Веселая Африка», «Веселый паровозик», «Фигурки», «Веселый паровозик», «Фигурки», «Веселый паровозик» ...",
    img: "public/images/product-card.jpg",
    isFavorite: false,
    characteristics: undefined,
  };

  return {
    product,
  };
};
