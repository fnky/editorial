import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { styled } from "stitches.config";
import { slideDown, slideUp } from "./keyframes";
import { Box, Text } from "./";

type TooltipProps = React.ComponentProps<typeof TooltipPrimitive.Root> &
  React.ComponentProps<typeof TooltipPrimitive.Content> & {
    children: React.ReactElement;
    content: React.ReactNode;
    multiline?: boolean;
  };

const Content = styled(TooltipPrimitive.Content, {
  backgroundColor: "$transparentExtreme",
  borderRadius: "$1",
  padding: "$1 $2",

  animationDuration: "0.25s",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  '&[data-side="top"]': { animationName: slideUp },
  '&[data-side="bottom"]': { animationName: slideDown },

  variants: {
    multiline: {
      true: {
        maxWidth: 250,
        pb: 7,
      },
    },
  },
});

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  multiline,
  ...props
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger
        as={React.forwardRef((props, forwardedRef) =>
          React.cloneElement(children, { ...props, ref: forwardedRef }),
        )}
      />

      <Content side="top" align="center" {...props} multiline={multiline}>
        <Text
          size="2"
          as="p"
          css={{
            color: "$loContrast",
            lineHeight: multiline ? "1.5" : undefined,
          }}
        >
          {content}
        </Text>
        <Box css={{ color: "$transparentExtreme" }}>
          <TooltipPrimitive.Arrow
            offset={5}
            width={11}
            height={5}
            style={{
              fill: "currentColor",
            }}
          />
        </Box>
      </Content>
    </TooltipPrimitive.Root>
  );
}
