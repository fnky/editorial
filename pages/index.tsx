import type { ReactElement } from "react";
import Page from "layouts/Page";
import { ShadowHeader } from "components";

const IndexPage = (): ReactElement => (
  <Page title="Home">
    <ShadowHeader>Robert</ShadowHeader>
  </Page>
);

export default IndexPage;
