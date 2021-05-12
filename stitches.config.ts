/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
import type { Properties } from "@stitches/core/types/css-types";
import type { StitchesCss } from "@stitches/react";
import { createCss } from "@stitches/react";

export type { StitchesVariants } from "@stitches/react";

const stitches = createCss({
  theme: {
    colors: {
      hiContrast: "hsl(200, 12%, 5%)",
      loContrast: "white",

      canvas: "hsl(0,0%,93%)",
      panel: "white",
      shadowLight: "hsla(206,22%,7%,.35)",
      shadowDark: "hsla(206,22%,7%,.2)",
      transparentExtreme: "hsla(0,0%,0%,.97)",

      gray100: "hsl(206, 20%, 98.8%)",
      gray200: "hsl(206, 14%, 96.0%)",
      gray300: "hsl(206, 13%, 93.7%)",
      gray400: "hsl(206, 12%, 92.0%)",
      gray500: "hsl(206, 12%, 89.5%)",
      gray600: "hsl(206, 11%, 85.2%)",
      gray700: "hsl(206, 10%, 80.0%)",
      gray800: "hsl(206, 6%, 56.1%)",
      gray900: "hsl(206, 6%, 43.9%)",

      red100: "hsl(351, 100%, 98.5%)",
      red200: "hsl(351, 89%, 96.0%)",
      red300: "hsl(352, 86%, 93.4%)",
      red400: "hsl(352, 85%, 90.3%)",
      red500: "hsl(353, 84%, 86.4%)",
      red600: "hsl(354, 83%, 80.7%)",
      red700: "hsl(355, 82%, 71.7%)",
      red800: "hsl(356, 91%, 59.0%)",
      red900: "hsl(356, 80%, 47.1%)",

      crimson100: "hsl(332, 100%, 98.5%)",
      crimson200: "hsl(332, 87%, 96.0%)",
      crimson300: "hsl(333, 84%, 93.3%)",
      crimson400: "hsl(333, 83%, 90.2%)",
      crimson500: "hsl(334, 82%, 86.3%)",
      crimson600: "hsl(335, 81%, 80.3%)",
      crimson700: "hsl(336, 80%, 70.0%)",
      crimson800: "hsl(336, 88%, 56.3%)",
      crimson900: "hsl(336, 79%, 46.1%)",

      pink100: "hsl(322, 100%, 98.5%)",
      pink200: "hsl(322, 90%, 95.8%)",
      pink300: "hsl(322, 87%, 93.0%)",
      pink400: "hsl(322, 86%, 89.9%)",
      pink500: "hsl(322, 85%, 86.2%)",
      pink600: "hsl(322, 85%, 80.3%)",
      pink700: "hsl(322, 84%, 68.9%)",
      pink800: "hsl(322, 75%, 60.0%)",
      pink900: "hsl(322, 80%, 43.9%)",

      purple100: "hsl(280, 100%, 99.0%)",
      purple200: "hsl(279, 75%, 95.7%)",
      purple300: "hsl(278, 71%, 92.4%)",
      purple400: "hsl(278, 69%, 89.0%)",
      purple500: "hsl(277, 68%, 85.2%)",
      purple600: "hsl(275, 67%, 80.2%)",
      purple700: "hsl(272, 66%, 68.1%)",
      purple800: "hsl(272, 53%, 50.0%)",
      purple900: "hsl(272, 62%, 44.1%)",

      violet100: "hsl(252, 100%, 99.0%)",
      violet200: "hsl(252, 87%, 96.4%)",
      violet300: "hsl(252, 85%, 93.7%)",
      violet400: "hsl(252, 84%, 90.7%)",
      violet500: "hsl(252, 83%, 86.8%)",
      violet600: "hsl(252, 83%, 80.8%)",
      violet700: "hsl(252, 82%, 72.2%)",
      violet800: "hsl(252, 62%, 54.9%)",
      violet900: "hsl(250, 55%, 48.0%)",

      indigo100: "hsl(226, 100%, 99.0%)",
      indigo200: "hsl(226, 83%, 96.3%)",
      indigo300: "hsl(226, 80%, 93.3%)",
      indigo400: "hsl(226, 79%, 89.8%)",
      indigo500: "hsl(226, 78%, 85.4%)",
      indigo600: "hsl(226, 77%, 79.1%)",
      indigo700: "hsl(226, 76%, 70.2%)",
      indigo800: "hsl(226, 69%, 54.1%)",
      indigo900: "hsl(226, 70%, 44.1%)",

      blue100: "hsl(227, 100%, 98.8%)",
      blue200: "hsl(227, 98%, 95.8%)",
      blue300: "hsl(227, 97%, 92.6%)",
      blue400: "hsl(227, 97%, 88.9%)",
      blue500: "hsl(227, 97%, 83.9%)",
      blue600: "hsl(227, 97%, 76.7%)",
      blue700: "hsl(227, 97%, 71.6%)",
      blue800: "hsl(227, 100%, 67.0%)",
      blue900: "hsl(234, 100%, 65.0%)",

      turquoise100: "hsl(185, 78%, 97.8%)",
      turquoise200: "hsl(185, 73%, 93.2%)",
      turquoise300: "hsl(186, 71%, 88.2%)",
      turquoise400: "hsl(186, 71%, 82.8%)",
      turquoise500: "hsl(187, 70%, 76.4%)",
      turquoise600: "hsl(187, 69%, 68.2%)",
      turquoise700: "hsl(188, 68%, 59.2%)",
      turquoise800: "hsl(190, 88%, 40.0%)",
      turquoise900: "hsl(190, 90%, 30.0%)",

      teal100: "hsl(165, 100%, 97.5%)",
      teal200: "hsl(166, 73%, 93.1%)",
      teal300: "hsl(166, 66%, 88.1%)",
      teal400: "hsl(167, 63%, 82.3%)",
      teal500: "hsl(168, 60%, 75.1%)",
      teal600: "hsl(170, 57%, 65.2%)",
      teal700: "hsl(172, 54%, 50.0%)",
      teal800: "hsl(173, 79%, 36.7%)",
      teal900: "hsl(174, 100%, 24.5%)",

      green100: "hsl(130, 100%, 97.5%)",
      green200: "hsl(131, 72%, 94.0%)",
      green300: "hsl(132, 63%, 89.8%)",
      green400: "hsl(134, 58%, 84.6%)",
      green500: "hsl(136, 55%, 78.0%)",
      green600: "hsl(139, 52%, 69.0%)",
      green700: "hsl(144, 48%, 55.8%)",
      green800: "hsl(145, 62%, 41.0%)",
      green900: "hsl(148, 69%, 30.0%)",

      lime100: "hsl(85, 86%, 96.5%)",
      lime200: "hsl(84, 79%, 92.6%)",
      lime300: "hsl(83, 76%, 87.3%)",
      lime400: "hsl(82, 74%, 80.7%)",
      lime500: "hsl(81, 73%, 72.6%)",
      lime600: "hsl(79, 72%, 62.8%)",
      lime700: "hsl(76, 74%, 48.9%)",
      lime800: "hsl(81, 91%, 40.0%)",
      lime900: "hsl(78, 80%, 25.1%)",

      yellow100: "hsl(55, 100%, 95.5%)",
      yellow200: "hsl(55, 93%, 89.9%)",
      yellow300: "hsl(54, 90%, 83.6%)",
      yellow400: "hsl(54, 89%, 76.5%)",
      yellow500: "hsl(53, 88%, 67.5%)",
      yellow600: "hsl(52, 88%, 57.1%)",
      yellow700: "hsl(52, 88%, 51.7%)",
      yellow800: "hsl(49, 97%, 48.0%)",
      yellow900: "hsl(40, 80%, 32.0%)",

      orange100: "hsl(40, 100%, 97.0%)",
      orange200: "hsl(40, 97%, 93.2%)",
      orange300: "hsl(39, 97%, 88.7%)",
      orange400: "hsl(39, 96%, 83.0%)",
      orange500: "hsl(38, 96%, 75.5%)",
      orange600: "hsl(37, 96%, 65.5%)",
      orange700: "hsl(36, 96%, 53.9%)",
      orange800: "hsl(38, 100%, 53.9%)",
      orange900: "hsl(27, 65%, 35.9%)",

      brown100: "hsl(30, 75%, 98.0%)",
      brown200: "hsl(30, 67%, 94.0%)",
      brown300: "hsl(30, 66%, 90.0%)",
      brown400: "hsl(29, 64%, 85.7%)",
      brown500: "hsl(29, 64%, 80.5%)",
      brown600: "hsl(29, 62%, 72.6%)",
      brown700: "hsl(28, 61%, 61.6%)",
      brown800: "hsl(28, 48%, 52.0%)",
      brown900: "hsl(20, 50%, 37.1%)",

      bronze100: "hsl(18, 100%, 98.5%)",
      bronze200: "hsl(18, 57%, 94.1%)",
      bronze300: "hsl(18, 50%, 89.8%)",
      bronze400: "hsl(17, 46%, 85.3%)",
      bronze500: "hsl(17, 44%, 80.0%)",
      bronze600: "hsl(17, 42%, 73.0%)",
      bronze700: "hsl(16, 39%, 64.0%)",
      bronze800: "hsl(17, 28%, 52.0%)",
      bronze900: "hsl(15, 30%, 43.1%)",

      gold100: "hsl(50, 75%, 98.0%)",
      gold200: "hsl(49, 52%, 93.8%)",
      gold300: "hsl(47, 48%, 89.6%)",
      gold400: "hsl(46, 45%, 85.1%)",
      gold500: "hsl(44, 43%, 79.6%)",
      gold600: "hsl(41, 41%, 71.4%)",
      gold700: "hsl(36, 37%, 60.0%)",
      gold800: "hsl(36, 30%, 52.0%)",
      gold900: "hsl(36, 26%, 40.0%)",
    },
    fonts: {
      // $sans:
      //   "'iA Writer Quattro V', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      sans:
        "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      serif:
        "Petrona, Baskerville, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
      mono:
        "'iA Writer Mono V', 'SFMono-Regular',Consolas,'Liberation Mono', Menlo, Courier, monospace",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
      7: "45px",
      8: "65px",
      9: "80px",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
      7: "45px",
      8: "65px",
      9: "80px",
    },
    fontSizes: {
      1: "11px",
      2: "13px",
      3: "15px",
      4: "17px",
      5: "19px",
      6: "21px",
      7: "27px",
      8: "35px",
      9: "59px",
    },
    radii: {
      1: "3px",
      2: "5px",
      3: "7px",
      round: "50%",
      pill: "9999px",
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      max: "999",
    },
  },
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
    bp3: "(min-width: 1200px)",
    bp4: "(min-width: 1800px)",
    motion: "(prefers-reduced-motion)",
    hover: "(hover: hover)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
  utils: {
    p: (_config) => (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (_config) => (value: any) => ({
      paddingTop: value,
    }),
    pr: (_config) => (value: any) => ({
      paddingRight: value,
    }),
    pb: (_config) => (value: any) => ({
      paddingBottom: value,
    }),
    pl: (_config) => (value: any) => ({
      paddingLeft: value,
    }),
    px: (_config) => (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (_config) => (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (_config) => (value: any) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (_config) => (value: any) => ({
      marginTop: value,
    }),
    mr: (_config) => (value: any) => ({
      marginRight: value,
    }),
    mb: (_config) => (value: any) => ({
      marginBottom: value,
    }),
    ml: (_config) => (value: any) => ({
      marginLeft: value,
    }),
    mx: (_config) => (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (_config) => (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (_config) => (value: any) => ({ textAlign: value }),

    fd: (_config) => (value: any) => ({ flexDirection: value }),
    fw: (_config) => (value: any) => ({ flexWrap: value }),

    ai: (_config) => (value: any) => ({ alignItems: value }),
    ac: (_config) => (value: any) => ({ alignContent: value }),
    jc: (_config) => (value: any) => ({ justifyContent: value }),
    as: (_config) => (value: any) => ({ alignSelf: value }),
    fg: (_config) => (value: any) => ({ flexGrow: value }),
    fs: (_config) => (value: any) => ({ flexShrink: value }),
    fb: (_config) => (value: any) => ({ flexBasis: value }),

    bc: (_config) => (value: any) => ({
      backgroundColor: value,
    }),

    br: (_config) => (value: any) => ({
      borderRadius: value,
    }),
    btrr: (_config) => (value: any) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (_config) => (value: any) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (_config) => (value: any) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (_config) => (value: any) => ({
      borderTopLeftRadius: value,
    }),

    bs: (_config) => (value: any) => ({ boxShadow: value }),

    lh: (_config) => (value: any) => ({ lineHeight: value }),

    ox: (_config) => (value: any) => ({ overflowX: value }),
    oy: (_config) => (value: any) => ({ overflowY: value }),

    pe: (_config) => (value: any) => ({ pointerEvents: value }),
    us: (_config) => (value: any) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (_config) => (value: any) => ({
      width: value,
      height: value,
    }),

    linearGradient: (_config) => (value: any) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    appearance: (_config) => (value) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    userSelect: (_config) => (value) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    backgroundClip: (_config) => (value) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export type CSS = StitchesCss<typeof stitches>;
export const {
  styled,
  css,
  theme,
  getCssString,
  global,
  keyframes,
  config,
} = stitches;

export const utils = config.utils;

type Theme = typeof theme;
type ThemeToken = keyof Theme;

type CSSProperty = keyof Properties;

type TokenVartiant<S> = S extends `$${infer R}` ? R : S;
type TokenVariants<T> = { [K in keyof T as TokenVartiant<K>]: K };
type MapVariantToCSSProperty<
  Token extends ThemeToken,
  Property extends CSSProperty
> = {
  [K in keyof TokenVariants<Theme[Token]>]: {
    [P in Property]: TokenVariants<Theme[Token]>[K];
  };
};

export function createTokenVariant<
  Token extends ThemeToken,
  Property extends CSSProperty
>(
  token: Token,
  cssProps: Property | Property[],
): MapVariantToCSSProperty<Token, Property> {
  const themeTokens = theme[token];
  const tokenProps = themeTokens;
  const entries = Object.entries(tokenProps).map(([key]) => {
    let value: Record<string, string>;

    if (Array.isArray(cssProps)) {
      if (cssProps.length === 1) {
        value = { [cssProps[0]]: key };
      } else {
        value = cssProps.reduce<Record<string, string>>((object, property) => {
          object[property] = key;
          return object;
        }, {});
      }
    } else {
      value = { [cssProps]: key };
    }

    if (typeof key === "string" && key.startsWith("$")) {
      return [key.slice(1), value];
    }
    return [key, value];
  }) as Array<[key: string, value: unknown]>;
  const props = Object.fromEntries(entries) as MapVariantToCSSProperty<
    Token,
    Property
  >;
  return props;
}

export const darkTheme = theme("dark-theme", {
  colors: {
    hiContrast: "hsl(240, 3%, 93%)",
    loContrast: "hsl(200, 7%, 8.4%)",

    canvas: "hsl(0,0%,15%)",
    panel: "hsl(201, 6%, 11.6%)",
    shadowLight: "hsla(206,22%,7%,.35)",
    shadowDark: "hsla(206,22%,7%,.2)",
    transparentExtreme: "hsla(0,100%,100%,.97)",

    gray100: "hsl(200, 6%, 9.6%)",
    gray200: "hsl(201, 6%, 11.6%)",
    gray300: "hsl(201, 6%, 13.9%)",
    gray400: "hsl(202, 6%, 16.6%)",
    gray500: "hsl(202, 6%, 20.1%)",
    gray600: "hsl(203, 6%, 24.8%)",
    gray700: "hsl(204, 6%, 31.0%)",
    gray800: "hsl(206, 6%, 43.9%)",
    gray900: "hsl(205, 5%, 52.9%)",

    red100: "hsl(353, 35%, 10.2%)",
    red200: "hsl(353, 39%, 12.1%)",
    red300: "hsl(353, 43%, 14.4%)",
    red400: "hsl(353, 47%, 17.3%)",
    red500: "hsl(353, 50%, 21.2%)",
    red600: "hsl(353, 54%, 26.7%)",
    red700: "hsl(353, 70%, 36.9%)",
    red900: "hsl(358, 100%, 68.0%)",

    crimson100: "hsl(335, 33%, 10.0%)",
    crimson200: "hsl(335, 39%, 12.4%)",
    crimson300: "hsl(335, 45%, 15.1%)",
    crimson400: "hsl(335, 50%, 18.4%)",
    crimson500: "hsl(335, 54%, 22.8%)",
    crimson600: "hsl(334, 60%, 28.8%)",
    crimson700: "hsl(334, 80%, 35.9%)",
    crimson900: "hsl(341, 90%, 63.1%)",

    pink100: "hsl(318, 33%, 10.0%)",
    pink200: "hsl(318, 39%, 12.8%)",
    pink300: "hsl(318, 43%, 15.9%)",
    pink400: "hsl(319, 48%, 19.4%)",
    pink500: "hsl(319, 51%, 23.9%)",
    pink600: "hsl(319, 56%, 30.3%)",
    pink700: "hsl(320, 72%, 38.0%)",
    pink900: "hsl(325, 90%, 67.1%)",

    purple100: "hsl(284, 28%, 10.4%)",
    purple200: "hsl(282, 32%, 14.1%)",
    purple300: "hsl(280, 36%, 17.9%)",
    purple400: "hsl(279, 39%, 22.0%)",
    purple500: "hsl(277, 42%, 27.0%)",
    purple600: "hsl(276, 45%, 33.5%)",
    purple700: "hsl(272, 55%, 42.0%)",
    purple900: "hsl(275, 91%, 71.0%)",

    violet100: "hsl(250, 30%, 11.8%)",
    violet200: "hsl(250, 34%, 16.0%)",
    violet300: "hsl(251, 38%, 20.3%)",
    violet400: "hsl(251, 41%, 24.9%)",
    violet500: "hsl(251, 43%, 30.7%)",
    violet600: "hsl(251, 46%, 39.0%)",
    violet700: "hsl(252, 58%, 50.0%)",
    violet900: "hsl(250, 100%, 76.1%)",

    indigo100: "hsl(229, 37%, 11.8%)",
    indigo200: "hsl(228, 40%, 15.2%)",
    indigo300: "hsl(228, 44%, 18.8%)",
    indigo400: "hsl(227, 46%, 22.8%)",
    indigo500: "hsl(227, 49%, 27.9%)",
    indigo600: "hsl(227, 51%, 35.3%)",
    indigo700: "hsl(225, 62%, 47.1%)",
    indigo900: "hsl(228, 100%, 72.9%)",

    blue100: "hsl(212, 50%, 10.2%)",
    blue200: "hsl(212, 56%, 13.6%)",
    blue300: "hsl(211, 61%, 16.8%)",
    blue400: "hsl(210, 66%, 20.3%)",
    blue500: "hsl(210, 70%, 24.6%)",
    blue600: "hsl(210, 75%, 31.0%)",
    blue700: "hsl(208, 93%, 40.0%)",
    blue900: "hsl(210, 100%, 66.1%)",

    turquoise100: "hsl(192, 68%, 7.5%)",
    turquoise200: "hsl(191, 71%, 10.2%)",
    turquoise300: "hsl(191, 74%, 13.2%)",
    turquoise400: "hsl(191, 76%, 16.4%)",
    turquoise500: "hsl(191, 77%, 20.1%)",
    turquoise600: "hsl(190, 79%, 24.6%)",
    turquoise700: "hsl(190, 85%, 32.0%)",
    turquoise900: "hsl(192, 80%, 47.1%)",

    teal100: "hsl(168, 76%, 6.5%)",
    teal200: "hsl(169, 76%, 8.3%)",
    teal300: "hsl(169, 77%, 10.3%)",
    teal400: "hsl(170, 77%, 12.7%)",
    teal500: "hsl(171, 78%, 15.7%)",
    teal600: "hsl(171, 78%, 20.0%)",
    teal700: "hsl(173, 80%, 29.0%)",
    teal900: "hsl(174, 90%, 40.0%)",

    green100: "hsl(140, 43%, 8.2%)",
    green200: "hsl(141, 45%, 10.1%)",
    green300: "hsl(141, 47%, 12.2%)",
    green400: "hsl(142, 49%, 14.8%)",
    green500: "hsl(142, 51%, 18.3%)",
    green600: "hsl(143, 53%, 23.6%)",
    green700: "hsl(145, 60%, 35.1%)",
    green900: "hsl(130, 50%, 55.1%)",

    lime100: "hsl(80, 47%, 7.5%)",
    lime200: "hsl(79, 52%, 9.0%)",
    lime300: "hsl(79, 56%, 10.9%)",
    lime400: "hsl(79, 60%, 13.6%)",
    lime500: "hsl(78, 63%, 17.5%)",
    lime600: "hsl(78, 66%, 23.5%)",
    lime700: "hsl(76, 85%, 38.0%)",
    lime900: "hsl(81, 70%, 50.0%)",

    yellow100: "hsl(44, 59%, 7.6%)",
    yellow200: "hsl(45, 63%, 9.1%)",
    yellow300: "hsl(46, 67%, 11.2%)",
    yellow400: "hsl(46, 72%, 14.0%)",
    yellow500: "hsl(47, 76%, 18.0%)",
    yellow600: "hsl(48, 80%, 24.3%)",
    yellow700: "hsl(50, 100%, 45.1%)",
    yellow900: "hsl(49, 80%, 52.2%)",

    orange100: "hsl(30, 50%, 8.6%)",
    orange200: "hsl(31, 54%, 10.3%)",
    orange300: "hsl(32, 59%, 12.5%)",
    orange400: "hsl(33, 63%, 15.5%)",
    orange500: "hsl(34, 66%, 19.9%)",
    orange600: "hsl(34, 70%, 26.9%)",
    orange700: "hsl(38, 90%, 48.0%)",
    orange900: "hsl(35, 90%, 51.2%)",

    brown100: "hsl(22, 40%, 9.2%)",
    brown200: "hsl(23, 42%, 11.6%)",
    brown300: "hsl(24, 42%, 14.3%)",
    brown400: "hsl(24, 43%, 17.7%)",
    brown500: "hsl(25, 44%, 22.2%)",
    brown600: "hsl(26, 45%, 29.0%)",
    brown700: "hsl(28, 48%, 45.1%)",
    brown900: "hsl(28, 60%, 55.9%)",

    bronze100: "hsl(17, 14%, 10.0%)",
    bronze200: "hsl(17, 15%, 13.4%)",
    bronze300: "hsl(17, 17%, 16.8%)",
    bronze400: "hsl(17, 18%, 20.5%)",
    bronze500: "hsl(18, 19%, 24.8%)",
    bronze600: "hsl(18, 20%, 30.8%)",
    bronze700: "hsl(18, 25%, 44.9%)",
    bronze900: "hsl(18, 37%, 61.0%)",

    gold100: "hsl(43, 15%, 9.2%)",
    gold200: "hsl(42, 17%, 12.0%)",
    gold300: "hsl(41, 18%, 15.1%)",
    gold400: "hsl(40, 20%, 18.5%)",
    gold500: "hsl(39, 21%, 22.9%)",
    gold600: "hsl(39, 22%, 29.3%)",
    gold700: "hsl(36, 28%, 45.1%)",
    gold900: "hsl(35, 50%, 62.9%)",
  },
});
