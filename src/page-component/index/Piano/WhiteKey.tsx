import { Text, useMantineColorScheme } from "@mantine/core";
import { FC, useState } from "react";
import { useMediaQuery } from "src/lib/mantine";

import { useChordTones } from "src/hooks/useChordTones";

type Props = {
  notes: string[];
  index: number;
};

/** @package */
export const WhiteKey: FC<Props> = (props) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const largerThanSm = useMediaQuery("sm");

  const { isChordTone } = useChordTones(props.index);
  const [intreval, setInterval] = useState<string>("");

  return (
    <div
      className={`flex justify-center items-center ${
        isChordTone
          ? "bg-red-200 border-gray-300"
          : dark
          ? "bg-gray-300 border-gray-400"
          : "bg-white border-gray-300"
      } ${
        largerThanSm ? "w-14 h-44" : "w-12 h-40"
      }  border border-solid cursor-pointer`}
    >
      <Text className="pt-28 text-sm">{intreval}</Text>
    </div>
  );
};
