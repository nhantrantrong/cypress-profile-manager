import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";

function ContourApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Contour Profile Manager">
      <Component {...pageProps} />
    </Layout>
  );
}

export default ContourApp;
