import { NextPage } from "next";
import { Layout } from "src/component/Layout";
import { SkillCheck } from "src/page-component/skill-check/index";

const SkillCheckPage: NextPage = () => {
  return (
    <Layout title="Skill Check">
      <SkillCheck />
    </Layout>
  );
};

export default SkillCheckPage;
