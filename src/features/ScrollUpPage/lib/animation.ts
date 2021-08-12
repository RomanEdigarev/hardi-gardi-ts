import anime from "animejs";

export const animationToggleVisible = (
  target: HTMLElement,
  isShow: boolean
) => {
  anime({
    targets: target,
    opacity: isShow ? [0, 1] : [1, 0],
    duration: 200,
    easing: "linear",
  });
};
