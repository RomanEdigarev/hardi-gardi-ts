// *** AliasType *** //
type LinkName = string;
type LinkPath = string;
// *** AliasType END *** //

export type MenuLink = {
  name: LinkName;
  link: LinkPath;
};

export type TopMenu = {
  main: MenuLink[];
  tooltip: MenuLink[];
};
export type FooterMenu = MenuLink[];
export type Menu = {
  top: TopMenu;
  footer: FooterMenu;
};
