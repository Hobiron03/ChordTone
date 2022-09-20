import React, { FC } from "react";

import { useChordTones } from "src/hooks/useChordTones";
import { useMediaQuery } from "src/lib/mantine";

type Props = {
  left: number;
  index: number;
};

export const BlackKey: FC<Props> = (props: Props) => {
  const largerThanSm = useMediaQuery("sm");
  const { isChordTone } = useChordTones(props.index);

  return (
    <div
      className={`flex justify-center items-center text-white ${
        isChordTone ? "bg-red-300" : "bg-black"
      } ${
        largerThanSm ? "w-10 h-28" : "w-8 h-24"
      } border border-solid border-gray-300 absolute cursor-pointer`}
      style={{ left: props.left }}
    >
      {/* <Text className="text-xs">Root</Text> */}
    </div>
  );
};
