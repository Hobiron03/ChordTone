import { NextPage } from "next";
import { Layout } from "src/component/Layout";
import { CommingSoon } from "src/page-component/comming-soon";
import { SkillCheck } from "src/page-component/skill-check/index";

const SkillCheckPage: NextPage = () => {
  return (
    <Layout title="Skill Check">
      {/* <SkillCheck /> */}
      <CommingSoon />
    </Layout>
  );
};

export default SkillCheckPage;
