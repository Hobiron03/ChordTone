import { Paper, Button, useMantineColorScheme } from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons";
import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Chord } from "@tonaljs/tonal";

import { selectChord, setChord } from "src/state/selectChordSlice";
import { useMediaQuery } from "src/lib/mantine/useMediaQuery";

/** @package */
export const InputChordCard: FC = () => {
  const largerThanXs = useMediaQuery("xs");
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const chord = useSelector(selectChord);
  const dispatch = useDispatch();

  const [currentChord, setCurrentChord] = useState<string>("C");
  const [isInputChord, setIsInputChord] = useState<boolean>(false);

  useEffect(() => {
    dispatch(setChord(localStorage.getItem("chord")!));
  }, []);

  useEffect(() => {
    console.log(Chord.get(chord));
    setCurrentChord(chord);
  }, [chord]);

  const handleOnClickPlayButton = useCallback(() => {
    console.log("handleOnClickPlayButton");
  }, []);

  const handleOnChangeChord = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentChord(e.target.value);
    localStorage.setItem("chord", e.target.value);
  };

  const handleOnFocus = () => {
    setIsInputChord(true);
  };

  const handleOnBlur = () => {
    const chordInfo = Chord.get(currentChord);
    if (!chordInfo.empty) {
      dispatch(setChord(currentChord));
    } else {
      setCurrentChord(chord);
    }
    setIsInputChord(false);
  };

  return (
    <div className="max-w-xl m-auto mt-2">
      <Paper shadow="sm" radius="md" p="md">
        <div className="text-center ">
          <input
            type="text"
            placeholder="Cmaj7"
            value={isInputChord ? undefined : chord}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            onChange={(e) => handleOnChangeChord(e)}
            className={`text-center w-72 h-full p-4 rounded border shadow ${
              largerThanXs ? "text-5xl" : "text-5xl"
            }  ${
              dark
                ? "bg-m_dark-10 text-gray-300 border-gray-700"
                : "bg-white border-gray-300"
            }`}
          />
        </div>
        <span className="flex justify-end mt-3">
          <Button
            size={`${largerThanXs ? "sm" : "xs"}`}
            color="dark"
            radius="xl"
            className={`${dark ? "bg-m_indigo-9" : undefined}`}
            onClick={handleOnClickPlayButton}
          >
            <IconPlayerPlay size={14} />
            <span className="ml-1">Play</span>
          </Button>
        </span>
      </Paper>
    </div>
  );
};
