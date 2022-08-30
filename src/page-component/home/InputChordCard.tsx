import { Paper, Button, useMantineColorScheme } from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons";
import { useCallback } from "react";

import { useMediaQuery } from "src/lib/mantine/useMediaQuery";

const InputChordCard = () => {
  const largerThanSm = useMediaQuery("sm");
  const largerThanXs = useMediaQuery("xs");
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const handleOnClickPlayButton = useCallback(() => {
    console.log("handleOnClickPlayButton");
  }, []);

  return (
    <div className="max-w-xl m-auto mt-2 ">
      <Paper shadow="sm" radius="md" p="lg">
        <div className="text-center ">
          <input
            type="text"
            placeholder="CM7"
            className={`text-center w-64 h-full p-6 rounded border shadow border-gray-200  ${
              largerThanXs ? "text-7xl" : "text-5xl"
            }  ${dark ? "bg-m_dark-10 text-gray-300" : "bg-white"}`}
          />
        </div>
        <span className="flex justify-end mt-2">
          <Button
            size={`${largerThanXs ? "sm" : "xs"}`}
            color="dark"
            radius="xl"
            className={`${dark ? "bg-purple-600" : undefined}`}
          >
            <IconPlayerPlay size={14} />
            <span className=" ml-1">Play</span>
          </Button>
        </span>
      </Paper>
    </div>
  );
};

export default InputChordCard;
