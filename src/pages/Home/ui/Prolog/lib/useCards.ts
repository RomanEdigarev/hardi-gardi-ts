import { getCatalog } from "@/entities/Shop/lib";
import { Section } from "@/entities/Shop/Catalog/model";
import { getCurrentInstance, toRaw } from "vue";
import { useStore } from "@/services/vuex";

type PrologCard = {
  color: string;
} & Section;

type PrologCards = PrologCard[][];

export const useCards = (itemsInRow): PrologCards => {
  const store = useStore();

  const catalog = store.getters["shop/getCatalog"];
  const sections = [...catalog.sections];
  const colors = ["FFC124", "F27F94", "5F73AA", "FFC124"];
  const chunks = [];
  while (sections.length > 0) {
    const splice = sections.splice(0, itemsInRow).map((item) => toRaw(item));
    chunks.push(
      splice.map((card, index) => {
        return {
          ...card,
          color: colors[index],
        };
      })
    );
  }
  const rows: PrologCard[][] = chunks;

  return rows;
};
