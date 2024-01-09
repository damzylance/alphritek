import { Avatar, Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import reportingSuite from "../../assets/reporting-suite.png";
import liveStream from "../../assets/live-stream.jpeg";
import tracking from "../../assets/GPS-Tacking-Dashboard.webp";
import femaleDriver from "../../assets/female-driver-with-vest.jpeg";
import HomeLayout from "../Layout/HomeLayout";

const FleetManagement = () => {
  return (
    <HomeLayout>
      <VStack width={"full"}>
        <VStack width={"full"} gap={"100px"} bg={"#fff"} py={"100px"}>
          <HStack
            width={"90%"}
            margin={"0 auto"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexDir={["column", "column", "column", "row", "row"]}
            gap={["40px"]}
          >
            <VStack
              alignItems={"flex-start"}
              textTransform={"capitalize"}
              width={"full"}
              gap={"20px"}
            >
              <Text
                fontWeight={"900"}
                textTransform={"uppercase"}
                fontSize={["3xl", "3xl", "3xl", "4xl", "4xl"]}
              >
                Alphritek Fleet Managment
              </Text>
              <Text
                fontSize={"lg"}
                textTransform={"capitalize"}
                color={"#024072"}
                fontWeight={"500"}
              >
                FLEET MANAGEMENT SOLUTIONS FOR EFFORTLESS, TANGIBLE RESULTS
              </Text>
            </VStack>
            <HStack
              width={"full"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              flexDir={"row-reverse"}
              overflow={"hidden"}
              gap={"40px"}
            >
              <Image
                borderLeft={"2px solid #fff"}
                src={femaleDriver}
                borderRadius={"12px"}
              />
            </HStack>
          </HStack>
        </VStack>
        <VStack
          width={"full"}
          py={"100px"}
          mx={"auto"}
          bg={"#f5f5f5"}
          gap={"40px"}
        >
          <Text fontSize={"3xl"} fontWeight={"800"} color={"#024072"}>
            CONNECTED & PROTECTED FLEET
          </Text>
          <Text fontSize={"md"} textAlign={"center"} maxW={"900px"}>
            Fleet management solutions offer fleet operators unlimited access to
            data on their vehicles and drivers, with a host of features, tools
            and reports to maximise return on investment.
          </Text>
        </VStack>
        <VStack width={"full"} gap={"40px"} pt={"50px"}>
          <VStack width={"full"} gap={"50px"}>
            <HStack
              width={"90%"}
              margin={"0 auto"}
              justifyContent={"space-between"}
              alignItems={"center"}
              flexDir={["column", "column", "column", "row", "row"]}
              gap={["40px"]}
              p={"20px"}
            >
              <VStack
                alignItems={"flex-start"}
                textTransform={"capitalize"}
                width={"full"}
                gap={"20px"}
              >
                <Text
                  fontWeight={"900"}
                  textTransform={"uppercase"}
                  fontSize={["xl", "xl", "xl", "2xl", "2xl"]}
                  color={"#024072"}
                >
                  1. VITAL TRACKING FUNCTIONALITY
                </Text>
                <Text fontSize={"sm"} color={"#ef6666"} fontWeight={"500"}>
                  The tracking module provides a real-time view of a vehicle or
                  asset’s position – whether it’s stationary or on the move –
                  and which driver is behind the wheel. It also shows
                  information relating to speed, driving direction, ignition
                  status, driving violations, past trips and more.{" "}
                </Text>
              </VStack>
              <HStack
                width={"full"}
                alignItems={"flex-start"}
                justifyContent={"center"}
                flexDir={"row-reverse"}
                overflow={"hidden"}
                gap={"40px"}
              >
                <Image
                  borderLeft={"2px solid #fff"}
                  src={tracking}
                  borderRadius={"12px"}
                />
              </HStack>
            </HStack>
            <HStack
              width={"90%"}
              margin={"0 auto"}
              justifyContent={"space-between"}
              alignItems={"center"}
              flexDir={[
                "column",
                "column",
                "column",
                "row-reverse",
                "row-reverse",
              ]}
              gap={["40px"]}
              bg={"#f5f5f5"}
              p={"20px"}
            >
              <VStack
                alignItems={"flex-start"}
                textTransform={"capitalize"}
                width={"full"}
                gap={"20px"}
              >
                <Text
                  fontWeight={"900"}
                  textTransform={"uppercase"}
                  fontSize={["xl", "xl", "xl", "2xl", "2xl"]}
                  color={"#024072"}
                >
                  2. Live Information Streams
                </Text>
                <Text fontSize={"sm"} color={"#ef6666"} fontWeight={"500"}>
                  Live streams are user-defined and contain information about
                  events and messages to and from the connected asset and/or
                  driver. <br /> For priority trips, a stream can be undocked
                  and kept open while navigating the rest of the application.
                </Text>
              </VStack>
              <HStack
                width={"full"}
                alignItems={"flex-start"}
                justifyContent={"center"}
                flexDir={"row-reverse"}
                overflow={"hidden"}
                gap={"40px"}
              >
                <Image
                  borderLeft={"2px solid #fff"}
                  src={liveStream}
                  borderRadius={"12px"}
                />
              </HStack>
            </HStack>
            <HStack
              width={"90%"}
              margin={"0 auto"}
              justifyContent={"space-between"}
              alignItems={"center"}
              flexDir={["column", "column", "column", "row", "row"]}
              gap={["40px"]}
              p={"20px"}
            >
              <VStack
                alignItems={"flex-start"}
                textTransform={"capitalize"}
                width={"full"}
                gap={"20px"}
              >
                <Text
                  fontWeight={"900"}
                  textTransform={"uppercase"}
                  fontSize={["xl", "xl", "xl", "2xl", "2xl"]}
                  color={"#024072"}
                >
                  3. Powerful Reporting Suite
                </Text>
                <Text fontSize={"sm"} color={"#ef6666"} fontWeight={"500"}>
                  The solution’s reporting capability enables data to be
                  reviewed and analysed in detail or in dynamic and customisable
                  formats. Reports include information on: Movement Location
                  Trip and utilisation reports, Driver scoring, Fuel usage,
                  Event violations,Cost analysis
                </Text>
              </VStack>
              <HStack
                width={"full"}
                alignItems={"flex-start"}
                justifyContent={"center"}
                flexDir={"row-reverse"}
                overflow={"hidden"}
                gap={"40px"}
              >
                <Image
                  borderLeft={"2px solid #fff"}
                  src={reportingSuite}
                  borderRadius={"12px"}
                />
              </HStack>
            </HStack>
            <HStack
              width={"90%"}
              margin={"0 auto"}
              justifyContent={"space-between"}
              alignItems={"center"}
              flexDir={[
                "column",
                "column",
                "column",
                "row-reverse",
                "row-reverse",
              ]}
              gap={["40px"]}
              bg={"#f5f5f5"}
              p={"20px"}
            >
              <VStack
                alignItems={"flex-start"}
                textTransform={"capitalize"}
                width={"full"}
                gap={"20px"}
              >
                <Text
                  fontWeight={"900"}
                  textTransform={"uppercase"}
                  fontSize={["xl", "xl", "xl", "2xl", "2xl"]}
                  color={"#024072"}
                >
                  4. FLEXIBLE TO YOUR NEEDS
                </Text>
                <Text fontSize={"sm"} color={"#ef6666"} fontWeight={"500"}>
                  Depending on specific operational goals or regional
                  requirements, customers can tailor their solution to fit their
                  business’ needs.
                </Text>
              </VStack>
              <HStack
                width={"full"}
                alignItems={"flex-start"}
                justifyContent={"center"}
                flexDir={"row-reverse"}
                overflow={"hidden"}
                gap={"40px"}
              >
                <Image
                  borderLeft={"2px solid #fff"}
                  src={liveStream}
                  borderRadius={"12px"}
                />
              </HStack>
            </HStack>
          </VStack>
        </VStack>
        <VStack bg={"#fff"} width={"full"} py={"50px"} gap={"20px"}>
          <Text
            fontSize={["3xl", "3xl", "3xl", "5xl", "5xl"]}
            lineHeight={["30px", "30px", "30px", "50px"]}
            fontWeight={"800"}
            textAlign={["center"]}
            textTransform={"uppercase"}
            color={"#024072"}
          >
            Customer Success
          </Text>
          <HStack>
            <Box
              width={"20px"}
              height={"20px"}
              borderRadius={"full"}
              bg={"blue.600"}
            ></Box>
            <Box
              width={"20px"}
              height={"20px"}
              borderRadius={"full"}
              bg={"blue.500"}
            ></Box>
            <Box
              width={"20px"}
              height={"20px"}
              borderRadius={"full"}
              bg={"blue.400"}
            ></Box>
          </HStack>

          <Text
            textAlign={"center"}
            width={"70%"}
            px={"10px"}
            margin={"0 auto"}
            fontWeight={"500"}
            fontSize={["14px", "14px", "14px", "16px"]}
          >
            If I had met Alphritek earlier, would have saved me lot of stress
            and money. I hope your service will not change later though, if at
            all it should be for better
          </Text>
          <HStack>
            <Avatar />
            <VStack alignItems={"flex-start"} spacing={0}>
              <Text color={"#024072"}>Folorunsho I</Text>
              <Text fontSize={"12px"}>HSE/Journey Manager</Text>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </HomeLayout>
  );
};

export default FleetManagement;
