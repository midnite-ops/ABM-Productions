
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
  once: true
};
export const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      },
    },
    once: true
  };

export const fadeInUpBox = {
  hidden: { 
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  },
  once: true
};


export const slideInFromTop = {
  hidden: { 
    opacity: 0, 
    y: -30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
};


export const scaleOnHover = {
  scale: 1.02,
  transition: { duration: 0.2 }
};

export const viewportSettings = {
  once: true,
  amount: 0.2
};

// export const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.1
//     }
//   }
// };
// const fadeInUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

  



