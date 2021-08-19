export const VBlockScroll = {
  name: "block-scroll",
  mounted(el, binding) {
    el.addEventListener("click", () => {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    });
  },
};
