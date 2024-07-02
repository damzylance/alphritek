import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { MdFacebook, MdWhatsapp } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsTwitterX} from "react-icons/bs"
const Footer = () => {
  return (
    <VStack
      width={"full"}
      bg={"#024072"}
      py={"40px"}
      alignItems={["center", "center", "center", "flex-start"]}
    >
      <HStack
        width={"90%"}
        margin={"auto"}
        justifyContent={["center", "center", "center", "space-between"]}
        flexDir={["column", "column", "column", "row", "row"]}
      >
        <VStack
          alignItems={["center", "center", "center", "flex-start"]}
          color={"#fff"}
          fontWeight={"500"}
        >
          <Text
            fontSize={["2xl", "2xl", "3xl", "3xl"]}
            fontWeight={"800"}
            color={"#fff"}
            textAlign={["center", "center", "center", "center", "left"]}
          >
            ADDRESS
          </Text>
          <Text textAlign={["center", "center", "center", "center", "left"]}>
            6, MPI Avenue, Ada-george, Port harcourt
          </Text>
          <Text fontSize={"sm"} textAlign={["center", "center", "center", "center", "left"]}>
            Phone: +2349154147071, +2349154147070, +2348050591302
          </Text>
          <Text textAlign={["center", "center", "center", "center", "left"]}>
            info@alphritek.com
          </Text>
        </VStack>
        <VStack alignItems={["center", "center", "center", "center"]} gap={"10px"}>
          <Button
            bg={"#fff"}
            fontSize={"sm"}
            color={"#024072"}
            borderRadius={"full"}
            size={"lg"}
            px={"40px"}
          >
            CONTACT US
          </Button>
          <HStack color={"#fff"}>
            <Link to={"https://facebook.com/alphritekfleets"}>
            <MdFacebook size={"30px"}/>
            </Link>
            <Link to={"https://wa.me/9088181087"}>
            <MdWhatsapp size={"30px"}/>
            </Link>
            <Link to={"https://x.com/TrackingFleet"}>
            <BsTwitterX size={"20px"}/>
            </Link>
            
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Footer;
