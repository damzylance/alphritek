import {
  Box,
  HStack,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
  useDisclosure,
  VStack,
  Container,
  IconButton,
} from "@chakra-ui/react";
import { ChevronRightIcon, HamburgerIcon } from "@chakra-ui/icons";

import logo from "../../assets/alphritek-logo.png";
import NavLink from "./NavLink";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();
  const url = window.location.href;
  const param = url.split("/")[3];
  const [showSubMenu, setShowSubmenu] = useState(false);
  return (
    <>
      {" "}
      <Box
        width={"full"}
        display={["none", "none", "block", "block", "block"]}
        py={"8px"}
        position={"sticky"}
        top={0}
        left={0}
        bg={"#fff"}
        boxShadow={"rgba(169, 170, 176, 0.47) 2px 3px 5px -1px"}
        zIndex={9}
      >
        <HStack
          width={"90%"}
          margin={"0 auto"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link to={"/"}>
            <Image width={"150px"} src={logo} />
          </Link>

          <HStack gap={"40px"}>
            <Text
              fontSize={"18px"}
              fontWeight={"400"}
              cursor={"pointer"}
              _hover={{ color: "#024072" }}
              onClick={() => setShowSubmenu(!showSubMenu)}
            >
              Products
            </Text>
            <NavLink link={"/solutions"} text={"Solutions"} />
            <NavLink link={"/about-us"} text={"About Us"} />
            <NavLink link={"/request-quote"} text={"Request a Quote"} />
          </HStack>
        </HStack>
        {showSubMenu && (
          <HStack
            position={"fixed"}
            top={"91px"}
            width={"full"}
            height={"100px"}
            bg={"#fff"}
            boxShadow={"rgba(169, 170, 176, 0.47) 2px 3px 5px -1px"}
          >
            <HStack width={"80%"} margin={"auto"}>
              <NavLink
                link={"/products/fleet-management"}
                text={"Fleet Management"}
              />
              <ChevronRightIcon />
            </HStack>
          </HStack>
        )}
      </Box>
      <Container maxWidth={"full"} display={["block", "block", "none"]}>
        <HStack
          width={"full"}
          justifyContent={"space-between"}
          alignItems={"center"}
          pt={"5px"}
          pb={"12px"}
          borderBottom={"1px solid #E6E5E5"}
        >
          <Image src={logo} width={"66px"} />

          <IconButton
            ref={btnRef}
            onClick={onOpen}
            display="flex"
            alignSelf={"flex-end"}
            bg="transparent"
          >
            <HamburgerIcon />
          </IconButton>
          <Drawer
            isOpen={isOpen}
            placement={"right"}
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent alignItems="center">
              <DrawerCloseButton alignSelf="end" mx={15} my={15} />
              <DrawerHeader my={15}>
                <Text as="p"> {"ALPHRITEK"} </Text>
              </DrawerHeader>
              <DrawerBody>
                <VStack alignItems={"center"} gap={"40px"}>
                  <Link
                    to={"/"}
                    style={{
                      color: "#141414",
                      fontWeight: !param ? "600" : "",
                      fontSize: "24px",
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    to={"/about-us"}
                    style={{
                      color: "#141414",
                      fontWeight: param === "pricing" ? "600" : "",
                      fontSize: "24px",
                    }}
                  >
                    About Us
                  </Link>
                  <Link
                    to={"/solutions"}
                    style={{
                      color: "#141414",
                      fontWeight: param === "pricing" ? "600" : "",
                      fontSize: "24px",
                    }}
                  >
                    Products and Solution
                  </Link>
                  <Link
                    to={"/request-quote"}
                    style={{
                      color: "#141414",
                      fontWeight: param === "faq" ? "600" : "",
                      fontSize: "24px",
                    }}
                  >
                    Request A Quote
                  </Link>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </HStack>
      </Container>
    </>
  );
};

export default Header;
