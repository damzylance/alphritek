import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import fleetrow1 from "../../assets/fleetrow1.jpg";
import fleetrow2 from "../../assets/fleetrow2.jpg";
import fleetrow3 from "../../assets/fleetrow3.png";
import fleetrow4 from "../../assets/fleetrow4.jpeg";
import fleetrow5 from "../../assets/fleetrow5.jpeg";
import fleetrow6 from "../../assets/fleetrow6.png";
import IndustryCard from "../IndustryCard";
import HomeLayout from "../Layout/HomeLayout";
const About = () => {
  return (
    <HomeLayout>
      <VStack width={"full"}>
        <Box width={"full"} bg={"#024072"} py={"100px"}>
          <HStack
            width={"90%"}
            margin={"0 auto"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexDir={["column", "column", "column", "row", "row"]}
            gap={["40px"]}
          >
            <VStack width={"full"} alignItems={["flex-start"]}>
              <Text
                textTransform={"uppercase"}
                fontWeight={"bold"}
                color={"#fff"}
                fontSize={["2xl", "2xl", "4xl", "4xl"]}
              >
                About Alphritek
              </Text>
              <Text
                color={"#fff"}
                fontSize={["sm", "sm", "md", "md", "md"]}
                maxW={"500px"}
              >
                Using the Software-as-a-Service (SaaS) delivery model, MiX
                Telematics leads telematics services providers globally,
                delivering fleet management solutions to customers in more than
                120 countries. More than 959,000 mobile assets are actively
                managed by MiX Telematics, this number is constantly growing. In
                addition to employing more than 1000 people, MiX Telematics has
                a global network of more than 130 fleet partners. Our vehicle
                telematics company has offices in South Africa, the United
                Kingdom, the United States, Uganda, Brazil, Australia, the
                United Arab Emirates, and Mexico.
              </Text>
            </VStack>
            <HStack
              width={"full"}
              alignItems={["flex-start"]}
              justifyContent={"center"}
              overflow={"hidden"}
              gap={"40px"}
            >
              <VStack gap={"20px"}>
                <Image
                  width={"300px"}
                  borderLeft={"2px solid #fff"}
                  src={fleetrow4}
                  borderRadius={"12px"}
                />
                <Image
                  width={"300px"}
                  borderLeft={"2px solid #fff"}
                  src={fleetrow5}
                  borderRadius={"12px"}
                />
                <Image
                  width={"300px"}
                  borderLeft={"2px solid #fff"}
                  src={fleetrow6}
                  background={"#fff"}
                  borderRadius={"12px"}
                  py={"5px"}
                />
              </VStack>
              <VStack gap={"20px"} mt={"40px"}>
                <Image
                  width={"300px"}
                  borderLeft={"2px solid #fff"}
                  src={fleetrow3}
                  borderRadius={"12px"}
                />
                <Image
                  width={"300px"}
                  borderLeft={"2px solid #fff"}
                  src={fleetrow2}
                  borderRadius={"12px"}
                />
                <Image
                  width={"300px"}
                  borderLeft={"2px solid #fff"}
                  src={fleetrow1}
                  borderRadius={"12px"}
                />
              </VStack>
            </HStack>
          </HStack>
        </Box>
        <VStack width={"full"} bg={"#fff"} gap={"50px"} py={"50px"}>
          {" "}
          <Text
            fontSize={["3xl", "3xl", "3xl", "5xl", "5xl"]}
            lineHeight={["30px", "30px", "30px", "50px"]}
            fontWeight={"800"}
            textAlign={["center"]}
            alignItems={"center"}
            textTransform={"uppercase"}
            color={"#000"}
          >
            RELIABLE SOLUTIONS FOR YOUR INDUSTRY
          </Text>
          <HStack
            width={"full"}
            justifyContent={"center"}
            flexDir={["column", "column", "column", "row", "row"]}
            gap={"20px"}
          >
            <IndustryCard title={"Transport and Logistics"} />
            <IndustryCard title={"Construction"} />
            <IndustryCard title={"Oil and Gas"} />
          </HStack>
        </VStack>
      </VStack>
    </HomeLayout>
  );
};

export default About;
