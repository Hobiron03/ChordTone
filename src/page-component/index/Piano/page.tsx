import { ScrollArea } from "@mantine/core";
import { FC, useEffect, useRef, useState } from "react";
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
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });
  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport.current?.scrollTo({
      left: viewport.current.scrollWidth,
      behavior: "smooth",
    });

  useEffect(() => {
    setCurrentChord(chord);
  }, []);

  return (
    <ScrollArea className="max-w-5xl" type="always" viewportRef={viewport}>
      <div className="flex justify-center mt-5 ">
        <div className="flex relative">
          <WhiteKey notes={["C", "B#"]} index={0} />
          <BlackKey
            notes={["C#", "Db"]}
            left={largerThanSm ? 35 : 25}
            index={1}
          />
          <WhiteKey notes={["D", "C##", "Ebb"]} index={2} />
          <BlackKey
            notes={["D#", "Eb"]}
            left={largerThanSm ? 92 : 64}
            index={3}
          />
          <WhiteKey notes={["E", "D##", "Fb"]} index={4} />
          <WhiteKey notes={["F", "E#"]} index={5} />
          <BlackKey
            notes={["F#", "Gb"]}
            left={largerThanSm ? 205 : 145}
            index={6}
          />
          <WhiteKey notes={["G", "F##", "Abb"]} index={7} />
          <BlackKey
            notes={["G#", "Ab"]}
            left={largerThanSm ? 260 : 185}
            index={8}
          />
          <WhiteKey notes={["A", "G##", "Bbb"]} index={9} />
          <BlackKey
            notes={["A#", "Bb"]}
            left={largerThanSm ? 315 : 225}
            index={10}
          />
          <WhiteKey notes={["B", "A##", "Cb"]} index={11} />
          <WhiteKey notes={["C", "B#"]} index={12} />
          <BlackKey
            notes={["C#", "Db"]}
            left={largerThanSm ? 428 : 305}
            index={13}
          />
          <WhiteKey notes={["D", "C##", "Ebb"]} index={14} />
          <BlackKey
            notes={["D#", "Eb"]}
            left={largerThanSm ? 485 : 345}
            index={15}
          />
          <WhiteKey notes={["E", "D##", "Fb"]} index={16} />
          <WhiteKey notes={["F", "E#"]} index={17} />
          <BlackKey
            notes={["F#", "Gb"]}
            left={largerThanSm ? 595 : 425}
            index={18}
          />
          <WhiteKey notes={["G", "F##", "Abb"]} index={19} />
          <BlackKey
            notes={["G#", "Ab"]}
            left={largerThanSm ? 652 : 465}
            index={20}
          />
          <WhiteKey notes={["A", "G##", "Bbb"]} index={21} />
          <BlackKey
            notes={["A#", "Bb"]}
            left={largerThanSm ? 706 : 505}
            index={22}
          />
          <WhiteKey notes={["B", "A##", "Cb"]} index={23} />
        </div>
      </div>
    </ScrollArea>
  );
};
