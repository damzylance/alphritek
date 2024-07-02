import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavLink = ({ text, link }) => {
  return (
    <Link
      to={link}
      cursor={"pointer"}
     
    >
      <Text  _hover={{ color: "red" }} fontSize={"14px"}>
      {text}
      </Text>
      
    </Link>
  );
};

export default NavLink;
