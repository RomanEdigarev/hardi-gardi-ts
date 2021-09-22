// *** Alias Types ***  //
type SectionID = string;
type SectionCode = string;
type SectionName = string;
type SectionLink = string;
type SectionIMG = string;
// *** Alias Types END ***  //

export type Section = {
  id: SectionID;
  code: SectionCode;
  name: SectionName;
  link?: SectionLink;
  img?: SectionIMG;
};
