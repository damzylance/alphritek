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
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon, HamburgerIcon } from "@chakra-ui/icons";

import logo from "../../assets/alphritek-logo.png";
import NavLink from "./NavLink";
import { useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate()
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

          <HStack gap={"24px"}>
            <Text
              fontSize={"14px"}
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
            <NavLink link={"/request-demo"} text={"Request a Demo"} />
            <Link to={"https://tracking.alphritekworld.com/auth/signin"}>
            <Button
            bg={"#ed462f"}
            _hover = {{background:"#024072"}}
            fontSize={"sm"}
            color={"#fff"}
            borderRadius={"full"}
            size={"md"}
            px={"30px"}
          >
            Login
          </Button>

            </Link>
            
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
          <Image src={logo} width={"80px"} />

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
                <Image width={"150px"} src={logo} alt="Aplhritek-logo"/>
              </DrawerHeader>
              <DrawerBody>
                <VStack alignItems={"center"} gap={"40px"}>
                <NavLink link={"/solutions"} text={"Solutions"} />
            <NavLink link={"/about-us"} text={"About Us"} />
            <NavLink link={"/request-quote"} text={"Request a Quote"} />
            <NavLink link={"/request-demo"} text={"Request a Demo"} />
            <Link to={"https://tracking.alphritekworld.com/auth/signin"}>
            <Button
            bg={"#ed462f"}
            _hover = {{background:"#024072"}}
            fontSize={"sm"}
            color={"#fff"}
            borderRadius={"full"}
            size={"md"}
            px={"30px"}
          >
            Login
          </Button>

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
