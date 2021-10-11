import { LayoutAPI } from "@/services/api/model/LayoutAPI";

type Form = {
  url: string;
  setFilter: string;
  clearFilter: string;
  hidden: [];
};
enum FilterCode {
  "section",
  MATERIAL,
  AGE,
  SKU_GENDER,
  ATT_BRAND,
  BASE,
}

type FilterValuesPrice = {
  min: {
    name: "arrFilter_P1_MIN";
    value: number;
  };
  max: {
    name: "arrFilter_P1_MAX";
    value: number;
  };
};
type FilterValue = {
  name: string;
  value: string;
  isChecked: boolean;
  isDisabled: boolean;
  label: string;
  img: string;
};

type FilterItem = {
  id: string;
  code: keyof typeof FilterCode;
  name: string;
  type: string;
  values: FilterValue[] | FilterValuesPrice;
};

export type Filters = LayoutAPI<{ form: Form; items: FilterItem[] }>;
