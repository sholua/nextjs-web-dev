import { AppProps } from "next/app";
import Layout from "../components/Layout";
import { MantineProvider } from "@mantine/core";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme: "light",
    }}
  >
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  </MantineProvider>
);

export default MyApp;
