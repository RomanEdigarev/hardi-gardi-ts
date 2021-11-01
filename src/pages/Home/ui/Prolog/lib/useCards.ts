import { getCatalog } from "@/entities/Shop/lib";
import { Section } from "@/entities/Shop/Catalog/model";
import { toRaw, unref } from "vue";

type PrologCard = {
  color: string;
} & Section;

type PrologCards = {
  rows: PrologCard[][];
};

export const useCards = (): PrologCards => {
  const catalog = getCatalog();
  const sections = [...catalog.sections];
  const colors = ["FFC124", "5F73AA", "F27F94", "5F73AA"];
  const chunks = [];
  while (sections.length > 0) {
    const splice = sections.splice(0, 4).map((item) => toRaw(item));
    chunks.push(
      splice.map((card, index) => {
        return {
          ...card,
          color: colors[index],
        };
      })
    );
  }
  console.log(chunks);
  const rows: PrologCard[][] = chunks;

  return {
    rows,
  };
};
