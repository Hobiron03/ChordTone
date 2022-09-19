import { FC } from "react";
import { useMediaQuery } from "src/lib/mantine";

/** @package */
export const WhiteKey: FC = () => {
  const largerThanSm = useMediaQuery("sm");
  return (
    <div
      className={`flex justify-center items-center bg-white ${
        largerThanSm ? "w-14 h-44" : "w-12 h-40"
      }  border border-solid border-gray-300 cursor-pointer`}
    ></div>
  );
};
