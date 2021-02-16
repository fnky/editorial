import { css } from "../stitches.config";

export const slideDown = css.keyframes({
  "0%": { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
  "100%": { opacity: 1, transform: "scale(1) translateY(0)" },
});

export const slideUp = css.keyframes({
  "0%": { opacity: 0, transform: "scale(0.9) translateY(10px)" },
  "100%": { opacity: 1, transform: "scale(1) translateY(0)" },
});
