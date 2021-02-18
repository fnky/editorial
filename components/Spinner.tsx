import { css, styled } from "stitches.config";

const spin = css.keyframes({
  "0%": { transform: "rotateZ(0deg)" },
  "100%": { transform: "rotateZ(359deg)" },
});

const StyledSvg = styled("svg", {
  animation: `${spin} 1s infinite`,
});

export const Spinner = () => (
  <StyledSvg
    width="44"
    height="44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="spinner"
      d="M22 37c-8.284 0-15-6.716-15-15"
      stroke="#000"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <circle cx="22" cy="22" r="20" stroke="#000" />
    <circle cx="22" cy="22" r="10" stroke="#000" />
  </StyledSvg>
);
