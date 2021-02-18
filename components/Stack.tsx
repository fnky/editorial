import { createTokenVariant, styled } from "stitches.config";

const Stack = styled("div", {
  display: "flex",

  variants: {
    direction: {
      vertical: {
        flexDirection: "row",
      },
      horizontal: {
        flexDirection: "column",
      },
    },
    gap: createTokenVariant("space", "gap"),
    alignment: {
      start: {
        alignItems: "flex-start",
      },
      end: {
        alignItems: "flex-end",
      },
      center: {
        alignItems: "center",
      },
    },
    distribution: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
      "space-between": {
        justifyContent: "space-between",
      },
      "space-around": {
        justifyContent: "space-around",
      },
      "space-evenly": {
        justifyContent: "space-evenly",
      },
    },
  },
});

Stack.defaultProps = {
  direction: "vertical",
  gap: "1",
  alignment: "center",
  distribution: "space-around",
};

export { Stack };
