import { Text } from "@mantine/core";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="h-16 pt-10 pb-10 flex justify-center items-center  ">
      <Text weight={700} size={10} className="text-gray-500" color="#868E96">
        <small>© ️2022 Waon</small>
      </Text>
    </div>
  );
};

export default Footer;
