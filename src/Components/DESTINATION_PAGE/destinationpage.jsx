import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  Center,
  CircularProgress,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BounceLoader, RiseLoader } from "react-spinners";
import DotLoader from "react-spinners/DotLoader";
import data from "./Explore Destinations _ Zostel.json"
function Destinationpage() {
  const [loading,setLoading]= useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2500)
  },[])

  return <>
    {loading? 
    <Center h={"100vh"}>
    {/* <DotLoader speedMultiplier={4} size={"50"} color="#F15824" /> */}
    {/* <RiseLoader speedMultiplier={1.5} size={"30"} color="#F15824" /> */}
    <BounceLoader speedMultiplier={1.5} size={"60"} color="#F15824" />
    <Text as={"h1"} ml={2} fontSize="40" color='#F15824'>Loading.....</Text>
    </Center>:
    <Stack m={"auto"} w="80%" mt={10}>
      {/* Header  */}
      <HStack  fontSize={{ sm: '30', md:"38",lg: '38',xl:"38" }} fontWeight={"bold"}>
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

      <SimpleGrid columns={{ sm: '1', md:"2",lg: '3',xl:"4" }} spacing={3}>
        {data.map((e) => {
            return (
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
                  {e.Title=="Bangalore"||e.Title=="Delhi"?<Link href="#">{e.Title}</Link>:e.Title}
                </Text>
              </Card>
            );
          })}
      </SimpleGrid>
    </Stack>}
  </>
}

export default Destinationpage;
