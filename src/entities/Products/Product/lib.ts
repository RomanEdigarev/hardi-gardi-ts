import { Product } from "./model";

export const useProduct = () => {
  const product: Product = {
    id: "201",
    title:
      '      "Набор пазлов «Веселые Зверята»Набор пазлов «Веселые Зверята»Набор пазлов «Веселые Зверята»Набор пазлов «Веселые Зверята»Набор пазлов «Веселые Зверята»Набор пазлов «Веселые Зверята»Набор пазлов «Веселые Зверята»Набор пазлов «Веселые Зверята»",\n',
    currentPrice: "500",
    prevPrice: "400",
    description:
      "В набор входит 3 вида пазлов:\n" +
      "«Веселая Африка», «Веселый паровозик», «Фигурки», «Веселый паровозик», «Фигурки», «Веселый паровозик» ...",
    img: `${
      process.env.NODE_ENV === "production" ? "app" : ""
    }/images/product-card.jpg`,
    isFavorite: false,
    characteristics: undefined,
    photos: [
      require("/src/pages/Product/ui/MainSlider/assets/thumbnail_0.jpg"),
      require("/src/pages/Product/ui/MainSlider/assets/thumbnail_1.jpg"),
      require("/src/pages/Product/ui/MainSlider/assets/thumbnail_2.jpg"),
    ],
  };

  return {
    product,
  };
};
