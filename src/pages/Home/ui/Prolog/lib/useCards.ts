import { getCatalog } from "@/entities/Shop/lib";

type PrologCard = {
  title: string;
  color: string;
};

type PrologCards = {
  cards: PrologCard[];
};

export const useCards = (): PrologCards => {
  const catalog = getCatalog();
  const titles = catalog.sections.slice(0, 4).map((item) => item.name);
  const colors = ["FFC124", "5F73AA", "F27F94", "5F73AA"];
  const cards = titles.map((title, index) => {
    return {
      title,
      color: colors[index],
    };
  });

  return {
    cards,
  };
};
