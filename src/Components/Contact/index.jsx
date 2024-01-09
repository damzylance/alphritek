import { CheckCircleIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import HomeLayout from "../Layout/HomeLayout";
import logo from "../../assets/alphritek-logo.png";
const Contact = () => {
  return (
    <HomeLayout>
      <Box width={"full"} bg={"#fff"} py={"50px"}>
        <HStack
          width={["full", "full", "full", "90%", "90%"]}
          margin={"0 auto"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDir={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
            "row",
          ]}
          gap={"40px"}
        >
          <VStack width={"90%"} alignItems={"center"}>
            <VStack
              borderRadius={"md"}
              backgroundColor={"#d4e8f9"}
              width={"full"}
              px={["20px", "20px", "20px", "40px", "50px"]}
              py={["50px", "50px", "50px", "100px", "150px"]}
              gap={"40px"}
            >
              <VStack alignItems={"flex-start"} width={"full"} gap={"30px"}>
                <HStack>
                  <CheckCircleIcon color={"forestgreen"} fontSize={"2xl"} />
                  <Text fontWeight={"600"} fontSize={"xl"}>
                    Save 48% on maintenance costs
                  </Text>
                </HStack>
                <HStack>
                  <CheckCircleIcon color={"forestgreen"} fontSize={"2xl"} />
                  <Text fontWeight={"600"} fontSize={"xl"}>
                    Save 48% on maintenance costs
                  </Text>
                </HStack>
                <HStack>
                  <CheckCircleIcon color={"forestgreen"} fontSize={"2xl"} />
                  <Text fontWeight={"600"} fontSize={"xl"}>
                    Save 48% on maintenance costs
                  </Text>
                </HStack>
              </VStack>
              <Box
                width={"full"}
                height={"1px"}
                borderBottom={"1px solid gray"}
              ></Box>
              <VStack width={"full"} alignItems={"flex-start"} gap={"30px"}>
                <Text fontWeight={"600"} fontSize={"xl"}>
                  Questions?
                </Text>
                <HStack>
                  <PhoneIcon />
                  <Text fontWeight={"600"} fontSize={"md"}>
                    Call us at
                    <a href="tel:+234-705-933-3022">+234-705-933-3022</a>
                  </Text>
                </HStack>
                <HStack>
                  <EmailIcon />
                  <Text fontWeight={"600"} fontSize={"md"}>
                    Mail us at
                    <a href="mailto:info@alphritekworld.com">
                      info@alphritekworld.com
                    </a>
                  </Text>
                </HStack>
              </VStack>
            </VStack>
          </VStack>
          <VStack width={"full"} gap={"20px"}>
            <Image src={logo} width={"100px"} />
            <Text fontWeight={"700"} fontSize={"3xl"}>
              Request A Quote
            </Text>
            <Text textAlign={"center"}>
              Simple. Powerful. Affordable.
              <br /> Let's find 15 minutes that work for you.
            </Text>
            <Container width={["full", "full", "full", "80%", "80%"]}>
              <VStack width={"full"} gap={"20px"}>
                <HStack width={"full"} gap={"20px"}>
                  <Input width={"full"} placeholder="First Name" />
                  <Input width={"full"} placeholder="Last Name" />
                </HStack>
                <Input width={"full"} placeholder="Company Name" />
                <HStack width={"full"} gap={"20px"}>
                  <Input width={"full"} placeholder="Country" />
                  <Input width={"full"} placeholder="Phone Number" />
                </HStack>
                <Input type="email" width={"full"} placeholder="Work Email" />
                <Select width={"full"} placeholder="Fleet Size">
                  <option>1-50</option>
                  <option>51-100</option>
                  <option>101-250</option>
                  <option>251-999</option>
                  <option>1000+</option>
                </Select>
                <Select width={"full"} placeholder="Industry">
                  <option>Construction & Material</option>
                  <option>Services</option>
                  <option>Transportation & Logistics</option>
                  <option>Education</option>
                  <option>Energy & Utilities</option>
                  <option>Food & Beverages</option>
                  <option>Government</option>
                  <option>Healthcare</option>
                  <option>Nonprofit</option>
                  <option>Retail</option>
                  <option>Trucking</option>
                  <option>Others</option>
                </Select>
                <Textarea width={"full"} placeholder="Your Message" />
                <Button width={"full"} size={"lg"}>
                  Submit
                </Button>
              </VStack>
            </Container>
          </VStack>
        </HStack>
      </Box>
    </HomeLayout>
  );
};

export default Contact;
