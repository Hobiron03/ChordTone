import { useMantineColorScheme, Text } from "@mantine/core";
import { FC } from "react";
import { useMediaQuery } from "src/lib/mantine";

type Props = {
  chord: string;
  degree: number;
};

const degrees = ["IM7", "IIm7", "IIIm7", "IVM7", "V7", "VIm7", "VIIm7b5"];

/** @package */
const DegreeCard: FC<Props> = (props) => {
  const largerThanSe = useMediaQuery("se");
  const largerThanXs = useMediaQuery("xs");

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <div
      className={`flex cursor-pointer transition duration-200 rounded justify-center items-center ${
        largerThanXs
          ? "w-24 h-24 ml-3 mt-2"
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
        <Text weight={600} size={largerThanXs ? 18 : largerThanSe ? 16 : 12}>
          {props.chord}
        </Text>
        <Text
          weight={500}
          size={largerThanSe ? 14 : 10}
          className="mt-0 pt-0 text-gray-400"
        >
          {degrees[props.degree]}
        </Text>
      </div>
    </div>
  );
};

export default DegreeCard;
