import { Box, Flex } from "@chakra-ui/react";
import { BiSolidDashboard } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const NavBar = () => {
  return (
    <>
      <Box as="nav" padding={"20px"}>
        <Flex gap={"32px"}>
          <BiSolidDashboard size={"28px"} />
          <IoIosNotifications size={"28px"} />
          <IoLocationSharp size={"28px"} />
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
