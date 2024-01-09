import { Box, Link, Text, VStack } from "@chakra-ui/react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <VStack width={"full"}>
      <Box fontSize={"30px"} color="#024072">
        {icon}
      </Box>

      <Text fontSize={"xl"} textAlign={"center"} fontWeight={"600"}>
        {title}
      </Text>
      <Text fontWeight={"400"} textAlign={"center"} fontSize={""}>
        {description}
      </Text>
      <Link color={"#024072"}>Learn More</Link>
    </VStack>
  );
};

export default FeatureCard;
