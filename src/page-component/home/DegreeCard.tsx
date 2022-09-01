import { useMantineColorScheme } from "@mantine/core";
import { useMediaQuery } from "src/lib/mantine";

type Props = {};

const DegreeCard = (props: Props) => {
  const largerThanXs = useMediaQuery("xs");
  const largerThanSm = useMediaQuery("sm");
  const largerThanMd = useMediaQuery("md");
  const largerThanLg = useMediaQuery("lg");
  const largerThanXl = useMediaQuery("xl");
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <div
      className={`cursor-pointer transition duration-200 rounded  ${
        largerThanXs ? "w-24 h-24 m-2" : "w-16 h-16 m-1"
      } ${
        dark
          ? "bg-m_dark-10 border-m_dark-10 border-solid hover:hover:border-pink-100"
          : "bg-white shadow hover:shadow-lg "
      } `}
    >
      CM7 IM7
    </div>
  );
};

export default DegreeCard;
