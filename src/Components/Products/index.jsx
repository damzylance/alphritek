import {
  Avatar,
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  MdBusinessCenter,
  MdDashboard,
  MdLocalGasStation,
  MdMap,
  MdPerson,
  MdPieChart,
} from "react-icons/md";
import FeatureCard from "../FeatureCard";
import fleetrow1 from "../../assets/fleetrow1.jpg";
import fleetrow2 from "../../assets/fleetrow2.jpg";
import fleetrow3 from "../../assets/fleetrow3.png";
import fleetrow4 from "../../assets/fleetrow4.jpeg";
import fleetrow5 from "../../assets/fleetrow5.jpeg";
import fleetrow6 from "../../assets/fleetrow6.png";
import HomeLayout from "../Layout/HomeLayout";
import PricingCard from "../PricingCard";

const Products = () => {
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
            <VStack alignItems={"flex-start"} width={"full"} gap={"40px"}>
              <Text fontSize={"xl"} color={"#024072"} fontWeight={"900"}>
                Solutions
              </Text>
              <Text
                fontWeight={"900"}
                fontSize={["3xl", "3xl", "3xl", "5xl", "5xl"]}
              >
                One solution for all your fleet <br />
                management and
                <br /> maintenance needs
              </Text>
            </VStack>
            <HStack
              alignItems={"flex-start"}
              justifyContent={"center"}
              flexDir={"row-reverse"}
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
        </VStack>

        <VStack
          width={"full"}
          py={"100px"}
          mx={"auto"}
          bg={"#f5f5f5"}
          gap={"40px"}
        >
          <Text fontSize={"xl"} fontWeight={"900"} color={"#024072"}>
            Fleet Management
          </Text>
          <Text
            fontSize={"3xl"}
            fontWeight={"700"}
            textAlign={"center"}
            maxW={"500px"}
          >
            Track every detail about your vehicles and equipment
          </Text>
          <Grid
            width={"90%"}
            mx={"auto"}
            templateColumns={[
              "1fr,1fr",
              "1fr,1fr",
              "1fr,1fr",
              "1fr,1fr,1fr",
              "1fr 1fr 1fr",
            ]}
            rowGap={"50px"}
            columnGap={"20px"}
          >
            <GridItem>
              <FeatureCard
                title={"Asset Management"}
                icon={<MdBusinessCenter />}
                description={
                  "Properly managing assets allows you to acquire, allocate, operate and remarket smarter."
                }
              />
            </GridItem>
            <GridItem>
              <FeatureCard
                title={"Fuel Management"}
                icon={<MdLocalGasStation />}
                description={
                  "Unlock fuel trend insight, spot deficiencies and optimize vehicle allocation."
                }
              />
            </GridItem>
            <GridItem>
              <FeatureCard
                title={"Vehicle Location History"}
                icon={<MdMap />}
                description={
                  "Track your vehicles based on when and where daily fleet activities take place."
                }
              />
            </GridItem>
            <GridItem>
              <FeatureCard
                title={"Driver Assignment"}
                icon={<MdPerson />}
                description={
                  "See all of your driver assignments in a calendar view and manage them with ease."
                }
              />
            </GridItem>
            <GridItem>
              <FeatureCard
                title={"Fleet Dashboards"}
                icon={<MdDashboard />}
                description={
                  "Get a bird’s-eye view of fleet productivity and manage exceptions in real-time."
                }
              />
            </GridItem>
            <GridItem>
              <FeatureCard
                title={"Expense Tracking & Cost Analysis"}
                icon={<MdPieChart />}
                description={
                  "From aquisition to disposal, understand the true cost of running your fleet."
                }
              />
            </GridItem>
          </Grid>
          <VStack width={"full"} gap={"40px"} pt={"50px"}>
            <Text fontSize={"xl"} fontWeight={"900"} color={"#024072"}>
              Pricing Plan
            </Text>
            <HStack gap={"40px"} maxW={"900px"}>
              <PricingCard />
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

export default Products;
