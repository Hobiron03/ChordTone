import { ScrollArea } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectChord } from "src/state/selectChordSlice";
import { useMediaQuery } from "src/lib/mantine";
import { BlackKey } from "src/page-component/index/Piano/BlackKey";
import { WhiteKey } from "src/page-component/index/Piano/WhiteKey";

/** @package */
export const Piano: FC = () => {
  const largerThanSm = useMediaQuery("sm");
  const chord = useSelector(selectChord);
  const [_, setCurrentChord] = useState<string>("");

  useEffect(() => {
    setCurrentChord(chord);
    console.log(chord);
  }, []);

  return (
    <ScrollArea className="max-w-5xl" type="always">
      <div className="flex justify-center mt-5 ">
        <div className="flex relative">
          <WhiteKey notes={["C"]} index={0} />
          <BlackKey left={largerThanSm ? 35 : 30} index={1} />
          <WhiteKey notes={["D"]} index={2} />
          <BlackKey left={largerThanSm ? 92 : 80} index={3} />
          <WhiteKey notes={["E"]} index={4} />
          <WhiteKey notes={["F"]} index={5} />
          <BlackKey left={largerThanSm ? 205 : 175} index={6} />
          <WhiteKey notes={["G"]} index={7} />
          <BlackKey left={largerThanSm ? 260 : 224} index={8} />
          <WhiteKey notes={["A"]} index={9} />
          <BlackKey left={largerThanSm ? 315 : 270} index={10} />
          <WhiteKey notes={["B"]} index={11} />
          <WhiteKey notes={["C"]} index={12} />
          <BlackKey left={largerThanSm ? 428 : 367} index={13} />
          <WhiteKey notes={["D"]} index={14} />
          <BlackKey left={largerThanSm ? 485 : 416} index={15} />
          <WhiteKey notes={["E"]} index={16} />
          <WhiteKey notes={["F"]} index={17} />
          <BlackKey left={largerThanSm ? 595 : 512} index={18} />
          <WhiteKey notes={["G"]} index={19} />
          <BlackKey left={largerThanSm ? 652 : 560} index={20} />
          <WhiteKey notes={["A"]} index={21} />
          <BlackKey left={largerThanSm ? 706 : 607} index={22} />
          <WhiteKey notes={["B"]} index={23} />
        </div>
      </div>
    </ScrollArea>
  );
};
