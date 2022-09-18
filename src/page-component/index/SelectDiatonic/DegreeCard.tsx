import { useMantineColorScheme, Text } from "@mantine/core";
import { FC } from "react";
import { useMediaQuery } from "src/lib/mantine";

/** @package */
const DegreeCard: FC = () => {
  const largerThanSe = useMediaQuery("se");
  const largerThanXs = useMediaQuery("xs");

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <div
      className={`flex cursor-pointer transition duration-200 rounded justify-center items-center ${
        largerThanXs
          ? "w-24 h-24 ml-4 mt-3"
          : largerThanSe
          ? `w-20 h-20 m-1`
          : "w-16 h-16 m-2"
      } ${
        dark
          ? "bg-m_dark-10 border-m_dark-10 border-solid hover:border-indigo-600"
          : "bg-white shadow hover:shadow-lg "
      } `}
    >
      <div className="h-full flex flex-col justify-center items-center">
        <Text weight={600} size={largerThanSe ? 24 : 18}>
          CM7
        </Text>
        <Text
          weight={500}
          size={largerThanSe ? 16 : 12}
          className="mt-0 pt-0 text-gray-400"
        >
          IM7
        </Text>
      </div>
    </div>
  );
};

export default DegreeCard;
