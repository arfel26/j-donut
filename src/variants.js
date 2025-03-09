export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
      opacity: 0.75,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };
};
