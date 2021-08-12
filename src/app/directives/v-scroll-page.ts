export const VScrollPage = {
  name: "scroll-page",
  mounted(el, binding) {
    el.addEventListener("click", () => {
      const position = binding.value === "up" ? "top" : "bottom";

      window.scrollTo({
        [position]: 0,
        behavior: "smooth",
      });
    });
  },
};
