import { LayoutAPI } from "@/services/api/model/LayoutAPI";
import { Section } from "@/entities/Shop/Catalog/model";
import { SectionItem } from "@/services/api/model/Section";

// *** Alias Types ***  //
type ProductId = number;
type ProductCode = string;
type ProductName = string;
type ProductAnonce = string;
type ProductDescribe = string;
type ProductVideo = string;
type ProductIsComplect = boolean;
type ProductIsURL = string;
type ProductIsIMG = string;

type PhotoIcon = string;
type PhotoSrc = string;

type PriceSum = number;
type PriceCurrency = "RUB";
type PriceMeasure = "шт";
type PriceQuantity = number;

type PropsName = "Вес" | "Размеры" | "Артикул" | "Тематика" | "Пол";
type PropsValue = string;
// *** Alias Types END ***  //

type Photo = {
  ico: PhotoIcon;
  src: PhotoSrc;
};

type Price = {
  sum: PriceSum;
  oldSum: PriceSum;
  currency: PriceCurrency;
  measure: PriceMeasure;
  quantity: PriceQuantity;
};
type Props = {
  name: PropsName;
  value: PropsValue;
  isMainProp: boolean;
};

type Seo = {
  title: string;
  keywords: string;
  description: string;
};

export type LinkProduct = {
  id: ProductId;
  code: ProductCode;
  name: ProductName;
  url: ProductIsURL;
  img: ProductIsIMG;
  section: SectionItem;
  price: Price;
  can_buy: boolean;
};

export type ProductItem = {
  id: ProductId;
  code: ProductCode;
  name: ProductName;
  anonce: ProductAnonce;
  describe: ProductDescribe;
  img?: ProductIsIMG;
  img2?: ProductIsIMG;
  video: ProductVideo;
  photos: Photo[];
  section: Section;
  price: Price;
  props: Props[];
  seo: Seo;
  linkProducts: LinkProduct[];
  isComplect: ProductIsComplect;
  complectParts: LinkProduct[];
  complectWithProduct: [];
};

type ProductData = {
  products: ProductItem[];
};

export type Products = LayoutAPI<ProductData>;
