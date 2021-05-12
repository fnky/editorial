import * as React from "react";
import { CaretDownIcon } from "@radix-ui/react-icons";
import {
  DocumentTitle,
  Flex,
  FluidTextInput,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "components";
import { useRecoilState } from "recoil";
import { styled } from "stitches.config";
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
    boxShadow: "inset 0 0 0 1px $colors$gray700, 0 0 0 1px $colors$gray700",
  },
  ":disabled": {
    backgroundColor: "$gray100",
    color: "$gray700",
    pointerEvents: "none",
  },

  "&:hover": {
    color: "$hiContrast",
    boxShadow: "inset 0 0 0 1px $colors$gray600",
  },
  "&:active": {
    borderColor: "$gray700",
    boxShadow: "inset 0 0 0 1px $colors$gray700",
    color: "$hiContrast",
    backgroundColor: "$gray200",
  },
  variants: {
    state: {
      active: {
        borderColor: "$gray700",
        boxShadow: "inset 0 0 0 1px $colors$gray700",
        color: "$hiContrast",
        backgroundColor: "$gray200",
      },
    },
  },
});

// const titleButtonCss = css({
//   paddingLeft: "$1",
//   paddingRight: "$1",
//   marginLeft: "-$1",
//   marginRight: "-$1",
//   fontWeight: 500,
//   fontSize: "$2",
//   // @TODO: Tweak this so it better matches truncating based on the viewport width
//   //        (take action buttons width into consideration)
//   maxWidth: "calc(40px + (600 - 40) * ((90vw - 200px) / (1600 - 200)))",
//   bp2: {
//     fontSize: "$3",
//   },
// });

// const TitleButtonInner = styled("span", {
//   display: "block",
//   textOverflow: "ellipsis",
//   overflow: "hidden",
//   whiteSpace: "nowrap",
//   justifyContent: "flex-start",
//   // maxWidth: "96px",
// });

const EditorDetailsPopoverContent = styled(PopoverContent, {
  padding: "20px",
});

function EditorDetailsPopover(): React.ReactElement {
  const [open, setOpen] = React.useState(false);
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
}

const Title = styled(FluidTextInput, {
  margin: "0 -$1",
  fontWeight: 500,
});

export default function EditorTitleView(): React.ReactElement {
  const [title, setTitle] = useRecoilState(titleState);

  return (
    <DocumentTitle
      className="EditorDocumentTitle"
      title={
        <Flex css={{ display: "flex", alignItems: "center" }}>
          <Title value={title} onSave={setTitle} />
          <EditorDetailsPopover />
        </Flex>
      }
      folder="Drafts"
    />
  );
}
