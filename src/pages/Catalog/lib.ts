import { ref } from "vue";
import anime from "animejs";
import { getCatalog } from "@/entities/Shop/lib";
import { Section } from "@/entities/Shop/Catalog/model";

export const useMobileFilter = () => {
  // Show Mobile Filter //
  const filter = ref<HTMLElement>(null);
  const filterBG = ref<HTMLElement>(null);
  const showFilterMobile = () => {
    filterBG.value.style.display = "block";
    anime
      .timeline()
      .add({
        targets: filter.value,
        translateX: ["-100%", "0%"],
        easing: "spring(1, 70, 13, 0)",
        complete: () => {
          document.documentElement.style.overflow = "hidden";
        },
      })
      .add(
        {
          targets: filterBG.value,
          opacity: [0, 0.7],
          duration: 400,
          easing: "linear",
        },
        300
      );
  };

  const hideFilterMobile = () => {
    anime
      .timeline()
      .add({
        targets: filter.value,
        translateX: ["0%", "-100%"],
        easing: "spring(1, 70, 13, 0)",
      })
      .add(
        {
          targets: filterBG.value,
          opacity: [0.7, 0],
          duration: 400,
          easing: "linear",
          complete: () => {
            filterBG.value.style.display = "none";
            document.documentElement.style.overflow = "visible";
          },
        },
        300
      );
  };
  // Show Mobile Filter //
  return {
    filter,
    filterBG,
    showFilterMobile,
    hideFilterMobile,
  };
};
export const defineTitle = (props) => {
  const catalog = getCatalog();

  // Define Title //
  const searchSectionByParams = (link: string, items: Section[]): Section => {
    const result = items.find((item) => {
      return item.link.includes(link);
    });
    return result;
  };
  const section = searchSectionByParams(
    props.section as string,
    catalog.sections
  );
  const subsection = searchSectionByParams(
    props.subsection as string,
    section.sections
  );
  const title = subsection?.name || section.name;
  // Define Title END //

  return {
    title,
  };
};
