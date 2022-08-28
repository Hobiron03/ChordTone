import {
  ActionIcon,
  Group,
  Text,
  Drawer,
  useMantineColorScheme,
  Footer,
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
import { useState } from "react";
import { useCallback } from "react";

import { useMediaQuery } from "src/lib/mantine";

const Header = () => {
  const largerThanSm = useMediaQuery("sm");
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [opendDrawer, setOpenedDrawer] = useState<boolean>(false);

  const onClickToggleIconMenu = useCallback(() => {
    setOpenedDrawer(!opendDrawer);
  }, [opendDrawer]);

  return (
    <div className="w-full font-noto">
      <Drawer
        opened={opendDrawer}
        onClose={() => setOpenedDrawer(false)}
        padding="md"
        position="right"
        overlayOpacity={0.15}
        overlayBlur={2}
        transition="rotate-left"
        transitionDuration={250}
        transitionTimingFunction="ease"
        styles={{
          drawer: { backgroundColor: dark ? "#3A3B42" : "#E7E5E5" },
        }}
      >
        <Link href="/">
          <Text weight={600} size={25}>
            <IconHome size={20} />
            Home
          </Text>
        </Link>
        <Link href="/about-page">
          <Text weight={600} size={25}>
            <IconUsers size={20} />
            About
          </Text>
        </Link>
        <Link href="/skillcheck-page">
          <Text weight={600} size={25}>
            <IconMusic size={20} />
            Skil Check
          </Text>
        </Link>
        <Text weight={600} size={25} onClick={() => toggleColorScheme()}>
          Dark Mode
        </Text>
      </Drawer>

      <header
        className={`flex justify-center w-full h-16 shadow  ${
          dark ? "bg-m_dark-10" : "bg-m_white-10"
        }`}
      >
        <span className="h-full w-9/12 flex items-center justify-between">
          <Group spacing="xl">
            <Link href="/">
              <Text weight={600} size={25}>
                <span
                  className={`cursor-pointer ${
                    largerThanSm ? "mr-10" : undefined
                  }`}
                >
                  Waon
                </span>
              </Text>
            </Link>
            <Link href="/about-page">
              <div
                className={
                  largerThanSm
                    ? `cursor-pointer flex items-center h-16 p-2 rounded-md ${
                        dark ? "hover:bg-slate-900" : "hover:bg-slate-100"
                      }`
                    : "hidden"
                }
              >
                <IconHome size={20} />
                <Text weight={500} size="lg" className="ml-2">
                  Home
                </Text>
              </div>
            </Link>
            <Link href="/about-page">
              <div
                className={
                  largerThanSm
                    ? `cursor-pointer flex items-center h-16 p-2 rounded-md ${
                        dark ? "hover:bg-slate-900" : "hover:bg-slate-100"
                      }`
                    : "hidden"
                }
              >
                <IconUsers size={20} />
                <Text weight={500} size="lg" className="ml-2">
                  About
                </Text>
              </div>
            </Link>
            <Link href="/skillcheck-page">
              <div
                className={
                  largerThanSm
                    ? `cursor-pointer h-16 flex items-center p-2 rounded-md ${
                        dark ? "hover:bg-slate-900" : "hover:bg-slate-100"
                      }`
                    : "hidden"
                }
              >
                <IconMusic size={20} />
                <Text weight={500} size="lg" className="ml-2">
                  Skiil check
                </Text>
              </div>
            </Link>
          </Group>

          <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "dark"}
            onClick={() => toggleColorScheme()}
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

export default Header;
