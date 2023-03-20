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
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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

  const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));

  let [datamodified,setDatamodified]=useState(data)
  
  const handleAlphabetChange=(e)=>{
      let letter=e.target.value
      
      let datamodified1=data.filter((e)=>{
        return letter==e.Title.at(0)
      })
      setDatamodified(datamodified1)
  }

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

      {/* filter  */}
      <Select placeholder="Select Letter" onChange={handleAlphabetChange} width={{ sm: '100%', md:"100%",lg: '180px',xl:"180px" }}>
      {alphabet.map((letter) => (
        <option key={letter} value={letter} width={"100%"}>
          {letter}
        </option>
      ))}
    </Select>
      

      <SimpleGrid columns={{ sm: '1', md:"2",lg: '3',xl:"4" }} spacing={3}>
        {datamodified.map((e) => {
            return (
              <NavLink to={`/destination/${e.Title}`}>
              {console.log(e)}
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
    </Stack>}
  </>
}

export default Destinationpage;
