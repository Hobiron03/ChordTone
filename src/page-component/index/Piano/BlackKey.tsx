import { Chord } from "@tonaljs/tonal";
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Text, useMantineColorScheme } from "@mantine/core";

import { useChordTones } from "src/hooks/useChordTones";
import { useMediaQuery } from "src/lib/mantine";
import { selectChord } from "src/state/selectChordSlice";

type Props = {
  notes: string[];
  left: number;
  index: number;
};

/** @package */
export const BlackKey: FC<Props> = (props: Props) => {
  const largerThanSm = useMediaQuery("sm");
  const { isChordTone, setIsChordTone } = useChordTones(props.index);
  const chord = useSelector(selectChord);

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
      className={`flex justify-center items-center text-white ${
        isChordTone ? "bg-yellow-500" : "bg-black"
      } ${
        largerThanSm ? "w-10 h-28" : "w-7 h-20"
      } border border-solid border-gray-400 absolute cursor-pointer`}
      style={{ left: props.left }}
    >
      <div
        className={`flex flex-col justify-center items-center ${
          isChordTone ? "text-m_dark-9" : "text-white"
        }`}
      >
        <Text className="text-xs font-bold">{props.notes[0]}</Text>
        <Text className="text-xs font-bold"></Text>
        <Text className="text-xs font-bold">{intreval}</Text>
      </div>
      {/* <Text className="text-sm text-m_dark-9 font-bold">{intreval}</Text> */}
    </div>
  );
};
