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
  }, []);

  return (
    <ScrollArea className="max-w-5xl" type="always">
      <div className="flex justify-center mt-5 ">
        <div className="flex relative">
          <WhiteKey notes={["C", "B#"]} index={0} />
          <BlackKey
            notes={["C#", "Db"]}
            left={largerThanSm ? 35 : 30}
            index={1}
          />
          <WhiteKey notes={["D", "C##"]} index={2} />
          <BlackKey
            notes={["D#", "Eb"]}
            left={largerThanSm ? 92 : 80}
            index={3}
          />
          <WhiteKey notes={["E", "D##"]} index={4} />
          <WhiteKey notes={["F", "E#"]} index={5} />
          <BlackKey
            notes={["F#", "Gb"]}
            left={largerThanSm ? 205 : 175}
            index={6}
          />
          <WhiteKey notes={["G", "F##"]} index={7} />
          <BlackKey
            notes={["G#", "Ab"]}
            left={largerThanSm ? 260 : 224}
            index={8}
          />
          <WhiteKey notes={["A", "G##"]} index={9} />
          <BlackKey
            notes={["A#", "Bb"]}
            left={largerThanSm ? 315 : 270}
            index={10}
          />
          <WhiteKey notes={["B", "A##"]} index={11} />
          <WhiteKey notes={["C", "B#"]} index={12} />
          <BlackKey
            notes={["C#", "Db"]}
            left={largerThanSm ? 428 : 367}
            index={13}
          />
          <WhiteKey notes={["D", "C##"]} index={14} />
          <BlackKey
            notes={["D#", "Eb"]}
            left={largerThanSm ? 485 : 416}
            index={15}
          />
          <WhiteKey notes={["E", "D##"]} index={16} />
          <WhiteKey notes={["F", "E#"]} index={17} />
          <BlackKey
            notes={["F#", "Gb"]}
            left={largerThanSm ? 595 : 512}
            index={18}
          />
          <WhiteKey notes={["G", "F##"]} index={19} />
          <BlackKey
            notes={["G#", "Ab"]}
            left={largerThanSm ? 652 : 560}
            index={20}
          />
          <WhiteKey notes={["A", "G##"]} index={21} />
          <BlackKey
            notes={["A#", "Bb"]}
            left={largerThanSm ? 706 : 607}
            index={22}
          />
          <WhiteKey notes={["B", "A##"]} index={23} />
        </div>
      </div>
    </ScrollArea>
  );
};
