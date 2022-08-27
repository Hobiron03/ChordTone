import { Text } from "@mantine/core";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="h-16 mt-20 pt-10 pb-10 flex justify-center items-center border-solid border-b-0 border-l-0 border-r-0 border-t-1 border-gray-100">
      <Text weight={700} size={10} className="text-gray-500" color="#868E96">
        <small>© ️2022 Shimabu IT University</small>
      </Text>
    </div>
  );
};

export default Footer;
