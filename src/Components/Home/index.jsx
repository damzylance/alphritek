import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import IndustryCard from "../IndustryCard";
import assettracking from "../../assets/assettracking.png";
import monitorassets from "../../assets/monitorassets.png";
import bg from "../../assets/alphritekbg.webp";

import HomeLayout from "../Layout/HomeLayout";

const Home = () => {
  return (
    <HomeLayout>
      <VStack width={"full"} spacing={0}>
        <HStack
          width={"full"}
          height={["600px", "600px", "600px", "600px", "600px"]}
          bgImage={`url(${bg})`}
          bgSize={"cover"}
          bgPosition={["center", "center", "center", "auto", "auto"]}
          alignItems={"center"}
        >
          <HStack
            justifyContent={"space-between"}
            flexDir={["column", "column", "column", "row", "row"]}
            gap={["40px", "40px", "40px", "0", 0]}
            alignItems={"center"}
            width={"90%"}
            margin={"0 auto"}
          >
            <VStack
              width={"full"}
              alignItems={[
                "center",
                "center",
                "center",
                "center",
                "flex-start",
              ]}
            >
              <Text
                textTransform={"uppercase"}
                fontWeight={"bold"}
                color={"#fff"}
                fontSize={["2xl", "2xl", "4xl", "4xl"]}
                textAlign={["center", "center", "center", "center", "left"]}
              >
                Welcome to Alphritek{" "}
              </Text>
              <Text
                fontSize={["3xl", "3xl", "5xl", "5xl"]}
                color={"#fff"}
                textAlign={["center", "center", "center", "center", "left"]}
                fontWeight={"bold"}
              >
                FLEET MANAGEMENT AND ENTERPRISE SOLUTIONS
              </Text>
              <Text
                fontSize={"2xl"}
                textTransform={"uppercase"}
                color={"#fff"}
                fontWeight={"light"}
                textAlign={["center", "center", "center", "center", "left"]}
              >
                Fleet opterations made easier{" "}
              </Text>
            </VStack>
            <VStack
              width={"full"}
              display={["none", "none", "none", "flex", "flex"]}
            >
              <VStack
                py={"40px"}
                bg={"#024072"}
                borderRadius={["50px", "50px", "50px", "full", "full"]}
                width={["300px", "300px", "500px", "500px"]}
                gap={"4"}
              >
                <Text
                  textTransform={"uppercase"}
                  fontWeight={"bold"}
                  color={"#f8c702"}
                  fontSize={["2xl", "2xl", "3xl", "3xl"]}
                  textAlign={["center"]}
                >
                  {`What's New`}
                </Text>
                <Text
                  fontWeight={"bold"}
                  color={"#fff"}
                  fontSize={["xl", "2xl", "2xl", "2xl"]}
                  textAlign={["center"]}
                >
                  LIVE FLEET STATUS UPDATES
                </Text>
                <Text color={"#fff"} textAlign={["center"]}>
                  Get live updates on vehicle status.
                </Text>
                <Button
                  bg={"red"}
                  fontSize={"sm"}
                  color={"#fff"}
                  borderRadius={"full"}
                  px={"20px"}
                >
                  Learn More
                </Button>
              </VStack>
            </VStack>
          </HStack>
        </HStack>
        <VStack width={"full"} bg={"#fff"} py={10} gap={"8"}>
          <Text
            fontSize={["3xl", "3xl", "3xl", "5xl", "5xl"]}
            fontWeight={"800"}
            textAlign={["center"]}
            color={"#024072"}
            textTransform={"uppercase"}
          >
            Fleet Management Solution
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
          <Container>
            <Text
              mb={"10px"}
              fontSize={["14px", "14px", "14px", "16px"]}
              textAlign={["center"]}
            >
              Alphritek develops and implements connected fleet and mobile asset
              management solutions for customers across the globe. We focus our
              energy on creating hardware and software that is specific to our
              customers’ requirements and aim to build long-term partnerships.
            </Text>
            <Text
              textAlign={["center"]}
              fontSize={["14px", "14px", "14px", "16px"]}
            >
              No matter how big or small your fleet is, which vehicles or assets
              you own or in which industry or location you operate in, we have
              the expertise to solve your unique problems and upgrade your fleet
              operations using state-of-the-art data collection methods and
              intelligent reporting.
            </Text>
          </Container>
        </VStack>
        <VStack width={"full"} bg={"#024072"} pt={"50px"} gap={"20px"}>
          <Text
            textTransform={"uppercase"}
            fontSize={"2xl"}
            fontWeight={"900"}
            textAlign={"center"}
            color={"#f8c702"}
          >
            Fleet & Asset Management
          </Text>
          <Container>
            {" "}
            <Text
              fontSize={["3xl", "3xl", "3xl", "5xl", "5xl"]}
              lineHeight={["30px", "30px", "30px", "50px"]}
              fontWeight={"800"}
              textAlign={["center"]}
              textTransform={"uppercase"}
              color={"#fff"}
            >
              How can Alphritek Help You?
            </Text>
          </Container>{" "}
          <Button
            bg={"red"}
            fontSize={"sm"}
            color={"#fff"}
            borderRadius={"full"}
            textTransform={"uppercase"}
            px={"20px"}
          >
            Talk to us
          </Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="1920.002"
            height="35px"
            viewBox="0 0 1920.002 30"
            style={{ width: "100%", padding: 0 }}
          >
            <g
              id="ppc-hero-footer-cutout"
              transform="translate(0.002 -2289.68)"
            >
              <path
                id="Subtraction_6"
                data-name="Subtraction 6"
                d="M23352,23217H21432l0-52h866.406l93.6,39,93.592-39H23352v52Z"
                transform="translate(-21432 -20875.322)"
                fill="#e5e9ec"
              ></path>
            </g>
          </svg>
        </VStack>

        <VStack bg={"#e5e9ec"} width={"full"} py={"50px"} gap={"20px"}>
          {" "}
          <Text
            fontSize={["3xl", "3xl", "3xl", "5xl", "5xl"]}
            fontWeight={"800"}
            textAlign={["center"]}
            textTransform={"uppercase"}
            color={"#024072"}
          >
            FLEET MANAGEMENT
          </Text>
          <Text textAlign={["center"]}>
            Use our SaaS Fleet management solutions to track and monitor your
            fleet and assets
          </Text>
          <HStack
            mt={"40px"}
            flexDir={["column", "column", "column", "row", "row"]}
            gap={["40px", "40px", "40px", "60px", "60px"]}
            width={"90%"}
            margin={"auto"}
          >
            <HStack width={"full"}>
              <Image
                width={["full", "full", "full", "full"]}
                src={assettracking}
              />
            </HStack>

            <VStack
              width={"full"}
              alignItems={[
                "center",
                "center",
                "center",
                "flex-start",
                "flex-start",
              ]}
            >
              <Text
                textTransform={"uppercase"}
                fontWeight={"bold"}
                color={"#024072"}
                fontSize={["2xl", "2xl", "3xl", "3xl"]}
                textAlign={["center", "center", "center", "left", "left"]}
              >
                Monitor, Track and Report
              </Text>
              <Text
                color={"#222"}
                fontSize={"14px"}
                fontWeight={"400"}
                textTransform={"uppercase"}
                textAlign={["center", "center", "center", "left", "left"]}
                px={"5px"}
              >
                IMPROVE YOUR WORKFORCE UTILISATION AND DEPLOYMENT TO HELP
                IMPROVE YOUR CUSTOMER’S SATISFACTION LEVELS.
              </Text>
              <Text
                fontSize={"16px"}
                px={["5", "5", 5, 5, "20px"]}
                textAlign={["center", "center", "center", "left", "left"]}
              >
                Operating in today’s business environment is competitive and
                fast-paced. Our offering can help you to be more efficient and
                productive, improve customer loyalty, differentiate yourself
                from competitors and cut costs!
              </Text>
              <Text
                borderLeft={"10px solid #024072"}
                py={"20px"}
                fontStyle={"italic"}
                px={"10px"}
                textAlign={["center", "center", "center", "left", "left"]}
              >
                Complete insight into your fleet operations and the use of
                monitoring technologies.
              </Text>
            </VStack>
          </HStack>
        </VStack>
        <VStack bg={"#fff"} width={"full"} py={"50px"} gap={"20px"}>
          {" "}
          <Text
            fontSize={["3xl", "3xl", "3xl", "5xl", "5xl"]}
            fontWeight={"800"}
            textAlign={["center"]}
            textTransform={"uppercase"}
            color={"#024072"}
          >
            Asset Security
          </Text>
          <Text textAlign={["center"]}>
            Use our SaaS Fleet management solutions to track and monitor your
            fleet and assets
          </Text>
          <HStack
            mt={"40px"}
            flexDir={[
              "column",
              "column",
              "column",
              "row-reverse",
              "row-reverse",
            ]}
            gap={["40px", "40px", "40px", "60px", "60px"]}
            width={"90%"}
            margin={"auto"}
          >
            <HStack width={"full"}>
              <Image
                width={["full", "full", "full", "full"]}
                src={monitorassets}
              />
            </HStack>

            <VStack
              width={"full"}
              alignItems={[
                "center",
                "center",
                "center",
                "flex-start",
                "flex-start",
              ]}
            >
              <Text
                textTransform={"uppercase"}
                fontWeight={"bold"}
                color={"#024072"}
                fontSize={["2xl", "2xl", "3xl", "3xl"]}
                textAlign={["center", "center", "center", "left", "left"]}
              >
                Monitor, Track and Report
              </Text>
              <Text
                color={"#222"}
                fontSize={"14px"}
                fontWeight={"400"}
                textTransform={"uppercase"}
                textAlign={["center", "center", "center", "left", "left"]}
                px={"5px"}
              >
                IMPROVE YOUR WORKFORCE UTILISATION AND DEPLOYMENT TO HELP
                IMPROVE YOUR CUSTOMER’S SATISFACTION LEVELS.
              </Text>
              <Text
                fontSize={"16px"}
                px={["5", "5", 5, 5, "20px"]}
                textAlign={["center", "center", "center", "left", "left"]}
              >
                Operating in today’s business environment is competitive and
                fast-paced. Our offering can help you to be more efficient and
                productive, improve customer loyalty, differentiate yourself
                from competitors and cut costs!
              </Text>
              <Text
                borderLeft={"10px solid #024072"}
                py={"20px"}
                fontStyle={"italic"}
                px={"10px"}
                textAlign={["center", "center", "center", "left", "left"]}
              >
                Complete insight into your fleet operations and the use of
                monitoring technologies.
              </Text>
            </VStack>
          </HStack>
        </VStack>
        <VStack bg={"#e5e9ec"} width={"full"} py={"50px"} gap={"20px"}>
          {" "}
          <Text
            fontSize={["3xl", "3xl", "3xl", "5xl", "5xl"]}
            fontWeight={"800"}
            textAlign={["center"]}
            textTransform={"uppercase"}
            color={"#024072"}
          >
            WORKFORCE MANAGEMENT
          </Text>
          <Text textAlign={["center"]}>
            Use our SaaS Fleet management solutions to monitor drivers KPIs and
            driving behaviors.
          </Text>
          <HStack
            mt={"40px"}
            flexDir={["column", "column", "column", "row", "row"]}
            gap={["40px", "40px", "40px", "60px", "60px"]}
            width={"90%"}
            margin={"auto"}
          >
            <HStack width={"full"}>
              <Image
                width={["full", "full", "full", "full"]}
                src={assettracking}
              />
            </HStack>

            <VStack
              width={"full"}
              alignItems={[
                "center",
                "center",
                "center",
                "flex-start",
                "flex-start",
              ]}
            >
              <Text
                textTransform={"uppercase"}
                fontWeight={"bold"}
                color={"#024072"}
                fontSize={["2xl", "2xl", "3xl", "3xl"]}
                textAlign={["center", "center", "center", "left", "left"]}
              >
                Reward most compliant drivers.
              </Text>
              <Text
                color={"#222"}
                fontSize={"14px"}
                fontWeight={"400"}
                textTransform={"uppercase"}
                textAlign={["center", "center", "center", "left", "left"]}
                px={"5px"}
              >
                Get Driving Behavior data. Raise alarm when in distress. Manage
                fuel usage.
              </Text>
              <Text
                fontSize={"16px"}
                px={["5", "5", 5, 5, "20px"]}
                textAlign={["center", "center", "center", "left", "left"]}
              >
                Operating in today’s business environment is competitive and
                fast-paced. Our offering can help you to be more efficient and
                productive, improve customer loyalty, differentiate yourself
                from competitors and cut costs!
              </Text>
              <Text
                borderLeft={"10px solid #024072"}
                py={"20px"}
                fontStyle={"italic"}
                px={"10px"}
                textAlign={["center", "center", "center", "left", "left"]}
              >
                Complete insight into your fleet operations and the use of
                monitoring technologies.
              </Text>
            </VStack>
          </HStack>
        </VStack>
        <VStack width={"full"} bg={"#024072"} gap={"50px"} py={"50px"}>
          {" "}
          <Text
            fontSize={["3xl", "3xl", "3xl", "5xl", "5xl"]}
            lineHeight={["30px", "30px", "30px", "50px"]}
            fontWeight={"800"}
            textAlign={["center"]}
            alignItems={"center"}
            textTransform={"uppercase"}
            color={"#fff"}
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
        <VStack bg={"#e5e9ec"} width={"full"} py={"50px"} gap={"20px"}>
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

export default Home;
