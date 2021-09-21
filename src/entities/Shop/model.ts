import { Contacts } from "./Contacts/model";
import { Catalog } from "./Catalog/model";
import { Menu } from "./Menu/model";

export type Shop = {
  contacts: Contacts;
  catalog: Catalog;
  menu: Menu;
};
