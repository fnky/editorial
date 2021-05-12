import * as React from "react";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import EditorView from "./EditorView";

export default function Editor(): React.ReactElement {
  return (
    <RecoilRoot>
      <EditorView />
      <Toaster position="bottom-center" />
    </RecoilRoot>
  );
}
