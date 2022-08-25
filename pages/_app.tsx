import { AppProps } from "next/app";
import Layout from "../components/Layout";
import { MantineProvider } from "@mantine/core";
import "../styles/globals.scss";
import axios from "axios";
import { SWRConfig } from "swr";

axios.defaults.baseURL = "http://localhost:4000";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme: "light",
    }}
  >
    <SWRConfig
      value={{ fetcher: (url: string) => axios(url).then((r) => r.data) }}
    >
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </SWRConfig>
  </MantineProvider>
);

export default MyApp;
