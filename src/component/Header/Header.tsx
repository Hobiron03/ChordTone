import {
  ActionIcon,
  Group,
  Text,
  Drawer,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconMenu2,
  IconSun,
  IconMoonStars,
  IconUsers,
  IconHome,
  IconMusic,
} from "@tabler/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import Image from "next/image";

import { useMediaQuery } from "src/lib/mantine";
import { DrowerContent } from "./DrowerContent";

export const Header = () => {
  const largerThanSm = useMediaQuery("sm");
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [opendDrawer, setOpenedDrawer] = useState<boolean>(false);

  const onClickToggleIconMenu = useCallback(() => {
    setOpenedDrawer(!opendDrawer);
  }, [opendDrawer]);

  const handleOnClickToggleDarkMode = () => {
    toggleColorScheme();
    if (dark) {
      localStorage.setItem("darkMode", "off");
    } else {
      localStorage.setItem("darkMode", "on");
    }
  };

  useEffect(() => {
    checkDarkMode();
  }, []);

  const checkDarkMode = (): void => {
    if (localStorage.getItem("darkMode") === "on" && !dark) {
      toggleColorScheme();
    }
  };

  return (
    <div className="font-noto">
      <Drawer
        opened={opendDrawer}
        onClose={() => setOpenedDrawer(false)}
        padding="md"
        position="right"
        overlayOpacity={0.15}
        overlayBlur={2}
        transition="slide-left"
        transitionDuration={250}
        transitionTimingFunction="ease"
        styles={{
          drawer: { backgroundColor: dark ? "#3A3B42" : "white" },
        }}
      >
        <DrowerContent
          handleOnClickToggleDarkMode={handleOnClickToggleDarkMode}
          checkDarkMode={checkDarkMode}
        />
      </Drawer>

      <header
        className={`flex justify-center m-auto max-w-5xl h-16   ${
          dark ? "bg-m_dark-10" : "bg-m_white-10"
        }`}
      >
        <span className="h-full w-9/12 flex items-center justify-between">
          <Group spacing="xl">
            <Link href="/">
              <Text weight={600} size={25} onClick={checkDarkMode}>
                <span
                  className={`cursor-pointer ${
                    largerThanSm ? "mr-10" : undefined
                  }`}
                >
                  Chord Tone
                </span>
              </Text>
            </Link>
            <Link href="/">
              <nav
                onClick={() => checkDarkMode()}
                className={
                  largerThanSm
                    ? `cursor-pointer flex items-center h-16 p-2  rounded-md ${
                        dark ? "hover:bg-slate-900" : "hover:bg-slate-100"
                      }`
                    : "hidden"
                }
              >
                <IconHome size={18} />
                <Text weight={500} size="md" className="ml-2 mt-1">
                  Home
                </Text>
              </nav>
            </Link>
            {/* <Link href="/about-page">
              <nav
                className={
                  largerThanSm
                    ? `cursor-pointer flex items-center h-16 p-2 rounded-md ${
                        dark ? "hover:bg-slate-900" : "hover:bg-slate-100"
                      }`
                    : "hidden"
                }
              >
                <IconUsers size={18} />
                <Text weight={500} size="md" className="ml-2 mt-1">
                  About
                </Text>
              </nav>
            </Link> */}
            <Link href="/skillcheck-page" onClick={() => checkDarkMode()}>
              <nav
                onClick={() => checkDarkMode()}
                className={
                  largerThanSm
                    ? `cursor-pointer h-16 flex items-center p-2 rounded-md ${
                        dark ? "hover:bg-slate-900" : "hover:bg-slate-100"
                      }`
                    : "hidden"
                }
              >
                <IconMusic size={18} />
                <Text weight={500} size="md" className="ml-2 mt-1">
                  Skiil check
                </Text>
              </nav>
            </Link>
          </Group>

          <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "dark"}
            onClick={() => handleOnClickToggleDarkMode()}
            className={largerThanSm ? undefined : "hidden"}
          >
            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon>
          <ActionIcon
            variant="light"
            className={largerThanSm ? "hidden" : undefined}
            onClick={onClickToggleIconMenu}
          >
            <IconMenu2 />
          </ActionIcon>
        </span>
      </header>
    </div>
  );
};
