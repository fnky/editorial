import { forwardRef } from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import type { StitchesProps, StitchesVariants } from "stitches.config";
import { styled, createTokenVariant } from "stitches.config";

const DEFAULT_TAG = "div";

export const StyledView = styled(DEFAULT_TAG, {
  boxSizing: "border-box",

  variants: {
    // Layout
    width: createTokenVariant("sizes", "width"),
    height: createTokenVariant("sizes", "height"),
    size: createTokenVariant("sizes", ["width", "height"]),
    top: createTokenVariant("space", "top"),
    bottom: createTokenVariant("space", "bottom"),
    right: createTokenVariant("space", "right"),
    left: createTokenVariant("space", "left"),
    center: {
      true: {
        alignItems: "center",
        justifyContent: "center",
      },
      false: {},
      x: {
        alignItems: "center",
      },
      y: {
        justifyContent: "center",
      },
    },
    position: {
      static: {
        position: "static",
      },
      absolute: {
        position: "absolute",
      },
      fixed: {
        position: "fixed",
      },
      relative: {
        position: "relative",
      },
      sticky: {
        position: "sticky",
      },
    },
    visible: {
      true: { visibility: "visible" },
      false: { visibility: "hidden" },
    },
    overflow: {
      visible: { overflow: "visible" },
      hidden: { overflow: "hidden" },
    },
    radius: createTokenVariant("radii", "borderRadius"),
    zIndex: createTokenVariant("zIndices", "zIndex"),
    fontSize: createTokenVariant("fontSizes", "fontSize"),
  },
});

type ViewCSSProperty = Pick<StitchesProps<typeof StyledView>, "css">;
type ViewVariants = StitchesVariants<typeof StyledView>;
type ViewOwnProps = ViewCSSProperty & ViewVariants;

type ViewComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  ViewOwnProps
>;

export const View = forwardRef((props, forwardedRef) => {
  return (
    <StyledView
      size="1"
      center
      position="relative"
      overflow="visible"
      {...props}
      ref={forwardedRef}
    />
  );
}) as ViewComponent;
