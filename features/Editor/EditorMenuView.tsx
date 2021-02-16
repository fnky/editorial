import { ReactElement, useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components";
import EditorDocumentListView from "./EditorDocumentListView";

const EditorMenuPopover = () => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger as={Button} variant="ghost">
        <HamburgerMenuIcon />
      </PopoverTrigger>
      <PopoverContent>
        <EditorDocumentListView />
      </PopoverContent>
    </Popover>
  );
};

export default function EditorMenuView(): ReactElement {
  return (
    <>
      <EditorMenuPopover />
    </>
  );
}
