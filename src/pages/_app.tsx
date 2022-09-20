import "src/lib/tailwind.css";
import { AppProps } from "next/app";
import Head from "next/head";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useState } from "react";
import { store } from "src/store";
import { Provider } from "react-redux";

export default function App(props: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              colorScheme,
              fontFamily: "Avenir Next",
              colors: {
                // override dark colors to change them for all components
                dark: [
                  "#d5d7e0",
                  "#acaebf",
                  "#8c8fa3",
                  "#666980",
                  "#4d4f66",
                  "#34354a",
                  "#2b2c3d",
                  "#282E33",
                  "#282E33",
                  "#3A3B42",
                ],
                darkMode: ["#212229", "#3A3B42"],
              },
            }}
          >
            <Component {...pageProps} />
          </MantineProvider>
        </ColorSchemeProvider>
      </Provider>
    </>
  );
}
