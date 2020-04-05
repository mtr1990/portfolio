/**
 * Base Transition
 */
const transitionEnter = {
  duration: 0.64,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const transitionExit = {
  duration: 0.48,
  ease: [0.43, 0.13, 0.23, 0.96],
};

/**
 * Transition
 */
export const varTransition = {
  transitionEnter,
};

/**
 * Wrap Enter
 */
export const varWrapEnter = {
  enter: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * Wrap Exit
 */
export const varWrapExit = {
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * Wrap Both
 */
export const varWrapBoth = {
  enter: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

/**
 * Wrap Path
 */
export const varPath = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  enter: {
    opacity: 1,
    pathLength: 1,
    transition: {
      ...transitionEnter,
    },
  },
  exit: {
    opacity: 0,
    pathLength: 0,
    transition: {
      ...transitionExit,
    },
  },
};

/**
 * Item
 */
export const varItem = {
  hover: {
    scale: 0.96,
  },
  tap: {
    scale: 0.92,
  },
};

/**
 * Image
 */
export const varImg = {
  hover: {
    scale: 1.1,
  },
};

/**
 * Icon
 */
export const varIcon = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

/**
 * Fade In
 */
export const varfadeIn = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      ...transitionEnter,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ...transitionEnter,
    },
  },
};

/**
 * Fade In Right
 */
export const varfadeInRight = {
  initial: {
    x: 80,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      ...transitionEnter,
    },
  },
  exit: {
    x: 80,
    opacity: 0,
    transition: {
      ...transitionExit,
    },
  },
};

/**
 * Fade In Left
 */
export const varfadeInLeft = {
  initial: {
    x: -80,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      ...transitionEnter,
    },
  },
  exit: {
    x: -80,
    opacity: 0,
    transition: {
      ...transitionExit,
    },
  },
};

/**
 * Fade In Up
 */
export const varfadeInUp = {
  initial: {
    y: 80,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ...transitionEnter,
    },
  },
  exit: {
    y: 80,
    opacity: 0,
    transition: {
      ...transitionExit,
    },
  },
};

/**
 * Fade In Down
 */
export const varfadeInDown = {
  initial: {
    y: -80,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ...transitionEnter,
    },
  },
  exit: {
    y: -80,
    opacity: 0,
    transition: {
      ...transitionExit,
    },
  },
};

/**
 * Bounce
 */
export const varbounce = {
  initial: {
    y: 80,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 1000,
    },
  },
};

/**
 * Bounce In
 */
export const varbounceIn = {
  initial: {
    scale: 1.2,
    opacity: 0,
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 1000,
    },
  },
};

/**
 * Zoom In Out
 */
export const varZoomInOut = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ...transitionEnter,
    },
  },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: {
      duration: 1.5,
      ...transitionExit,
    },
  },
};
