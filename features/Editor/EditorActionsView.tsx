import * as React from "react";
import { useCallback } from "react";
import { Box, Button } from "components";
import { motion, AnimateSharedLayout } from "framer-motion";
import toast from "react-hot-toast";
import { useRecoilState } from "recoil";
import { styled } from "stitches.config";
import { readOnlyState } from "./EditorState";

const EditorActions = styled(Box, {});

const Group = styled(motion.div, {
  display: "flex",

  "> * + *": {
    marginLeft: "var(--space-1) !important",
  },
});

export default function EditorActionsView(): React.ReactElement {
  const [readOnly, setReadOnly] = useRecoilState(readOnlyState);

  const edit = useCallback<React.MouseEventHandler<HTMLButtonElement>>(() => {
    setReadOnly(false);
  }, []);

  const save = useCallback<React.MouseEventHandler<HTMLButtonElement>>(() => {
    setReadOnly(true);
    toast.success("Changes have been saved!", { id: "save" });
  }, []);

  const cancel = useCallback<React.MouseEventHandler<HTMLButtonElement>>(() => {
    setReadOnly(true);
  }, []);

  const publish = useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => {
    // noop
  }, []);

  return (
    <EditorActions>
      <AnimateSharedLayout type="crossfade">
        {!readOnly ? (
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
