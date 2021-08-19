// *** AliasType *** //
type LinkName = string;
type LinkPath = string;
type Icon = string;

type TopMenu = MenuLink[];
type CatalogMenu = MenuLink[];
type FooterMenu = MenuLink[];
// *** AliasType END *** //

type MenuLink = {
  name: LinkName;
  link: LinkPath;
  icon: Icon;
  items?: MenuLink[];
};

export type Menu = {
  isSuccess: boolean;
  message: string;
  data: {
    top: TopMenu;
    catalog: CatalogMenu;
    footer: FooterMenu;
  };
};
