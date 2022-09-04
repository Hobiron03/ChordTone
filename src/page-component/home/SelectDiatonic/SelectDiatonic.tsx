import { useMantineColorScheme, Grid, Switch, Text } from "@mantine/core";
import DegreeCard from "src/page-component/home/DegreeCard";
import SelectKey from "src/page-component/home/SelectDiatonic/SelectKey";

type Props = {};

const SelectDiatonic = (props: Props) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div className="max-w-xl m-auto">
      <div className="mt-5 mb-3 flex items-center justify-between">
        <SelectKey />
        <div className="flex">
          <Text weight={600} className="mr-2">
            Click Play
          </Text>
          <Switch color={dark ? "indigo" : "dark"} />
        </div>
      </div>
      <Grid justify="left" gutter={0}>
        <Grid.Col span={3}>
          <DegreeCard />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default SelectDiatonic;
