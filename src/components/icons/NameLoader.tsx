import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "styled-components";
import useTabActive from "@/hooks/useTabActive";

const svgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2.5,
      ease: "easeInOut",
    },
  },
};

const NameLoader = ({ finishLoading }: { finishLoading: () => void }) => {
  const theme = useTheme();
  const isTabActive = useTabActive();

  return (
    <motion.svg
      // pause animation when tab is inactive then resume when tab is active
      initial={isTabActive ? "initial" : false}
      animate={isTabActive ? "animate" : false}
      onAnimationComplete={finishLoading}
      className="Loader"
      width="720"
      height="120"
      viewBox="0 0 720 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={svgVariants}
      exit="exit"
    >
      {/* P */}
      <motion.path
        d="M10 102V2H42C49.5 2 55.8 3.5 60.9 6.5C66 9.5 69.8 13.5 72.3 18.5C74.8 23.5 76 29 76 35C76 41 74.8 46.5 72.3 51.5C69.8 56.5 66 60.5 60.9 63.5C55.8 66.5 49.5 68 42 68H23V102H10ZM23 57H42C47.5 57 51.8 55.5 54.8 52.5C57.8 49.5 59.3 45.2 59.3 39.5C59.3 33.8 57.8 29.5 54.8 26.5C51.8 23.5 47.5 22 42 22H23V57Z"
        stroke={theme.accentMain}
        strokeWidth="3"
        variants={pathVariants}
      />
      {/* R */}
      <motion.path
        d="M145 102L121 61H105V102H92V2H124C131.5 2 137.8 3.5 142.9 6.5C148 9.5 151.8 13.5 154.3 18.5C156.8 23.5 158 29 158 35C158 42 156 48 152 53C148 58 142 61.5 134 63.5L159 102H145ZM105 50H124C131 50 136.3 48.2 139.8 44.7C143.3 41.2 145 36.5 145 30.5C145 24.5 143.3 19.8 139.8 16.3C136.3 12.8 131 11 124 11H105V50Z"
        stroke={theme.accentMain}
        strokeWidth="3"
        variants={pathVariants}
      />
      {/* A */}
      <motion.path
        d="M230 102L220 75H185L175 102H161L195 2H210L244 102H230ZM202.5 20L188 64H217L202.5 20Z"
        stroke={theme.accentMain}
        strokeWidth="3"
        variants={pathVariants}
      />
      {/* S */}
      <motion.path
        d="M310 103C301 103 293 101.5 286 98.5C279 95.5 273.5 91.5 269.5 86.5L277 77C280.5 81.5 285 85 290.5 87.5C296 90 302 91.2 308.5 91.2C316 91.2 321.8 89.7 325.8 86.7C329.8 83.7 331.8 79.7 331.8 74.7C331.8 71 330.8 68 328.8 65.5C326.8 63 324.3 61 321.3 59.5C318.3 58 314.3 56.5 309.3 55L299.8 52C293.3 50 287.8 47.5 283.3 44.5C278.8 41.5 275.3 37.8 272.8 33.3C270.3 28.8 269 23.5 269 17.5C269 11 270.5 5.5 273.5 1C276.5 -3.5 280.8 -7 286.3 -9.5C291.8 -12 298 -13.2 305 -13.2C312.5 -13.2 319.5 -12 326 -9.5C332.5 -7 338 -3.5 342.5 1L335.5 10C331.5 6 326.8 2.8 321.3 0.5C315.8 -1.8 310 -3 304 -3C297 -3 291.3 -1.5 287.3 1.5C283.3 4.5 281.3 8.5 281.3 13.5C281.3 17 282.3 20 284.3 22.5C286.3 25 288.8 27 291.8 28.5C294.8 30 298.8 31.5 303.8 33L313.3 36C319.8 38 325.3 40.5 329.8 43.5C334.3 46.5 337.8 50.2 340.3 54.7C342.8 59.2 344 64.5 344 70.5C344 77 342.5 82.5 339.5 87C336.5 91.5 332.2 95 326.7 97.5C321.2 100 314.8 101.2 307.5 101.2L310 103Z"
        stroke={theme.accentMain}
        strokeWidth="3"
        variants={pathVariants}
      />
      {/* H */}
      <motion.path
        d="M375 102V2H388V45H430V2H443V102H430V56H388V102H375Z"
        stroke={theme.accentMain}
        strokeWidth="3"
        variants={pathVariants}
      />
      {/* A */}
      <motion.path
        d="M515 102L505 75H470L460 102H446L480 2H495L529 102H515ZM487.5 20L473 64H502L487.5 20Z"
        stroke={theme.accentMain}
        strokeWidth="3"
        variants={pathVariants}
      />
      {/* N */}
      <motion.path
        d="M560 102V2H573L620 82V2H633V102H620L573 22V102H560Z"
        stroke={theme.accentMain}
        strokeWidth="3"
        variants={pathVariants}
      />
      {/* T */}
      <motion.path
        d="M680 13V102H667V13H640V2H707V13H680Z"
        stroke={theme.accentMain}
        strokeWidth="3"
        variants={pathVariants}
      />
    </motion.svg>
  );
};

export default NameLoader;
