import type { ReactElement } from "react";
import { Loading } from "components";
import Page from "layouts/Page";
import dynamic from "next/dynamic";

const Editor = dynamic(async () => import("features/Editor"), {
  ssr: false,
  loading: () => <Loading />,
});

function EditPage(): ReactElement {
  return (
    <Page title="Edit">
      <Editor />
    </Page>
  );
}

export default EditPage;
