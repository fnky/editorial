import * as React from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import { styled, StitchesProps, StitchesVariants } from "stitches.config";

const DEFAULT_TAG = "a";

const StyledLink = styled(DEFAULT_TAG, {
  flexShrink: 0,
  outline: "none",
  textDecorationLine: "none",
  textUnderlineOffset: "3px",
  textDecorationColor: "$gray300",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  lineHeight: "inherit",
  "&:hover": {
    textDecorationLine: "underline",
  },
  "&:focus": {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineOffset: "2px",
    textDecorationLine: "none",
  },
  variants: {
    variant: {
      blue: {
        color: "$blue900",
        textDecorationColor: "$blue300",
        "&:focus": {
          outlineColor: "$blue700",
        },
      },
      subtle: {
        color: "$gray900",
        textDecorationColor: "$gray300",
        "&:focus": {
          outlineColor: "$gray700",
        },
      },
      contrast: {
        color: "inherit",
        textDecoration: "underline",
        textDecorationColor: "$gray300",
        "&:hover": {
          textDecorationColor: "$gray600",
        },
        "&:focus": {
          outlineColor: "$gray700",
        },
      },
    },
  },
});

type LinkCSSProp = Pick<StitchesProps<typeof StyledLink>, "css">;
type LinkVariants = StitchesVariants<typeof StyledLink>;
type LinkOwnProps = LinkCSSProp & LinkVariants;

type LinkComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  LinkOwnProps
>;

export const Link = React.forwardRef((props, forwardedRef) => {
  return <StyledLink {...props} ref={forwardedRef} />;
}) as LinkComponent;
