import { Text, useMantineColorScheme } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useMediaQuery } from "src/lib/mantine";
import { selectChord } from "src/state/selectChordSlice";
import { useChordTones } from "src/hooks/useChordTones";
import { Chord } from "@tonaljs/tonal";

type Props = {
  notes: string[];
  index: number;
};

/** @package */
export const WhiteKey: FC<Props> = (props) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const largerThanSm = useMediaQuery("sm");
  const chord = useSelector(selectChord);

  const { isChordTone, setIsChordTone } = useChordTones(props.index);
  const [intreval, setInterval] = useState<string>("");

  useEffect(() => {
    if (isChordTone) {
      Chord.get(chord).notes.forEach((note, index) => {
        if (props.notes.includes(note)) {
          setInterval(Chord.get(chord).intervals[index]);
        }
      });
    } else {
      setInterval("");
    }
  }, [isChordTone]);

  useEffect(() => {
    setIsChordTone(false);
  }, [chord]);

  return (
    <div
      className={`flex justify-center items-center ${
        isChordTone
          ? "bg-yellow-500 border-gray-300"
          : dark
          ? "bg-gray-300 border-gray-400"
          : "bg-white border-gray-300"
      } ${
        largerThanSm ? "w-14 h-44" : "w-10 h-36"
      }  border border-solid cursor-pointer`}
    >
      <div
        className={`flex flex-col ${
          largerThanSm ? "pt-24" : "pt-16"
        } justify-center items-center`}
      >
        <Text className="text-sm text-m_dark-9 font-bold">
          {props.notes[0]}
        </Text>
        <Text className="text-xs text-m_dark-9 font-bold">{intreval}</Text>
      </div>
      {/* <Text className="text-sm pt-28 text-m_dark-9 font-bold">{intreval}</Text> */}
    </div>
  );
};
