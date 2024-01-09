import { Button, HStack, Text, VStack } from "@chakra-ui/react";

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
          <Text textAlign={["center", "center", "center", "center", "left"]}>
            Phone: +234-705-933-3022{" "}
          </Text>
          <Text textAlign={["center", "center", "center", "center", "left"]}>
            info@alphritekventures.com
          </Text>
        </VStack>
        <VStack alignItems={["center", "center", "center", "flex-start"]}>
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
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Footer;
