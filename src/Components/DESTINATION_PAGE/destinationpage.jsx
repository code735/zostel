import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Destinationpage() {
  return (
    <Stack m={"auto"} w="80%" mt={10}>
      {/* Header  */}
      <HStack m={"auto"} fontSize="30px" fontWeight={"bold"}>
        <Text as={"h1"}>Explore</Text>
        <Text as={"strong"} color={"#F15824"}>
          Destinations
        </Text>
      </HStack>

      {/* Breadcrumbs  */}
      <Box>
      <Breadcrumb separator="->" mb={"5"}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="/destination">Destinations</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      </Box>

      <SimpleGrid columns={{ sm: '2', md:"3",lg: '4' }} spacing={3}>
        {Array(78)
          .fill()
          .map((e) => {
            return (
              <Card maxW="sm" position="relative">
                <Image
                  src="https://img.cdn.zostel.com/zostel/gallery/images/FkicgycmQUSiCUU2ZjQnFw/banikhet-20230223105721.png?h=400"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  opacity={"0.9"}
                  width={"30"}
                  h={"300"}
                  objectFit="cover"
                />
                <Text
                  position="absolute"
                  bottom="2"
                  left="2"
                  fontWeight="bold"
                  color="white"
                >
                  Yooooooo
                </Text>
              </Card>
            );
          })}
      </SimpleGrid>
    </Stack>
  );
}

export default Destinationpage;
