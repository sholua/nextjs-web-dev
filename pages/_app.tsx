import { AppProps } from "next/app";
import Layout from "../components/Layout";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import "../styles/globals.scss";
import axios from "axios";
import { SWRConfig } from "swr";
import { useState } from "react";

axios.defaults.baseURL = "http://localhost:4000";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
        }}
      >
        <SWRConfig
          value={{
            dedupingInterval: 5000,
            fetcher: (url: string) => axios(url).then((r) => r.data),
          }}
        >
          <Layout>
            <main>
              <Component {...pageProps} />
            </main>
          </Layout>
        </SWRConfig>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default MyApp;
