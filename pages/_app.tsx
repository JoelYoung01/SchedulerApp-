/* istanbul ignore file */
// This file is ignored since we cannot test it without running the full server
// Because of this, we keep this file as small as possible
import "../styles/globals.css";
import type { AppProps } from "next/app";
import DefaultLayout from "../components/Layout/DefaultLayout";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
