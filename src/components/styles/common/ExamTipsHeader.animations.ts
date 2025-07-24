export const containerAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const imageAnimation = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: 0.2, duration: 0.8 }
};

export const buttonAnimation = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 }
};