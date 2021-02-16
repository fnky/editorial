import type { ReactElement } from "react";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import toast from "react-hot-toast";
import RichMarkdownEditor from "rich-markdown-editor";
import type { ToastType } from "rich-markdown-editor/dist/types";
import { useDebouncedCallback } from "use-debounce";

import { Box } from "../../components";
import useCombinedCallback from "../../hooks/useCombinedCallback";
import { styled } from "../../stitches.config";

import EditorToolBarView from "./EditorToolBarView";
import {
  contentState,
  readOnlyState,
  darkState,
  templateState,
} from "./EditorState";
import theme from "./editor-theme";

const Container = styled(Box, {
  paddingLeft: "$6",
  paddingRight: "$6",
  paddingBottom: "$9",
  margin: "0 auto",
  marginTop: "calc((100vw - 1600px) * 0.072)",
  maxWidth: "800px",
  fontFamily: "$serif",
  fontSize: "calc(112.5% + 4 * (100vw - 600px) / 1000)",
  lineHeight: "1.4em",

  bp2: {
    fontSize: "calc(125%)",
  },
});

export default function EditorView(): ReactElement {
  const [content, setContent] = useRecoilState(contentState);
  const [readOnly, setReadOnly] = useRecoilState(readOnlyState);
  const dark = useRecoilValue(darkState);
  const template = useRecoilValue(templateState);

  const [isToolBarVisible, setIsToolBarVisible] = useState(true);
  const [isHoveringToolBar, setIsHoveringToolBar] = useState(false);

  const handleSave = useCallback((options: { done: boolean }) => {
    if (options.done) {
      setReadOnly(true);
    }

    toast(`Changes are automatically saved`, {
      id: "save",
    });
  }, []);

  const handleCancel = useCallback(() => {
    console.log("Cancelled");
    toast.success("Cancelled all changes.");
  }, []);

  const handleShowToast = useCallback((message: string, type: ToastType) => {
    toast(message, { icon: "ⓘ" });
  }, []);

  const { callback: persistChanges } = useDebouncedCallback(
    (getValue: () => string) => {
      const text = getValue();
      setContent(text);
    },
    250
  );

  const handleMouseEnter = useCallback(() => {
    setIsHoveringToolBar(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHoveringToolBar(false);
  }, []);

  const hideToolBar = useCallback(() => {
    if (!isHoveringToolBar) {
      setIsToolBarVisible(false);
    }
  }, [isHoveringToolBar]);

  useEffect(() => {
    if (!isToolBarVisible && isHoveringToolBar) {
      setIsToolBarVisible(true);
    }
  }, [isToolBarVisible, isHoveringToolBar]);

  const handleChange = useCombinedCallback(hideToolBar, persistChanges);

  return (
    <Box>
      <EditorToolBarView
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        hidden={!readOnly && !isToolBarVisible}
      />
      <Container>
        <RichMarkdownEditor
          theme={theme}
          template={template}
          readOnly={readOnly}
          readOnlyWriteCheckboxes
          onShowToast={handleShowToast}
          placeholder={undefined}
          extensions={[]}
          onCancel={handleCancel}
          defaultValue={content}
          onSave={handleSave}
          onChange={handleChange}
          dark={dark}
          autoFocus
        />
      </Container>
    </Box>
  );
}
