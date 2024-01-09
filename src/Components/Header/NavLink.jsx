import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavLink = ({ text, link }) => {
  return (
    <Link
      to={link}
      fontSize={"18px"}
      fontWeight={"400"}
      cursor={"pointer"}
      _hover={{ color: "#024072" }}
    >
      {text}
    </Link>
  );
};

export default NavLink;
