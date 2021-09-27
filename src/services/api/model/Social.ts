// Alias Type //
import { LayoutAPI } from "@/services/api/model/LayoutAPI";

type SocialID = string;
type SocialName = string;
type SocialIMG = string;
type SocialURL = string;
// Alias Type END //

type SocialItem = {
  id: SocialID;
  name: SocialName;
  img: SocialIMG;
  url: SocialURL;
};
type SocialData = {
  items: SocialItem[];
};

export type Social = LayoutAPI<SocialData>;
