import Head from "next/head";
import { ReactNode, FC } from "react";
import { useMantineColorScheme } from "@mantine/core";

import Header from "src/component/Header/Header";
import Footer from "src/component/Footer";

export const Layout: FC<{ children: ReactNode; title: string }> = (props) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <div className="flex flex-col h-screen font-noto ">
        <Header />
        <main
          className={`flex-1 justify-center items-cente ${
            dark ? "bg-m_dark-11" : "bg-m_gray-10"
          }`}
        >
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
};
