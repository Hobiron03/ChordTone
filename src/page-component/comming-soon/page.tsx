import { Container, useMantineColorScheme } from "@mantine/core";
import { FC } from "react";
import styles from "./commingSoon.module.css";

/** @package */
export const CommingSoon: FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Container size="md">
      <div className={`flex flex-col items-center mt-20 ${styles.textWrapper}`}>
        <h1
          className={`text-7xl ${dark ? "text-gray-300" : "text-gray-600"} ${
            styles.text
          }`}
        >
          Comming
        </h1>
        <h1
          className={`text-7xl ${dark ? "text-gray-300" : "text-gray-600"} ${
            styles.text
          }`}
        >
          Soon!
        </h1>
      </div>
    </Container>
  );
};
