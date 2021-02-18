import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";

import EditorView from "./EditorView";

export default function Editor() {
  return (
    <RecoilRoot>
      <EditorView />
      <Toaster position="bottom-center" />
    </RecoilRoot>
  );
}
