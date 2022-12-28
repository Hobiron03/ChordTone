import { Container } from "@mantine/core";
import { FC } from "react";
import styles from "./commingSoon.module.css";

/** @package */
export const CommingSoon: FC = () => {
  return (
    <Container size="md">
      <div className={`flex flex-col items-center mt-20 ${styles.textWrapper}`}>
        <h1 className={`text-7xl ${styles.text}`}>Comming</h1>
        <h1 className={`text-7xl ${styles.text}`}>Soon!</h1>
      </div>
    </Container>
  );
};
