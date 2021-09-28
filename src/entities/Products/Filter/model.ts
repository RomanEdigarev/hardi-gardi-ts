// Alias Type //
type Section = {
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
  section: Section;
  tematics?: FilterTematics;
  gender: FilterGender;
  age: FilterAge;
  price: FilterPrice;
};
