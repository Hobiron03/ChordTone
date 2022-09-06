import { Select, useMantineColorScheme } from "@mantine/core";
import { Key } from "@tonaljs/tonal";
import { FC, useEffect, useState } from "react";

/** @package */
const SelectKey: FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  // redux-tool-kit にする
  const [key, setKey] = useState<string | null>("C");

  useEffect(() => {
    console.log(key);
  }, [key]);

  return (
    <div className="flex justify-center mb-4">
      <Select
        defaultValue={"C"}
        data={[
          { value: "Cb", label: "Key = Cb" },
          { value: "C", label: "Key = C" },
          { value: "C#", label: "Key = C#" },
          { value: "Db", label: "Key = Db" },
          { value: "D", label: "Key = D" },
          { value: "D#", label: "Key = D#" },
          { value: "Eb", label: "Key = Eb" },
          { value: "E", label: "Key = E" },
          { value: "F", label: "Key = F" },
          { value: "F#", label: "Key = F#" },
          { value: "G", label: "Key = G" },
          { value: "G#", label: "Key = G#" },
          { value: "Ab", label: "Key = Ab" },
          { value: "A#", label: "Key = A#" },
          { value: "Bb", label: "Key = Bb" },
          { value: "B", label: "Key = B" },
        ]}
        className="w-28 h-4 border-0"
        styles={{
          input: {
            border: "none",
            fontWeight: 600,
            backgroundColor: dark ? "#282E33" : undefined,
          },
          dropdown: {
            fontWeight: 600,
            backgroundColor: dark ? "#282E33" : undefined,
          },
        }}
        onChange={setKey}
      />
    </div>
  );
};

export default SelectKey;
