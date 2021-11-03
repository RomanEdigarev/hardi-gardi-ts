import { Product } from "./model";
import { getProductByIdAPI } from "@/services/api/lib/products";

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

export const asyncUseProduct = async (id: number): Promise<Product> => {
  const { data } = await getProductByIdAPI(id);
  console.log(data);
  return {
    article: "",
    characteristics: undefined,
    currentPrice: data.price.sum,
    description: data.anonce,
    id: data.id,
    // img: "images/product-card.jpg",
    img: data.photos[0].src,
    isComplect: data.isComplect,
    isFavorite: false,
    linkProducts: [],
    parts: [],
    photos: [],
    prevPrice: data.price.oldSum,
    section: undefined,
    title: data.name,
  };
};
