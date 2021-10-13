import anime from "animejs";

export const useShapeBounceAnimation = (target) => {
  return anime({
    autoplay: false,
    targets: target,
    keyframes: [
      { rotate: "0deg", scale: "1" },
      { rotate: "4deg", scale: "1.02" },
      { rotate: "-1deg", scale: "1.08" },
    ],
    translateY: ["-50%", "-50%"],
    translateX: ["-50%", "-50%"],

    loop: true,
    delay: 1500,
    duration: 600,
    direction: "alternate",
    easing: "linear",
  });
};

export const useShapeRotateAnimation = (target) => {
  return anime({
    autoplay: false,
    targets: target,
    rotate: "10deg",
    translateY: ["-50%", "-50%"],
    translateX: ["-50%", "-50%"],
    keyframes: [{ rotate: "6deg" }, { rotate: "-6deg" }, { rotate: "0deg" }],
    loop: true,
    delay: 600,
    direction: "alternate",
    easing: "spring(1, 80, 10, 0)",
  });
};

export const starAnimation = (targets) => {
  return anime({
    autoplay: false,
    targets,
    width: {
      value: ["100%"],
      duration: 300,
    },
    height: {
      value: ["100%"],
      duration: 300,
    },
    ["-webkit-mask-size"]: {
      value: ["71%", "340%"],
      duration: 400,
    },
    left: ["63%", "50%"],
    top: ["16%", "50%"],
    zIndex: [0, 1],
    duration: 600,
    begin: (anim) => {
      anim.animatables[0].target.style.zIndex = "1";
    },
    complete: (anim) => {
      if (anim.direction === "normal") {
        anim.direction = "reverse";
      } else {
        anim.direction = "normal";
        anim.animatables[0].target.style.zIndex = "0";
      }
    },
    easing: "easeInOutCubic",
  });
};

export const charAnimation = (targets) => {
  return anime({
    autoplay: false,
    targets,
    left: ["25%", "50%"],
    top: ["10%", "25%"],
    width: {
      value: ["100%"],
      duration: 300,
    },
    height: {
      value: ["100%"],
      duration: 300,
    },
    ["-webkit-mask-size"]: {
      value: ["71%", "340%"],
      duration: 400,
    },
    ["-webkit-mask-position"]: {
      value: ["95% 30%"],
      duration: 400,
    },
    zIndex: [0, 1],
    duration: 600,
    begin: (anim) => {
      anim.animatables[0].target.style.zIndex = "1";
    },
    complete: (anim) => {
      if (anim.direction === "normal") {
        anim.direction = "reverse";
      } else {
        anim.direction = "normal";
        anim.animatables[0].target.style.zIndex = "0";
      }
    },
    easing: "easeInOutCubic",
  });
};

export const gammaAnimation = (targets) => {
  return anime({
    autoplay: false,
    targets,
    width: {
      value: ["12%", "100%"],
      duration: 300,
    },
    height: {
      value: ["12%", "100%"],
      duration: 300,
    },
    ["-webkit-mask-size"]: {
      value: ["71%", "340%"],
      duration: 400,
    },
    ["-webkit-mask-position"]: {
      value: ["95% 34%"],
      duration: 400,
    },
    left: ["76%", "50%"],
    top: ["34%", "25%"],
    zIndex: [0, 1],
    duration: 600,
    begin: (anim) => {
      anim.animatables[0].target.style.zIndex = "1";
    },
    complete: (anim) => {
      if (anim.direction === "normal") {
        anim.direction = "reverse";
      } else {
        anim.direction = "normal";
        anim.animatables[0].target.style.zIndex = "0";
      }
    },
    easing: "easeInOutCubic",
  });
};
