import { Box, NavLink, useMantineColorScheme } from "@mantine/core";
import {
  IconHome2,
  IconUsers,
  IconMusic,
  IconMoonStars,
  IconSun,
} from "@tabler/icons";
import Link from "next/link";
import { FC } from "react";

type Props = {
  handleOnClickToggleDarkMode: () => void;
};

export const DrowerContent: FC<Props> = (props) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Box sx={{ width: 250 }}>
      <Link href="/">
        <NavLink
          label="Home"
          icon={<IconHome2 size={20} stroke={1.5} />}
          styles={{
            label: { fontSize: 20 },
          }}
        />
      </Link>
      <Link href="/about-page">
        <NavLink
          label="About"
          icon={<IconUsers size={20} stroke={1.5} />}
          styles={{
            label: { fontSize: 20 },
          }}
        />
      </Link>
      <Link href="/skillcheck-page">
        <NavLink
          label="Skill check"
          icon={<IconMusic size={20} stroke={1.5} />}
          styles={{
            label: { fontSize: 20 },
          }}
        />
      </Link>
      <NavLink
        label="Dark mode"
        icon={
          dark ? (
            <IconSun size={20} stroke={1.5} />
          ) : (
            <IconMoonStars size={20} stroke={1.5} />
          )
        }
        onClick={() => props.handleOnClickToggleDarkMode()}
        styles={{
          label: { fontSize: 20 },
        }}
      />
    </Box>
  );
};
