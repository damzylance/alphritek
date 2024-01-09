import { Container, Image, Text, VStack } from "@chakra-ui/react";
import assettracking from "../../assets/assettracking.png";

const IndustryCard = (props) => {
  return (
    <VStack
      maxW={["300px", "300px", "full", "350px", "400px"]}
      bg={"#fff"}
      py={["20px", "20px", "20px", "30px", "50px"]}
      gap={["10px", "10px", "10px", "20px"]}
      borderRadius={"20px"}
      alignSelf={["auto", "auto", "auto", "stretch", "stretch"]}
    >
      <Image
        maxW={["280px", "280px", "280px", "300px", "350px"]}
        src={assettracking}
      />
      <Text
        textTransform={"uppercase"}
        fontWeight={"800"}
        color={"#024072"}
        fontSize={["2xl", "2xl", "3xl", "3xl"]}
        textAlign={["center"]}
      >
        {props.title}
      </Text>
      <Container>
        <Text textAlign={"center"} fontSize={["14px"]} fontWeight={"500"}>
          Get complete visibility of your drivers, vehicles and equipment and
          know where your vehicles are at all times. Our Transport and Logistics
          solution makes it possible with our fleet management software.
        </Text>
      </Container>
    </VStack>
  );
};

export default IndustryCard;
