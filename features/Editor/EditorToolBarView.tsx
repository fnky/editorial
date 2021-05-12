import * as React from "react";
import {
  ToolBar,
  FlexibleSpace,
  CenterButtonGroup,
  ButtonGroup,
  ShadowHeaderRoot,
  ShadowHeaderContent,
  OfflineIndicator,
} from "components";
import { motion } from "framer-motion";
import { styled } from "stitches.config";
import EditorActionsView from "./EditorActionsView";
import EditorMenuView from "./EditorMenuView";
import EditorTitleView from "./EditorTitleView";

export const ToolBarRoot = styled(ShadowHeaderRoot, {
  userSelect: "none",

  "&::before": {
    transition: "opacity 0 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
  },

  "&::after": {
    transition: "opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
    opacity: 1,
  },

  "&:hover::after": {
    opacity: 0,
  },

  variants: {
    visibility: {
      hidden: {
        "&::before": {
          opacity: 0,
        },
        "&::after": {
          opacity: 0,
        },
      },
      visible: {
        "&::before": {
          opacity: 1,
        },
        "&::after": {
          opacity: 1,
        },
      },
    },
  },
});

export const ToolBarContent = styled(ShadowHeaderContent, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  paddingLeft: "$2",
  paddingRight: "$2",
  backgroundColor: "white",
  height: 64,
  transition: "opacity 0 0.6s cubic-bezier(0.16, 1, 0.3, 1)",

  variants: {
    visibility: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
    },
  },
});

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      delay: 0,
      ease: "anticipate",
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      delay: 0.5,
      ease: "anticipate",
    },
  },
};

interface ToolBarViewProps {
  hidden?: boolean;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

export default function ToolBarView(
  props: ToolBarViewProps,
): React.ReactElement {
  const visibility = props.hidden === true ? "hidden" : "visible";
  return (
    <ToolBarRoot
      visibility={visibility}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <ToolBarContent visibility={visibility}>
        <ToolBar
          as={motion.div}
          variants={variants}
          animate={visibility}
          initial="visible"
        >
          <ButtonGroup>
            <EditorMenuView />
          </ButtonGroup>
          <FlexibleSpace />
          <CenterButtonGroup>
            <EditorTitleView />
          </CenterButtonGroup>
          <ButtonGroup>
            <OfflineIndicator />
            <EditorActionsView />
          </ButtonGroup>
        </ToolBar>
      </ToolBarContent>
    </ToolBarRoot>
  );
}
