import { getSectionsAPI } from "@/services/api/lib/products";
import { Section } from "@/entities/Shop/Catalog/model";
import { Filters, FilterValue } from "@/entities/Products/Filter/model";
import { getAllFiltersAPI } from "@/services/api/lib/filter";

export const getSectionsAdapter = async (): Promise<Section[]> => {
  // Response API here //
  const response = await getSectionsAPI();
  // Response API  //
  // Transformation API data here //
  // Transformation API data here //
  return response.data.sections.map((section) => {
    return {
      id: section.id,
      name: section.name,
      icon: section.img,
      link: section.link,
    };
  });
};

export const getFiltersAdapter = async (): Promise<{
  filters: Filters;
  sections: Section[];
}> => {
  // Response API here //
  const response = await getAllFiltersAPI();
  // Response API  //

  // Transformation API data here //
  const filters: Filters = response.data.items
    .filter((item) => item.code !== "section")
    .map((item) => {
      return {
        id: item.id,
        name: item.name,
        code: item.code,
        values: item.values,
      };
    });

  const sectionValues: FilterValue[] = response.data.items.filter(
    (item) => item.code === "section"
  )[0].values as FilterValue[];

  const sections: Section[] = sectionValues.map((sectionValue) => {
    return {
      id: sectionValue.name.match(/\d+/) + "",
      name: sectionValue.label,
      icon: "",
      link: "",
    };
  });
  // Transformation API data here //
  return {
    filters,
    sections,
  };
};
