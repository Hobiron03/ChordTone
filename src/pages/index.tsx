import type { NextPage } from "next";
import { useMediaQuery, useViewportSize } from "src/lib/mantine";
import { Button, Container } from "@mantine/core";

import Layout from "src/component/Layout";
import InputChordCard from "src/page-component/home/InputChordCard";

const Home: NextPage = () => {
  const { width } = useViewportSize();
  const largerThanXs = useMediaQuery("xs");
  const largerThanSm = useMediaQuery("sm");
  const largerThanMd = useMediaQuery("md");
  const largerThanLg = useMediaQuery("lg");
  const largerThanXl = useMediaQuery("xl");

  const handleClick = () => {
    console.log("Hello!");
  };

  return (
    <Layout title="Home">
      <Container size="md">
        <InputChordCard />
        key
      </Container>
    </Layout>
  );
};

export default Home;
