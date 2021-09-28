type SectionName = string;
type SectionsLink = string;
type SectionIcon = string;
type SectionID = string;

export type Section = {
  id?: SectionID;
  name: SectionName;
  icon: SectionIcon;
  link: SectionsLink;
  sections?: Section[];
};

export type Catalog = {
  sections: Section[];
};
