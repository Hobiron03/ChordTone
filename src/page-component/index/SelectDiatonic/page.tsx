import { useMantineColorScheme, Grid, Switch, Text } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import { Key } from "@tonaljs/tonal";
import { IconMusicOff, IconMusic } from "@tabler/icons";

import DegreeCard from "src/page-component/index/SelectDiatonic/DegreeCard";
import SelectKey from "src/page-component/index/SelectDiatonic/SelectKey";
import { useSoundChord } from "src/hooks/useSoundChord";
import { useSelector } from "react-redux";
import { selectChord } from "src/state/selectChordSlice";

/** @package */
export const SelectDiatonic: FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { soundChord } = useSoundChord();
  const chord = useSelector(selectChord);

  const [key, setKey] = useState<string>("C");
  const [checked, setChecked] = useState(false);

  const onDegreeCardClick = (chord: string): void => {
    soundChord(chord);
  };

  return (
    <div className="max-w-xl m-auto">
      <div className="mt-5 mb-3 flex items-center justify-between">
        <SelectKey setKey={setKey} />
        <div className="flex  items-center ">
          <label htmlFor="Click Play">
            <Text weight={600} className="mr-2">
              On select card play
            </Text>
          </label>
          <Switch
            color={dark ? "indigo.9" : "dark"}
            id="Click Play"
            aria-label="Click Play"
            checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
            onLabel={<IconMusic size={15} stroke={2} />}
            offLabel={<IconMusicOff size={15} stroke={2} />}
          />
        </div>
      </div>
      <Grid gutter={0}>
        {key.includes("m")
          ? Key.minorKey(key.replace("m", "")).natural.chords.map(
              (chord, index) => {
                return (
                  <Grid.Col
                    key={index}
                    span={3}
                    className="flex justify-center"
                  >
                    <DegreeCard
                      onDegreeCardPlay={onDegreeCardClick}
                      chord={chord}
                      degree={
                        Key.minorKey(key.replace("m", "")).natural.grades[index]
                      }
                    />
                  </Grid.Col>
                );
              }
            )
          : Key.majorKey(key).chords.map((chord, index) => {
              return (
                <Grid.Col key={index} span={3} className="flex justify-center">
                  <DegreeCard
                    onDegreeCardPlay={onDegreeCardClick}
                    chord={chord}
                    degree={Key.majorKey(key).grades[index]}
                  />
                </Grid.Col>
              );
            })}
      </Grid>
    </div>
  );
};
