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
import PreLoader from "../PreLoader";
import data from "./Explore Destinations _ Zostel.json"
function Destinationpage() {
  const [loading,setLoading]= useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  return <>
    {loading? 

    <Center h={"100vh"}>
    {/* //preloader */}
    <PreLoader/>
    </Center>:
    <Stack m={"auto"} w="80%" mt={10}>
      {/* Header  */}
      <HStack  fontSize={{ sm: '30', md:"32",lg: '32',xl:"32" }} fontWeight={"bold"}>
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
