import { Select, Text, useMantineColorScheme } from "@mantine/core";

const SelectKey = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
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
      />
    </div>
  );
};

export default SelectKey;
