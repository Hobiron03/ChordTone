import React, { FC } from "react";
import { useMediaQuery } from "src/lib/mantine";

type Props = {
  left: number;
};

export const BlackKey: FC<Props> = (props: Props) => {
  const largerThanSm = useMediaQuery("sm");
  return (
    <div
      className={`flex justify-center items-center text-white bg-black ${
        largerThanSm ? "w-10 h-28" : "w-8 h-24"
      } border border-solid border-gray-300 absolute cursor-pointer`}
      style={{ left: props.left }}
    ></div>
  );
};
