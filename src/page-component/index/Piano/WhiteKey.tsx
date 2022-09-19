import { useMantineColorScheme } from "@mantine/core";
import { FC } from "react";
import { useMediaQuery } from "src/lib/mantine";

/** @package */
export const WhiteKey: FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const largerThanSm = useMediaQuery("sm");
  return (
    <div
      className={`flex justify-center items-center ${
        dark ? "bg-gray-300 border-gray-400" : "bg-white border-gray-300"
      } ${
        largerThanSm ? "w-14 h-44" : "w-12 h-40"
      }  border border-solid cursor-pointer`}
    ></div>
  );
};
