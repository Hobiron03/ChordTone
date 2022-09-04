import { useMantineColorScheme } from "@mantine/core";
import { useMediaQuery } from "src/lib/mantine";

type Props = {};

const DegreeCard = (props: Props) => {
  const largerThanSe = useMediaQuery("se");
  const largerThanXs = useMediaQuery("xs");

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <div
      className={`cursor-pointer transition duration-200 rounded text-center ${
        largerThanXs
          ? "w-24 h-24 ml-4 mt-3"
          : largerThanSe
          ? `w-20 h-20 m-1`
          : "w-16 h-16 m-2"
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
