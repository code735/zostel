import React from "react";
import data from "./homepage.json";
import {
  HStack,
  Text,
  Card,
  Image,
  Link,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function ExploreDest() {
    console.log(data.length);
  return (
    <Box p={{ sm: "1rem", md: "3rem" }}>
      <HStack
        fontSize={{ sm: "30", md: "32", lg: "32", xl: "32" }}
        my={{ sm: "1rem", md: "0" }}
        mb={{ md: "3rem" }}
        justifyContent={{ sm: "center", md: "start" }}
        fontWeight={"bold"}
      >
        <Text as={"h1"}>Explore</Text>
        <Text as={"strong"} color={"#F15824"}>
          Destinations
        </Text>
      </HStack>
      <SimpleGrid
        columns={{ sm: "1", md: "2", lg: "3", xl: "5" }}
        placeItems={{ sm: "center" }}
        spacing={3}
      >
        {
            data.map((e,i) => {
            if(i%4==0)
          return (
            <NavLink to={`/destination/${e.Title}`}>
              <Card maxW="sm" position="relative">
                <Image
                  src={e.Image}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  opacity={"0.9"}
                  width={"30"}
                  h={"300"}
                  objectFit="cover"
                />
                <Text
                  position="absolute"
                  bottom="4"
                  left="4"
                  fontWeight="bold"
                  color="white"
                  fontSize={"2xl"}
                >
                  {e.Title}
                </Text>
              </Card>
            </NavLink>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
