import type { ReactNode, ReactElement } from "react";
import Head from "next/head";

interface Props {
  children?: ReactNode;
  title?: string;
}

function Layout(props: Props): ReactElement {
  return (
    <div>
      <Head>
        <title>{props.title ?? "This is the default title"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {props.children}
    </div>
  );
}

export default Layout;
