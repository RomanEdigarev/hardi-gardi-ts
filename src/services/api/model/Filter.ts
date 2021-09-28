// Alias Type //
import { LayoutAPI } from "@/services/api/model/LayoutAPI";

type FilterName = string;
type FilterLabel = string;
type FilterIMG = string;
type FilterID = number;
// Alias Type END //

type FilterValue = {
  name: FilterName;
  value: string;
  isChecked: boolean;
  isDisabled: boolean;
  label: FilterLabel;
  img: FilterIMG;
};
enum FilterCode {
  "section",
  "AGE",
  "MATERIAL",
  "SKU_GENDER",
  "ATT_BRAND",
  "BASE",
}

type FilterItem = {
  id: FilterID;
  code: keyof typeof FilterCode;
  name: FilterName;
  values: FilterValue[];
};

export type FilterData = {
  form: {
    url: string;
    setFilter: string;
    clearFilter: string;
    hidden: [];
  };
  items: FilterItem[];
  elementCount: 90;
};
export type Filter = LayoutAPI<FilterData>;
