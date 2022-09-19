import { useMantineColorScheme, Grid, Switch, Text } from "@mantine/core";
import { FC, useState } from "react";
import { Key } from "@tonaljs/tonal";

import DegreeCard from "src/page-component/index/SelectDiatonic/DegreeCard";
import SelectKey from "src/page-component/index/SelectDiatonic/SelectKey";

/** @package */
export const SelectDiatonic: FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [key, setKey] = useState<string>("C");

  return (
    <div className="max-w-xl m-auto">
      <div className="mt-5 mb-3 flex items-center justify-between">
        <SelectKey setKey={setKey} />
        <div className="flex">
          <label htmlFor="Click Play">
            <Text weight={600} className="mr-2">
              Click Play
            </Text>
          </label>
          <Switch
            color={dark ? "indigo" : "dark"}
            id="Click Play"
            aria-label="Click Play"
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
