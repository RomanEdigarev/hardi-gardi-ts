// *** AliasType *** //
type LinkName = string;
type LinkPath = string;
type Icon = string;
// *** AliasType END *** //

export type MenuLink = {
  name: LinkName;
  link: LinkPath;
  icon: Icon;
  items?: MenuLink[];
};

export type TopMenu = MenuLink[];
export type CatalogMenu = MenuLink[];
export type FooterMenu = MenuLink[];
export type Menu = {
  top: TopMenu;
  catalog: CatalogMenu;
  footer: FooterMenu;
};
