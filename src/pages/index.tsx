import { NextPage } from "next";
import { Layout } from "src/component/Layout";
import { Index } from "src/page-component/index/index";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home">
      <Index />
    </Layout>
  );
};

export default IndexPage;
