import { ScrollArea } from "@mantine/core";
import { FC } from "react";
import { useMediaQuery } from "src/lib/mantine";
import { BlackKey } from "./BlackKey";
import { WhiteKey } from "./WhiteKey";

/** @package */
export const Piano: FC = () => {
  const largerThanSm = useMediaQuery("sm");
  return (
    <ScrollArea className="max-w-5xl" type="always">
      <div className="flex justify-center mt-5 ">
        <div className="flex relative">
          <WhiteKey />
          <BlackKey left={largerThanSm ? 35 : 30} />
          <WhiteKey />
          <BlackKey left={largerThanSm ? 92 : 80} />
          <WhiteKey />
          <WhiteKey />
          <BlackKey left={largerThanSm ? 205 : 175} />
          <WhiteKey />
          <BlackKey left={largerThanSm ? 260 : 224} />
          <WhiteKey />
          <BlackKey left={largerThanSm ? 315 : 270} />
          <WhiteKey />
        </div>
        <div className="flex relative">
          <WhiteKey />
          <BlackKey left={largerThanSm ? 35 : 30} />
          <WhiteKey />
          <BlackKey left={largerThanSm ? 92 : 80} />
          <WhiteKey />
          <WhiteKey />
          <BlackKey left={largerThanSm ? 205 : 175} />
          <WhiteKey />
          <BlackKey left={largerThanSm ? 260 : 224} />
          <WhiteKey />
          <BlackKey left={largerThanSm ? 315 : 270} />
          <WhiteKey />
        </div>
      </div>
    </ScrollArea>
  );
};
