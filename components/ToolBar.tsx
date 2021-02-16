import { styled } from "../stitches.config";
import { Box } from "./Box";

export const ToolBar = styled(Box, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  paddingLeft: "$2",
  paddingRight: "$2",
});

export const FlexibleSpace = styled(Box, {
  flexGrow: 1,
  flexShrink: 999,
  pointerEvents: "none",
});

export const ButtonGroup = styled(Box, {
  display: "flex",
  height: "100%",
  alignItems: "center",
  "> *": {
    flexShrink: 0,
  },
  zIndex: 2,
});

export const CenterButtonGroup = styled(ButtonGroup, {
  justifyContent: "center",
  position: "absolute",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
});
