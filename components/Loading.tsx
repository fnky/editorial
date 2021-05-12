import { forwardRef } from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import type { StitchesProps, StitchesVariants } from "stitches.config";
import { styled } from "stitches.config";
import { Spinner, Box } from "./";

const StyledLoading = styled(Box, {
  display: "flex",
  height: "100%",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
});

type LoadingCSSProperty = Pick<StitchesProps<typeof StyledLoading>, "css">;
type LoadingVariants = StitchesVariants<typeof StyledLoading>;
type LoadingOwnProps = LoadingCSSProperty & LoadingVariants;

type LoadingComponent = Polymorphic.ForwardRefComponent<"div", LoadingOwnProps>;

export const Loading = forwardRef((props, forwardedRef) => (
  <StyledLoading {...props} ref={forwardedRef}>
    <Spinner />
  </StyledLoading>
)) as LoadingComponent;
