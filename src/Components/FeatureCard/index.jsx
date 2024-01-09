import { Box, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
      <Link to={"/products/fleet-management"} color={"#024072"}>
        Learn More
      </Link>
    </VStack>
  );
};

export default FeatureCard;
