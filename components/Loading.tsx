import { forwardRef } from "react";
import * as Polymorphic from "@radix-ui/react-polymorphic";
import { Box } from "./Box";
import type { StitchesProps, StitchesVariants } from "../stitches.config";
import { styled } from "../stitches.config";
import { Spinner } from "./Spinner";

const StyledLoading = styled(Box, {
  display: "flex",
  height: "100%",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
});

type LoadingCSSProp = Pick<StitchesProps<typeof StyledLoading>, "css">;
type LoadingVariants = StitchesVariants<typeof StyledLoading>;
type LoadingOwnProps = LoadingCSSProp & LoadingVariants;

type LoadingComponent = Polymorphic.ForwardRefComponent<"div", LoadingOwnProps>;

export const Loading = forwardRef((props, forwardedRef) => (
  <StyledLoading {...props} ref={forwardedRef}>
    <Spinner />
  </StyledLoading>
)) as LoadingComponent;
