import * as React from "react";
import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button, Popover, PopoverContent, PopoverTrigger } from "components";
import EditorDocumentListView from "./EditorDocumentListView";

function EditorMenuPopover(): React.ReactElement {
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
}

export default function EditorMenuView(): React.ReactElement {
  return (
    <>
      <EditorMenuPopover />
    </>
  );
}
