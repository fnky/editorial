import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssString } from "../stitches.config";

export default class Document extends NextDocument {
  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            // eslint-disable-next-line @typescript-eslint/naming-convention
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
