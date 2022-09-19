import { Container } from "@mantine/core";
import { SelectDiatonic } from "./SelectDiatonic";
import { InputChordCard } from "./InputChordCard";
import { Piano } from "./Piano/Piano";
import { FC } from "react";

/** @package */
export const Index: FC = () => {
  return (
    <Container size="md">
      <InputChordCard />
      <SelectDiatonic />
      <Piano />
    </Container>
  );
};
