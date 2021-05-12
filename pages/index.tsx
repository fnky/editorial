import type { ReactElement } from "react";
import { ShadowHeader } from "components";
import Page from "layouts/Page";

function IndexPage(): ReactElement {
  return (
    <Page title="Home">
      <ShadowHeader>Robert</ShadowHeader>
    </Page>
  );
}

export default IndexPage;
