import { Product } from "../model";

export const useProduct = (): { product: Product } => {
  const product: Product = {
    title: "Набор пазлов «Веселые Зверята»",
    article: "3900005",
    currentPrice: "500",
    prevPrice: "400",
    description:
      "В набор входит 3 вида пазлов:\n" +
      "«Веселая Африка», «Веселый паровозик», «Фигурки», «Веселый паровозик», «Фигурки», «Веселый паровозик» ...",
    img: "/dist/images/product-card.jpg",
    isFavorite: false,
  };

  return {
    product,
  };
};
