import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Button, HStack, Link, Text, VStack } from "@chakra-ui/react";

const PricingCard = () => {
  const planBasic = {
    "Driver Identification System": "Y",
    "Vehicle Access Control System": "Y",
    "Real-time/ Live tracking": "Y",
    "Security Emergency Alarms": "N",
    "Driving Behaviour Reports and Analysis.": "N",
    "Seat-belt usage monitoring": "N",
    "Incident/Accident Information": "N",
    "Alerts Instant Notification": "N",
    "Voice Communication during emergencies": "N",
    "Data Buffer when not in range": "N",
    "Fuel Management": "N",
    "Satellite communication backup": "N",
    "Tyre Pressure Monitor": "N",
    "Digital Mapping": "N",
    "Data Analytics Dashboard": "Y",
    "Video capture": "N",
    "Driver Fatigue Report": "N",
    "Driver Fatigue Live Monitoring and alerts": "N",
    "Road Speed Limit System": "N",
    "Route Planning and Monitoring": "N",
  }
  const plan1 = {
    "Driver Identification System": "Y",
    "Vehicle Access Control System": "Y",
    "Real-time/ Live tracking": "Y",
    "Security Emergency Alarms": "Y",
    "Driving Behaviour Reports and Analysis.": "Y",
    "Seat-belt usage monitoring": "Y",
    "Incident/Accident Information": "Y",
    "Alerts Instant Notification": "Y",
    "Voice Communication during emergencies": "N",
    "Data Buffer when not in range": "Y",
    "Fuel Management": "N",
    "Satellite communication backup": "N",
    "Tyre Pressure Monitor": "N",
    "Digital Mapping": "Y",
    "Data Analytics Dashboard": "Y",
    "Video capture": "N",
    "Driver Fatigue Report": "Y",
    "Driver Fatigue Live Monitoring and alerts": "N",
    "Road Speed Limit System": "Y",
    "Route Planning and Monitoring": "Y",
  };
  const plan2 = {
    "Driver Identification System": "Y",
    "Vehicle Access Control System": "Y",
    "Real-time/ Live tracking": "Y",
    "Security Emergency Alarms": "Y",
    "Driving Behaviour Reports and Analysis.": "Y",
    "Seat-belt usage monitoring": "Y",
    "Incident/Accident Information": "Y",
    "Alerts Instant Notification": "Y",
    "Voice Communication during emergencies": "Y",
    "Data Buffer when not in range": "Y",
    "Fuel Management": "Y",
    "Satellite communication backup": "Y",
    "Tyre Pressure Monitor": "Y",
    "Digital Mapping": "Y",
    "Data Analytics Dashboard": "Y",
    "Video capture": "Y",
    "Driver Fatigue Report": "Y",
    "Driver Fatigue Live Monitoring and alerts": "Y",
    "Road Speed Limit System": "Y",
    "Route Planning and Monitoring": "Y",
  };

  return (
    <HStack
      width={"full"}
      gap={"40px"}
      flexDir={["column", "column", "column", "row", "row"]}
      px={"10px"}
    >
      <VStack
        width={"full"}
        px={"20px"}
        py={"20px"}
        border={"1px solid green"}
        borderRadius={"10px"}
        bg={"#fff"}
      >
        <VStack textAlign={"center"}>
          <Text fontWeight={"800"} fontSize={"2xl"}>
            Basic Tracking
          </Text>
          <Text fontSize={"sm"}>
            For fleets that want to centralize fleet data and automate
            outsourced maintenance
          </Text>
          <Text fontSize={"3xl"} fontWeight={"900"}>
              ₦6,000
          </Text>
          <Text fontSize={"xs"}>Per vehicle, billed every month</Text>
          <Link width={"full"} href={"https://paystack.com/pay/e34yur0wrx"} target="_blank" >  <Button
            width={"full"}
            my={"20px"}
            color={"#fff"}
            bg={"green.700"}
            size={"lg"}
          >
            Subscribe
          </Button></Link>
        </VStack>
        <hr />
        <VStack width={"full"} gap={"20px"}>
          <Text textAlign={"center"} fontSize={"lg"} fontWeight={"600"}>
            Features
          </Text>
          <VStack width={"full"} alignItems={"flex-start"}>
            {Object.entries(planBasic)
              .slice(1)
              .map(([feature, availability]) => (
                <ListItem
                  key={feature}
                  availability={availability}
                  feature={feature}
                />
              ))}
          </VStack>
        </VStack>
      </VStack>
      <VStack
        width={"full"}
        px={"20px"}
        py={"20px"}
        border={"1px solid green"}
        borderRadius={"10px"}
        bg={"#fff"}
      >
        <VStack textAlign={"center"}>
          <Text fontWeight={"800"} fontSize={"2xl"}>
            Advanced Fleet Management Solution
          </Text>
          <Text fontSize={"sm"}>
            For fleets that want to centralize fleet data and automate
            outsourced maintenance
          </Text>
          <Text fontSize={"3xl"} fontWeight={"900"}>
          ₦10,000
          </Text>
          <Text fontSize={"xs"}>Per vehicle, billed every month</Text>
          <Link width={"full"} href={"https://paystack.com/pay/e34yur0wrx"} target="_blank" >  <Button
            width={"full"}
            my={"20px"}
            color={"#fff"}
            bg={"green.700"}
            size={"lg"}
          >
            Subscribe
          </Button></Link>
        
        </VStack>
        <hr />
        <VStack width={"full"} gap={"20px"}>
          <Text textAlign={"center"} fontSize={"lg"} fontWeight={"600"}>
            Features
          </Text>
          <VStack width={"full"} alignItems={"flex-start"}>
            {Object.entries(plan1)
              .slice(1)
              .map(([feature, availability]) => (
                <ListItem
                  key={feature}
                  availability={availability}
                  feature={feature}
                />
              ))}
          </VStack>
        </VStack>
      </VStack>
      <VStack
        width={"full"}
        px={"20px"}
        py={"20px"}
        border={"1px solid green"}
        borderRadius={"10px"}
        bg={"#fff"}
      >
        <VStack textAlign={"center"}>
          <Text fontWeight={"800"} fontSize={"2xl"}>
            Ultra-Advanced Fleet Management Solution
          </Text>
          <Text fontSize={"sm"}>
            For fleets that want to centralize fleet data and automate
            outsourced maintenance
          </Text>
          <Text fontSize={"3xl"} fontWeight={"900"}>
          ₦12,000
          </Text>
          <Text fontSize={"xs"}>Per vehicle, billed every month</Text>
          <Link width={"full"} href={"https://paystack.com/pay/e34yur0wrx"} target="_blank" >  <Button
            width={"full"}
            my={"20px"}
            color={"#fff"}
            bg={"green.700"}
            size={"lg"}
          >
            Subscribe
          </Button></Link>
        </VStack>
        <hr />
        <VStack width={"full"} gap={"20px"}>
          <Text textAlign={"center"} fontSize={"lg"} fontWeight={"600"}>
            Features
          </Text>
          <VStack width={"full"} alignItems={"flex-start"}>
            {Object.entries(plan2)
              .slice(1)
              .map(([feature, availability]) => (
                <ListItem
                  key={feature}
                  availability={availability}
                  feature={feature}
                />
              ))}
          </VStack>
        </VStack>
      </VStack>
    </HStack>
  );
};

const ListItem = (props) => {
  return (
    <HStack>
      {props.availability === "N" ? (
        <CloseIcon fontSize={"xs"} color={"red.600"} />
      ) : (
        <CheckIcon fontSize={"xs"} color={"green.600"} />
      )}
      <Text fontSize={"sm"} fontWeight={"500"}>
        {props.feature}{" "}
      </Text>
    </HStack>
  );
};

export default PricingCard;
