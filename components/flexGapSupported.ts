/* eslint-disable id-length, @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-explicit-any */

let isSupported: null | boolean = null;
export const flexGapSupported = (): boolean => {
  if (typeof isSupported === "boolean") {
    return isSupported;
  }

  if (typeof window === "undefined") {
    isSupported = true;
  } else {
    isSupported = !((d, c: any = d.createElement("b").style, a = (c.gap = 0)) =>
      d.documentElement.classList.toggle("noflexgap", !c.gap))(document);
  }

  return isSupported;
};
