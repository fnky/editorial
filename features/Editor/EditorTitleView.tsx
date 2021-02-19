import { ReactElement, useState } from "react";
import { useRecoilState } from "recoil";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { css, styled } from "stitches.config";
import {
  DocumentTitle,
  Flex,
  FluidTextInput,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "components";

import EditorDetailsFormView from "./EditorDetailsFormView";
import { titleState } from "./EditorState";

const ArrowTrigger = styled(PopoverTrigger, {
  borderRadius: "$1",
  border: "none",
  color: "$gray800",
  transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  transitionProperty: "color box-shadow background-color",

  marginLeft: "$1",

  "&:focus": {
    boxShadow: "inset 0 0 0 1px $gray700, 0 0 0 1px $gray700",
  },
  ":disabled": {
    backgroundColor: "$gray100",
    color: "$gray700",
    pointerEvents: "none",
  },

  "&:hover": {
    color: "$hiContrast",
    boxShadow: "inset 0 0 0 1px $gray600",
  },
  "&:active": {
    borderColor: "$gray700",
    boxShadow: "inset 0 0 0 1px $gray700",
    color: "$hiContrast",
    backgroundColor: "$gray200",
  },
  variants: {
    state: {
      active: {
        borderColor: "$gray700",
        boxShadow: "inset 0 0 0 1px $gray700",
        color: "$hiContrast",
        backgroundColor: "$gray200",
      },
    },
  },
});

const titleButtonCss = css({
  paddingLeft: "$1",
  paddingRight: "$1",
  marginLeft: "-$1",
  marginRight: "-$1",
  fontWeight: 500,
  fontSize: "$2",
  // @TODO: Tweak this so it better matches truncating based on the viewport width
  //        (take action buttons width into consideration)
  maxWidth: "calc(40px + (600 - 40) * ((90vw - 200px) / (1600 - 200)))",
  bp2: {
    fontSize: "$3",
  },
});

const TitleButtonInner = styled("span", {
  display: "block",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  justifyContent: "flex-start",
  // maxWidth: "96px",
});

const EditorDetailsPopoverContent = styled(PopoverContent, {
  padding: "20px",
});

const EditorDetailsPopover = () => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <ArrowTrigger state={open ? "active" : undefined}>
        <CaretDownIcon />
      </ArrowTrigger>
      <EditorDetailsPopoverContent>
        <EditorDetailsFormView />
      </EditorDetailsPopoverContent>
    </Popover>
  );
};

export function Title() {
  const [title, setTitle] = useRecoilState(titleState);

  return <FluidTextInput value={title} onSave={setTitle} />;
}

export default function EditorTitleView(): ReactElement {
  return (
    <DocumentTitle
      className="EditorDocumentTitle"
      title={
        <Flex css={{ display: "flex", alignItems: "center" }}>
          <Title />
          <EditorDetailsPopover />
        </Flex>
      }
      folder="Drafts"
    />
  );
}
