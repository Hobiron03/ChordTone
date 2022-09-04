import { useMantineColorScheme, Grid } from "@mantine/core";
import { useMediaQuery } from "src/lib/mantine";
import DegreeCard from "./DegreeCard";

type Props = {};

const SelectDiatonic = (props: Props) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div className="max-w-xl m-auto">
      <div className="mt-5 mb-3">Key = C</div>
      <Grid justify="left" gutter={0}>
        <Grid.Col span={3}>
          <DegreeCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <DegreeCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <DegreeCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <DegreeCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <DegreeCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <DegreeCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <DegreeCard />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default SelectDiatonic;
