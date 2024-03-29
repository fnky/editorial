/* eslint-disable react/destructuring-assignment, destructuring/in-params, @typescript-eslint/strict-boolean-expressions */
import * as React from "react";
import { forwardRef } from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import type { CSS } from "stitches.config";
import { styled } from "stitches.config";
import { slideDown, slideUp } from "./keyframes";
import { Box } from "./";

type PopoverProps = React.ComponentProps<typeof PopoverPrimitive.Root> & {
  children: React.ReactNode;
};

export function Popover({
  children,
  ...props
}: PopoverProps): React.ReactElement {
  return <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>;
}

export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverClose = PopoverPrimitive.Close;

const StyledContent = styled(PopoverPrimitive.Content, {
  borderRadius: "$3",
  fontSize: 14,
  backgroundColor: "$loContrast",
  boxShadow:
    "0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 8px 16px -4px rgba(0, 0, 0, .16)",
  color: "black",
  overflow: "hidden",
  transformOrigin: "var(--radix-popover-content-transform-origin)",
  animationDuration: "0.25s",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  '&[data-side="top"]': { animationName: slideUp },
  '&[data-side="bottom"]': { animationName: slideDown },
});

export const PopoverArrow = styled(PopoverPrimitive.Arrow, {
  fill: "$loContrast",
  stroke: "rgba(0, 0, 0, .16)",
});

interface PopoverContentCSSProperty {
  css?: CSS;
}
// type PopoverContentVariants = StitchesVariants<typeof StyledContent>;
type PopoverContentOwnProps = PopoverContentCSSProperty &
  Polymorphic.OwnProps<typeof PopoverPrimitive.Content> & {
    hideArrow?: boolean;
  };

type PopoverContentComponent = Polymorphic.ForwardRefComponent<
  "div",
  PopoverContentOwnProps
>;

export const PopoverContent = forwardRef(
  ({ children, hideArrow, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      {children}
      {!hideArrow && (
        <Box css={{ color: "$panel" }}>
          <PopoverPrimitive.Arrow
            width={11}
            height={5}
            offset={5}
            style={{ fill: "currentColor", stroke: "rgba(0, 0, 0, .16)" }}
          />
        </Box>
      )}
    </StyledContent>
  ),
) as PopoverContentComponent;

PopoverContent.displayName = "PopoverContent";
