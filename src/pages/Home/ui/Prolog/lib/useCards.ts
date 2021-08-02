type PrologCard = {
  title: string,
  color: string
}

type PrologCards = {
  cards: PrologCard[]
}

export const useCards = () : PrologCards => {
  const cards = [
    {
      title: "Магнитные игры",
      color: "FFC124",
    },
    {
      title: "Рисуй-стирай",
      color: "5F73AA",
    },
    {
      title: "Пазлы",
      color: "F27F94",
    },
    {
      title: "Игры с бумагой",
      color: "5F73AA",
    },
  ];

  return {
    cards,
  };
};
