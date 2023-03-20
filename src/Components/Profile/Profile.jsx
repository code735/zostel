import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";

import React, { useContext, useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Textarea,
    useToast,
    Box,
    Stack,
    HStack,
    VStack,
    Heading,
    Text,
    Flex,
    Image,
    Option,
    Center,
    useColorModeValue,
    useColorMode,
    Spacer,
  } from "@chakra-ui/react";
import { ZostelContext } from "../../UseContext/ZostelContext";
import { useNavigate } from "react-router";

export default function Profile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const toast = useToast();
    const { colorMode, toggleColorMode } = useColorMode();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Do something with the user data, such as send it to a server
      // You can also clear the form here if needed
      toast({
        title: "Update Submitted!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    };
    
    const {setIsLogin,reserved,maincart,setMaincart,startdate,cartprice,setCartPrice}=useContext(ZostelContext)
    console.log("maincart: ", maincart);
    let cart=[...maincart]
    let navigate = useNavigate();


  console.log("cart: ", cart);

  return (
    <Tabs minH={"50vh"} width="90%" margin={"auto"}>
      <TabList>
        <Tab>User Info</Tab>
        <Tab>Log Out</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
        <VStack as="form" onSubmit={handleSubmit} spacing={4} mt={4}>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </FormControl>

      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </FormControl>

      <FormControl id="phone">
        <FormLabel>Phone Number</FormLabel>
        <Input
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
      </FormControl>

      <FormControl id="address">
        <FormLabel>Address</FormLabel>
        <Textarea
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          resize="vertical"
          rows={5}
          required
        />
      </FormControl>

      <Button type="submit" colorScheme="blue">
        Submit
      </Button>
    </VStack>
        </TabPanel>
        <TabPanel>
          <Button colorScheme={"orange"} onClick={()=>{
            setIsLogin(false)
            navigate("/")
          }}>LOG OUT</Button>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
