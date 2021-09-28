// *** Alias Types ***  //
import { LayoutAPI } from "@/services/api/model/LayoutAPI";

type SectionID = string;
type SectionCode = string;
type SectionName = string;
type SectionLink = string;
type SectionIMG = string;
// *** Alias Types END ***  //

export type SectionItem = {
  id: SectionID;
  code?: SectionCode;
  name: SectionName;
  link?: SectionLink;
  img?: SectionIMG;
};

type SectionData = {
  sections: SectionItem[];
};

export type Sections = LayoutAPI<SectionData>;
