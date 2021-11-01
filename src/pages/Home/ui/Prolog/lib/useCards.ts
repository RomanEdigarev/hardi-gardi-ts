import { getCatalog } from "@/entities/Shop/lib";
import { Section } from "@/entities/Shop/Catalog/model";

type PrologCard = {
  color: string;
} & Section;

type PrologCards = {
  cards: PrologCard[];
};

export const useCards = (): PrologCards => {
  const catalog = getCatalog();
  const sections = [...catalog.sections];
  const colors = ["FFC124", "5F73AA", "F27F94", "5F73AA"];
  const chuncks = [];
  while (sections.length > 0) {}
  const titles = sections.splice(0, 4).map((item) => item.name);
  const cards: PrologCard[] = titles.map((title, index) => {
    return {
      ...catalog.sections[index],
      color: colors[index],
    };
  });

  return {
    cards,
  };
};
