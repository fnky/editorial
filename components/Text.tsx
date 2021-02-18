import { styled } from "stitches.config";

export const Text = styled("span", {
  // Reset
  lineHeight: "1",
  // margin: "0",
  fontWeight: 400,
  fontVariantNumeric: "tabular-nums",
  display: "block",

  // Custom
  // color: "$hiContrast",
  variants: {
    size: {
      "1": {
        fontSize: "$1",
      },
      "2": {
        fontSize: "$2",
      },
      "3": {
        fontSize: "$3",
      },
      "4": {
        fontSize: "$4",
      },
      "5": {
        fontSize: "$5",
        letterSpacing: "-.015em",
      },
      "6": {
        fontSize: "$6",
        letterSpacing: "-.016em",
      },
      "7": {
        fontSize: "$7",
        letterSpacing: "-.031em",
        textIndent: "-.005em",
      },
      "8": {
        fontSize: "$8",
        letterSpacing: "-.034em",
        textIndent: "-.018em",
      },
      "9": {
        fontSize: "$9",
        letterSpacing: "-.055em",
        textIndent: "-.025em",
      },
    },
    variant: {
      dim: { color: "$gray800" },
      muted: { color: "$gray700" },
      red: {
        color: "$red900",
      },
      crimson: {
        color: "$crimson900",
      },
      pink: {
        color: "$pink900",
      },
      purple: {
        color: "$purple900",
      },
      violet: {
        color: "$violet900",
      },
      indigo: {
        color: "$indigo900",
      },
      blue: {
        color: "$blue900",
      },
      turquoise: {
        color: "$turquoise900",
      },
      teal: {
        color: "$teal900",
      },
      green: {
        color: "$green900",
      },
      lime: {
        color: "$lime900",
      },
      yellow: {
        color: "$yellow900",
      },
      orange: {
        color: "$orange900",
      },
      gold: {
        color: "$gold900",
      },
      bronze: {
        color: "$bronze900",
      },
      gray: {
        color: "$gray900",
      },
      contrast: {
        color: "$hiContrast",
      },
    },
    weight: {
      ultraThin: { fontVariationSettings: "'wght' 100", fontWeight: 100 },
      extraThin: { fontVariationSettings: "'wght' 150" },
      thin: { fontVariationSettings: "'wght' 200", fontWeight: 200 },
      extraLight: { fontVariationSettings: "'wght' 250" },
      light: { fontVariationSettings: "'wght' 300", fontWeight: 300 },
      book: { fontVariationSettings: "'wght' 350" },
      text: { fontVariationSettings: "'wght' 375" },
      normal: { fontVariationSettings: "'wght' 400", fontWeight: 400 },
      thick: { fontVariationSettings: "'wght' 425" },
      extraThick: { fontVariationSettings: "'wght' 450" },
      dark: { fontVariationSettings: "'wght' 500", fontWeight: 500 },
      extraDark: { fontVariationSettings: "'wght' 550" },
      bold: { fontVariationSettings: "'wght' 600", fontWeight: 600 },
      extraBold: { fontVariationSettings: "'wght' 650" },
      ultraBold: { fontVariationSettings: "'wght' 700", fontWeight: 700 },
      black: { fontVariationSettings: "'wght' 800", fontWeight: 800 },
      extraBlack: { fontVariationSettings: "'wght' 900", fontWeight: 900 },
      ultraBlack: { fontVariationSettings: "'wght' 999" },
    },
  },
});
