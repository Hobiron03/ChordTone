import {
  Text,
  Paper,
  Button,
  Input,
  Textarea,
  useMantineColorScheme,
} from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons";
import { useCallback } from "react";

const InputChordCard = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const handleOnClickPlayButton = useCallback(() => {
    console.log("handleOnClickPlayButton");
  }, []);

  return (
    <div className="max-w-lg m-auto mt-2 ">
      <Paper shadow="sm" radius="md" p="xl" styles={{}}>
        <div className="text-center">
          <input
            type="text"
            placeholder="Cm7"
            className={`text-center w-80 h-16 mt-10 text-7xl border-none  ${
              dark ? "bg-m_dark-10 text-gray-300" : "bg-white"
            }`}
          />
          {/* <Text weight={500} size={80}>
            CM7
          </Text> */}
        </div>
        <span className="flex justify-end mt-5">
          <Button
            color="dark"
            radius="xl"
            className={`${dark ? "bg-purple-600" : undefined}`}
          >
            <IconPlayerPlay size={14} />
            <span className="ml-1">Play</span>
          </Button>
        </span>
      </Paper>
    </div>
  );
};

export default InputChordCard;
