import type { ReactElement } from "react";
import type { AppProps } from "next/app";
import "../styles.css";

// eslint-disable-next-line react/destructuring-assignment, destructuring/in-params
export default function App({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
