type SectionName = string;
type SectionsLink = string;
type SectionIcon = string;

export type Section = {
  name: SectionName;
  icon: SectionIcon;
  link: SectionsLink;
  sections?: Section[];
};

export type Catalog = {
  sections: Section[];
};
