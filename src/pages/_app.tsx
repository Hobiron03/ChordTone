import "src/lib/tailwind.css";
import { AppProps } from "next/app";
import Head from "next/head";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { store } from "src/store";
import { Provider } from "react-redux";
import { setChord } from "src/state/selectChordSlice";

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
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
        <meta name="theme-color" content="#fff" />
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
                indigo: [
                  "#EDF2FF",
                  "#DBE4FF",
                  "#BAC8FF",
                  "#91A7FF",
                  "#748FFC",
                  "#5C7CFA",
                  "#4C6EF5",
                  "#4263EB",
                  "#3B5BDB",
                  "#364FC7",
                ],
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
