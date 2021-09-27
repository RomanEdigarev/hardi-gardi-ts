import { Contacts } from "./Contacts/model";
import { Catalog } from "./Catalog/model";
import { Menu } from "./Menu/model";
import { History } from "./History/model";
import { Social } from "@/entities/Shop/Social/model";

export type Shop = {
  contacts: Contacts;
  catalog: Catalog;
  menu: Menu;
  history: History;
  social: Social;
};
