// Alias Type //
export type FilterSection = {
  id: string;
  name: string;
};
type FilterTematics = string;
type FilterGender = "male" | "female";
type FilterAge = string;
type FilterPrice = {
  max: number;
  min: number;
};
// Alias Type END  //

export type Filter = {
  section?: FilterSection;
  tematics?: FilterTematics;
  gender?: FilterGender;
  age?: FilterAge;
  price?: FilterPrice;
};
