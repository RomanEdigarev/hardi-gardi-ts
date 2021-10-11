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
export type FilterValue = {
  name: string;
  value: string;
  isChecked: boolean;
  isDisabled: boolean;
  label: string;
  img: string;
};

// export type FilterValues = FilterValue | FilterValuesPrice;
type FilterItem = {
  id: string;
  name: string;
  code: string;
  values: FilterValue[] | FilterValuesPrice;
};

export type Filters = FilterItem[];
