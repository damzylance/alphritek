import { Box, HStack, Image, List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react";
import fleetrow1 from "../../assets/fleetrow1.jpg";
import fleetrow2 from "../../assets/fleetrow2.jpg";
import fleetrow3 from "../../assets/fleetrow3.png";
import fleetrow4 from "../../assets/fleetrow4.jpeg";
import fleetrow5 from "../../assets/fleetrow5.jpeg";
import fleetrow6 from "../../assets/fleetrow6.png";
import IndustryCard from "../IndustryCard";
import HomeLayout from "../Layout/HomeLayout";
import { ArrowForwardIcon } from "@chakra-ui/icons";
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
                Since 2017, Alphritek has been a leading tracking solutions provider in Nigeria, proudly serving esteemed clients like SPDC and various major industries across the country. Our expertise has enabled us to successfully manage nearly 1000 vehicles, encompassing diverse types and industries.
              </Text>
              <Box  borderRadius="md"  color="white">
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        As a comprehensive fleet telematics services company, we offer:
      </Text>
      <List spacing={2} mb={4}>
        <ListItem>
          <ListIcon as={ArrowForwardIcon} color="white" />
          Expert installation
        </ListItem>
        <ListItem>
          <ListIcon as={ArrowForwardIcon} color="white" />
          Comprehensive training
        </ListItem>
        <ListItem>
          <ListIcon as={ArrowForwardIcon} color="white" />
          Dedicated customer support
        </ListItem>
      </List>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Our mission is to empower businesses to optimize their fleet management, leading to:
      </Text>
      <List spacing={2} mb={4}>
        <ListItem>
          <ListIcon as={ArrowForwardIcon} color="white" />
          Enhanced productivity
        </ListItem>
        <ListItem>
          <ListIcon as={ArrowForwardIcon} color="white" />
          Improved manpower efficiency
        </ListItem>
        <ListItem>
          <ListIcon as={ArrowForwardIcon} color="white" />
          Increased overall success
        </ListItem>
      </List>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        At Alphritek, we are committed to driving your fleet's performance and profitability.
      </Text>
    </Box>
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
            <IndustryCard title={"Transport and Logistics"} description={"Alphritek fleet management offers the ability to monitor and analyse every detail of a Logistical process helping to make proactive decisions that increase customer service levels, reduce operating costs, maximise driver and cargo safety and prolong the lifespan of any fleet, whether it be cars, trucks, ships or planes."}  />
            <IndustryCard title={"Construction"} description={"Alphritek fleet management empowers construction managers to oversee vehicle location, movement, increase safety through geo fencing around hazardous zones and also help to make informed decisions while identifying areas of improvement"} />
            <IndustryCard title={"Oil and Gas"} description={"Through real-time data collection and analysis, Alphritek empowers oil and gas companies to closely monitor their fleets, assets, and workforce, ultimately leading to significant benefits. Discover how this technology is reshaping the industry by enabling more informed decision-making and driving sustainable growth."} />
          </HStack>
        </VStack>
      </VStack>
    </HomeLayout>
  );
};

export default About;
