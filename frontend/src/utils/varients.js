export const fadeIn = (derection, delay) => {
  return {
    hidden: {
      opacity: 0,
      y: derection === "up" ? 60 : derection === "down" ? -60 : 0,
      x: derection === "left" ? 60 : derection === "right" ? -60 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        deuration: 1.5,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
