import { forwardRef, ReactNode } from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import { styled } from "stitches.config";

const NAME = "ShadowHeader";
export const SHADOW_HEADER_DEFAULT_TAG = "div";
export const SHADOW_HEADER_CONTENT_DEFAULT_TAG = "div";

const HEADER_HEIGHT = 64;
const HEADER_OFFSET = 16;
const HEADER_CONTAINER_HEIGHT = HEADER_HEIGHT + HEADER_OFFSET;
const HEADER_SHADOW_OFFSET = HEADER_HEIGHT - HEADER_OFFSET;

const HeaderRoot = styled(SHADOW_HEADER_DEFAULT_TAG, {
  boxSizing: "border-box",
  height: HEADER_CONTAINER_HEIGHT,
  position: "sticky",
  top: -HEADER_OFFSET,
  zIndex: 1,
  WebkitBackfaceVisibility: "hidden",

  "&::before": {
    boxSizing: "border-box",
    content: '""',
    display: "block",
    height: HEADER_OFFSET,
    position: "sticky",

    top: HEADER_SHADOW_OFFSET,
    boxShadow: "0 1px 8px 0 rgba(0, 0, 12, 0.16)",
  },

  "&::after": {
    boxSizing: "border-box",
    content: '""',
    display: "block",
    height: HEADER_OFFSET,
    position: "sticky",

    background: "linear-gradient(white, rgba(255,255,255,0.3))",
    top: 0,
    zIndex: 2,
  },
});

const HeaderContent = styled(SHADOW_HEADER_CONTENT_DEFAULT_TAG, {
  boxSizing: "border-box",
  // background: "white",
  height: HEADER_HEIGHT,
  position: "sticky",
  top: 0,
  marginTop: -HEADER_OFFSET,
  zIndex: 3,
});

type ShadowHeaderOwnProps = {
  children?: ReactNode;
  height?: number;
};

const ShadowHeader = forwardRef((props: ShadowHeaderOwnProps, forwardedRef) => {
  const { children, height, ...domProps } = props;

  return (
    <HeaderRoot {...domProps} ref={forwardedRef}>
      {children}
    </HeaderRoot>
  );
}) as Polymorphic.ForwardRefComponent<
  typeof SHADOW_HEADER_DEFAULT_TAG,
  ShadowHeaderOwnProps
>;

ShadowHeader.displayName = NAME;

const ShadowHeaderRoot = ShadowHeader;
const ShadowHeaderContent = HeaderContent;

export { ShadowHeader, ShadowHeaderRoot, ShadowHeaderContent };
