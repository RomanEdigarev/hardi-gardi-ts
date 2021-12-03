// Alias type
import { Section } from "@/entities/Shop/Catalog/model";

type Price = string | number;
type ImgPath = string;
type Article = string | number;
type Country = string;
type Age = string;
type Materials = string;
type Size = string;
type Weight = string;
type Gender = string;
export type ProductPhoto = string;

export type Characteristics = {
  article: Article;
  country?: Country;
  age?: Age;
  materials?: Materials;
  size: Size;
  weight: Weight;
  gender: Gender;
};

export type Product = {
  id: number | string;
  title: string;
  currentPrice?: Price;
  prevPrice?: Price;
  img: ImgPath;
  img2?: ImgPath;
  article?: string;
  isFavorite?: boolean;
  description?: string;
  characteristics?: Characteristics;
  photos?: ProductPhoto[];
  linkProducts?: Product[];
  isComplect?: boolean;
  parts?: Product[];
  section?: Section;
};
