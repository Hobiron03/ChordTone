import { useMantineColorScheme } from "@mantine/core";
import { useMediaQuery } from "src/lib/mantine";
import DegreeCard from "./DegreeCard";

type Props = {};

const SelectDiatonic = (props: Props) => {
  const largerThanXs = useMediaQuery("xs");
  const largerThanSm = useMediaQuery("sm");
  const largerThanMd = useMediaQuery("md");
  const largerThanLg = useMediaQuery("lg");
  const largerThanXl = useMediaQuery("xl");
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div className="max-w-xl m-auto mt-4 mb-5">
      Key = C
      <div className="flex flex-wrap justify-center mt-3">
        <DegreeCard />
        <DegreeCard />
        <DegreeCard />
        <DegreeCard />
        <DegreeCard />
        <DegreeCard />
        <DegreeCard />
      </div>
    </div>
  );
};

export default SelectDiatonic;
