// *** AliasType *** //
import { LayoutAPI } from "@/services/api/model/LayoutAPI";

type LinkName = string;
type LinkPath = string;
type Icon = string;

type TooltipMenuID = string;
type TooltipMenuName = string;
type TooltipMenuIMG = string;
type TooltipMenuURL = string;
type TooltipMenuColorBG = string;
type TooltipMenuColorText = string;

type TopMenu = MenuLink[];
export type CatalogMenu = MenuLink[];
type FooterMenu = MenuLink[];
// *** AliasType END *** //

type TooltipMenuLink = {
  id: TooltipMenuID;
  name: TooltipMenuName;
  img: TooltipMenuIMG;
  url: TooltipMenuURL;
  colorBg: TooltipMenuColorBG;
  colorText: TooltipMenuColorText;
};

export type TooltipMenu = {
  isSuccess: boolean;
  message: string;
  data: {
    items: TooltipMenuLink[];
  };
};

type MenuLink = {
  name: LinkName;
  link: LinkPath;
  icon: Icon;
  items?: MenuLink[];
  id?: string;
};
type MenuData = {
  top: TopMenu;
  catalog: CatalogMenu;
  footer: FooterMenu;
};
export type Menu = LayoutAPI<MenuData>;
