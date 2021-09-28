// Alias type
type Price = string | number;
type ImgPath = string;
type Article = string | number;
type Country = string;
type Age = string;
type Materials = string;
type Size = string;
type Weight = string;
type Gender = string;

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
  id: number;
  title: string;
  currentPrice: Price;
  prevPrice: Price;
  description?: string;
  img: ImgPath;
  isFavorite: boolean;
  characteristics?: Characteristics;
};
