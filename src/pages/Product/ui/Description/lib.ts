import { onMounted, ref } from "vue";
import anime from "animejs";

export const useDescription = (isClose: boolean) => {
  const isOpen = ref(!isClose);
  const main = ref<HTMLElement>(null);
  const content = ref<HTMLElement>(null);
  const titleContainer = ref<HTMLElement>(null);

  onMounted(() => {
    if (isClose) {
      content.value.style.maxHeight = "0";
      main.value.style.backgroundColor = "#fff";
      main.value.style.borderColor = "#D9DCE2";
      titleContainer.value.style.marginBottom = "0";
    }
  });
  const closeAnim = () => {
    const timeline = anime.timeline({
      autoplay: false,
    });
    timeline
      .add({
        targets: [content.value],
        maxHeight: ["1000px", "0"],
        opacity: [1, 0],
        duration: 200,
        easing: "linear",
      })
      .add(
        {
          targets: [titleContainer.value],
          marginBottom: ["25px", 0],
          duration: 200,
          easing: "linear",
        },
        0
      )
      .add(
        {
          targets: [main.value],
          backgroundColor: ["#ECF0F8", "#fff"],
          borderColor: ["rgba(0, 0, 0, 0)", "#D9DCE2"],
          easing: "linear",
          duration: 200,
        },
        0
      );
    return timeline;
  };
  const openAnim = () => {
    return anime
      .timeline({ autoplay: false })
      .add({
        targets: [content.value],
        maxHeight: [0, "1000px"],
        opacity: [0, 1],
        duration: 400,
        easing: "linear",
      })
      .add(
        {
          targets: [titleContainer.value],
          marginBottom: [0, "25px"],
          duration: 200,
          easing: "linear",
        },
        0
      )
      .add(
        {
          targets: [main.value],
          backgroundColor: ["#fff", "#ECF0F8"],
          borderColor: ["#D9DCE2", "rgba(0, 0, 0, 0)"],
          duration: 200,
          easing: "linear",
        },
        0
      );
  };

  const toggle = () => {
    if (isOpen.value) {
      closeAnim().play();
    } else {
      openAnim().play();
    }
    isOpen.value = !isOpen.value;
  };

  return {
    isOpen,
    main,
    content,
    titleContainer,
    toggle,
  };
};
