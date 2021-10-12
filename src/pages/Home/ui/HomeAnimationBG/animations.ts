import anime from "animejs";

export const useShapeAnimation = (target) => {
  return anime({
    autoplay: false,
    targets: target,
    rotate: "-8deg",
    translateY: "1%",
    scale: "1.08",
    loop: true,
    delay: 2500,
    direction: "alternate",
    // easing: "spring(1, 80, 10, 10)",
    easing: "easeInOutElastic(1, .8)",
  });
};

const newTimeLine = anime.timeline({});

// const toggleVideo = () => {
//   shapeAnimation.pause();
//
//   newTimeLine
//     .add({
//       autoplay: true,
//       targets: shapeForth.value,
//       width: {
//         value: "100%",
//         duration: 700,
//       },
//       left: "0",
//       top: "100px",
//       maskImage: "none",
//       ["-webkit-mask-size"]: {
//         value: "1000%",
//         duration: 700,
//       },
//       ["-webkit-mask-position"]: {
//         value: "77% 27%",
//         duration: 200,
//       },
//       height: {
//         value: "70vh",
//         duration: 700,
//       },
//       easing: "linear",
//     })
//     .add(
//       {
//         targets: videoContainerShapeForth.value,
//         backgroundColor: ["#5F73AA", "#fff"],
//         // opacity: [0, 1],
//         duration: 700,
//       },
//       100
//     )
//     .add(
//       {
//         targets: videoShapeForth.value,
//         left: "-89%",
//         top: "-44%",
//         translateX: "50%",
//         width: ["100%", "140%"],
//         height: ["100%", "140%"],
//         duration: 100,
//         complete: (anim) => {
//           videoShapeForth.value.style.opacity = "1";
//         },
//       },
//       0
//     );
// };
//
// const reverseAnimation = () => {
//   console.log("reverse");
//   // newTimeLine.reverse();
//   newTimeLine.restart();
// };
