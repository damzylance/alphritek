import { VStack } from "@chakra-ui/react";
import Header from "../Header";
import Footer from "../Footer";

const HomeLayout = (props) => {
  return (
    <VStack width={"full"} spacing={0}>
      <Header />
      <VStack width={"full"}>{props.children}</VStack>
      <Footer />
    </VStack>
  );
};

export default HomeLayout;
