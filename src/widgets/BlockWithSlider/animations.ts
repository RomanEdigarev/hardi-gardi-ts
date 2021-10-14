import anime from "animejs";

export const useAnimation = (
  content: HTMLElement,
  image: HTMLElement,
  completeFunction: () => void
) => {
  return anime
    .timeline()
    .add({
      targets: content,
      opacity: [1, 0],
      translateY: ["0%", "50%"],
      duration: 600,
      easing: "easeInOutBack",
      complete: (anim) => {
        if (anim.direction === "normal") {
          completeFunction();
          anim.reverse();
          anim.play();
        } else {
          anim.reverse();
        }
      },
    })
    .add(
      {
        targets: image,
        opacity: [1, 0],
        duration: 600,
        easing: "easeInOutBack",
        complete: (anim) => {
          if (anim.direction === "normal") {
            completeFunction();
            anim.reverse();
            anim.play();
          } else {
            anim.reverse();
          }
        },
      },
      0
    );
};
