import { MenuLink } from "@/entities/Shop/Menu/model";
import { getCatalog } from "@/entities/Shop/lib";
import { Section } from "@/entities/Shop/Catalog/model";

export const useCatalogSubmenu = () => {
  const catalog = getCatalog();
  const copyItems = [...(catalog.sections as Section[])];
  let columns = {
    0: [],
    1: [],
    2: [],
  };
  let result = [];
  const tmp = [];
  while (copyItems.length > 0) {
    tmp.push(copyItems.splice(0, 3));
  }
  tmp.forEach((arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i] && columns[i].push(arr[i]);
    }
  });

  for (let key in columns) {
    result.push(columns[key]);
  }

  return {
    result,
  };
};
