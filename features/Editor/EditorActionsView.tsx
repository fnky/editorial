import type { ReactElement, MouseEventHandler } from "react";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import toast from "react-hot-toast";
import { motion, AnimateSharedLayout } from "framer-motion";
import { styled } from "stitches.config";
import { Box, Button } from "components";

import { readOnlyState } from "./EditorState";

const EditorActions = styled(Box, {});

const Group = styled(motion.div, {
  display: "flex",

  "> * + *": {
    marginLeft: "var(--space-1) !important",
  },
});

export default function EditorActionsView(): ReactElement {
  const [readOnly, setReadOnly] = useRecoilState(readOnlyState);
  const isEditing = readOnly === false;

  const edit = useCallback<MouseEventHandler>(() => {
    setReadOnly(false);
  }, []);

  const save = useCallback<MouseEventHandler>(() => {
    setReadOnly(true);
    toast.success("Changes have been saved!", { id: "save" });
  }, []);

  const cancel = useCallback<MouseEventHandler>(() => {
    setReadOnly(true);
  }, []);

  const publish = useCallback<MouseEventHandler>(() => {}, []);

  return (
    <EditorActions>
      <AnimateSharedLayout type="crossfade">
        {isEditing ? (
          <Group
            layoutId="state"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <Button onClick={save}>Save</Button>
            <Button variant="red" onClick={cancel}>
              Cancel
            </Button>
          </Group>
        ) : (
          <Group
            layoutId="state"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <Button onClick={edit}>Edit</Button>
            <Button variant="blue" onClick={publish}>
              Publish
            </Button>
          </Group>
        )}
      </AnimateSharedLayout>
    </EditorActions>
  );
}
