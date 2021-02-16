import { theme as defaultTheme } from "rich-markdown-editor";
import { theme, darkTheme } from "../../stitches.config";

type DefaultTheme = typeof defaultTheme;

const colors = {
  almostBlack: theme.colors.$hiContrast,
  lightBlack: theme.colors.$gray800,
  almostWhite: theme.colors.$gray100,
  white: theme.colors.$loContrast,
  white10: "rgba(255, 255, 255, 0.1)",
  black: theme.colors.$hiContrast,
  black10: "rgba(0, 0, 0, 0.1)",
  primary: theme.colors.$blue900,
  greyLight: theme.colors.$gray200,
  grey: theme.colors.$gray400,
  greyMid: theme.colors.$gray600,
  greyDark: theme.colors.$gray700,
};

export const base = {
  ...colors,
  fontFamily: theme.fonts.$serif,
  fontFamilyMono: theme.fonts.$mono,
  fontWeight: 400,
  zIndex: 100,

  link: colors.primary,
  textLight: colors.white,
  textHighlight: theme.colors.$yellow300,
  textHighlightForeground: colors.black,
  placeholder: theme.colors.$gray700,
  textSecondary: theme.colors.$gray800,
  selected: colors.primary,

  codeComment: theme.colors.$gray800,
  codePunctuation: theme.colors.$gray900,
  codeNumber: theme.colors.$orange900,
  codeProperty: theme.colors.$bronze800,
  codeTag: theme.colors.$blue800,
  codeString: theme.colors.$blue900,
  codeSelector: theme.colors.$blue800,
  codeAttr: theme.colors.$bronze800,
  codeEntity: "#22a2c9",
  codeKeyword: theme.colors.$red900,
  codeFunction: theme.colors.$purple900,
  codeStatement: "#22a2c9",
  codePlaceholder: "#3d8fd1",
  codeInserted: "#202746",
  codeImportant: "#c94922",

  blockToolbarBackground: colors.white,
  blockToolbarTrigger: colors.greyMid,
  blockToolbarTriggerIcon: colors.white,
  blockToolbarItem: colors.almostBlack,
  blockToolbarText: colors.almostBlack,
  blockToolbarHoverBackground: colors.greyLight,
  blockToolbarDivider: colors.greyMid,

  noticeInfoBackground: theme.colors.$orange500,
  noticeInfoText: colors.almostBlack,
  noticeTipBackground: theme.colors.$blue900,
  noticeTipText: colors.white,
  noticeWarningBackground: theme.colors.$red700,
  noticeWarningText: colors.white,
};

export const light: DefaultTheme = {
  ...base,
  background: colors.white,
  text: colors.almostBlack,
  code: colors.lightBlack,
  cursor: colors.black,
  divider: colors.greyMid,

  toolbarBackground: colors.lightBlack,
  toolbarHoverBackground: colors.black,
  toolbarInput: colors.white10,
  toolbarItem: colors.white,

  tableDivider: colors.greyMid,
  tableSelected: colors.primary,
  tableSelectedBackground: theme.colors.$blue200,

  quote: colors.greyLight,
  codeBackground: colors.greyLight,
  codeBorder: colors.grey,
  horizontalRule: colors.greyMid,
  imageErrorBackground: colors.greyLight,

  scrollbarBackground: colors.greyLight,
  scrollbarThumb: colors.greyMid,
};

export const dark = {
  ...base,

  background: colors.almostBlack,
  text: colors.almostWhite,
  textHighlightForeground: colors.almostWhite,
  textHighlight: darkTheme.$orange400,
  code: colors.almostWhite,
  cursor: colors.white,
  divider: "#4E5C6E",
  placeholder: "#52657A",

  toolbarBackground: colors.white,
  toolbarHoverBackground: colors.greyMid,
  toolbarInput: colors.black10,
  toolbarItem: colors.lightBlack,

  tableDivider: colors.lightBlack,
  tableSelected: colors.primary,
  tableSelectedBackground: "#002333",

  quote: colors.greyDark,
  codeBackground: colors.black,
  codeBorder: colors.lightBlack,
  codeString: "#3d8fd1",
  horizontalRule: colors.lightBlack,
  imageErrorBackground: "rgba(0, 0, 0, 0.5)",

  scrollbarBackground: colors.black,
  scrollbarThumb: colors.lightBlack,
};

export default light;
