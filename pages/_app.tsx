import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default MyApp;
