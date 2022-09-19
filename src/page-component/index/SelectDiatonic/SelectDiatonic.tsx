import { useMantineColorScheme, Grid, Switch, Text } from "@mantine/core";
import { FC } from "react";
import DegreeCard from "src/page-component/index/SelectDiatonic/DegreeCard";
import SelectKey from "src/page-component/index/SelectDiatonic/SelectKey";

/** @package */
export const SelectDiatonic: FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div className="max-w-xl m-auto">
      <div className="mt-5 mb-3 flex items-center justify-between">
        <SelectKey />
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
      <Grid justify="" gutter={0}>
        {[...Array(7)].map((element, index) => {
          return (
            <Grid.Col key={index} span={3} className="flex justify-center">
              <DegreeCard />
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};
