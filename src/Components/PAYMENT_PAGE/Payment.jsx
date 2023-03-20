import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Link,
  Spacer,
  Stack,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useToast,
  useColorModeValue,
  useDisclosure,
  HStack,
  Image,
  Checkbox,
  Divider,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import PaymentModal from "./PaymentModal";
export default function Payment() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [formsubmit, setFormsubmit] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      position: "top-left",
      title: `User Information Updated`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setFormsubmit(true);
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toast = useToast();

  return (
    <Box width={"90%"} m="auto" mt={"30"}>
      <Text fontSize={"30"} fontWeight="700">
        <ArrowBackIcon /> Confirm Your Booking
      </Text>
      <Text>&nbsp;</Text>
      <Stack
        direction={{
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        width={"100%"}
        m={"auto"}
      >
        <VStack
          width={{
            sm: "100%",
            md: "100%",
            lg: "65%",
            xl: "60%",
          }}
        >
          <Accordion
            allowToggle
            w={"100%"}
            defaultIndex={[0]}
            border={useColorModeValue("1px solid #E8F0F2", "1px solid #3F444E")}
            borderRadius={"5"}
          >
            <AccordionItem>
              <h2>
                <AccordionButton borderRadius={"10"}>
                  <Box
                    as="header"
                    borderRadius={"10"}
                    flex="1"
                    textAlign="left"
                    fontSize={"18"}
                    fontWeight={"600"}
                    color={useColorModeValue("blackAlpha.700", "white")}
                  >
                    <Text>Guest Information</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <form onSubmit={handleSubmit}>
                  <VStack spacing="4">
                    <FormControl isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Middle Name</FormLabel>
                      <Input
                        type="text"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Gender</FormLabel>
                      <Select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        placeholder="Select Gender"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Select>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Address</FormLabel>
                      <Input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                      <Button mt={5} type="submit" colorScheme={"orange"}>
                        Submit and Accept Terms and Conditions
                      </Button>
                    </FormControl>
                  </VStack>
                </form>
                {formsubmit ? (
                  <Alert mt={"5"} status="success">
                    <AlertIcon />
                    Data uploaded to the server. Fire on! Reserve Your Units !
                  </Alert>
                ) : (
                  <></>
                )}
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="header"
                    flex="1"
                    textAlign="left"
                    fontSize={"18"}
                    fontWeight={"600"}
                    color={useColorModeValue("blackAlpha.700", "white")}
                  >
                    <Text>Property Policy</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>
                  - Guests are required to pay a 21% advance at the time of
                  booking itself. The entire balance needs to be cleared upon
                  arrival at the property during check-in.
                </Text>
                <Spacer />
                <Text>
                  <br />- Our standard check-in time is 12 PM and the standard
                  check-out time is 10 AM. Early check-in and late check-out
                  requests are subject to availability, and may also attract an
                  additional fee at the property's discretion.
                </Text>
                <Spacer />
                <Text>
                  <br />- We strictly DO NOT allow a group of more than 8
                  people. In case of a group of 4 or more, you might be
                  purposefully allotted different dorm rooms. Further, if the
                  group behaviour is deemed unfit at the property, the Zostel
                  Property Manager, upon subjective evaluation, retains the full
                  right to take required action which may also result in an
                  on-spot cancellation without refunds.
                </Text>
                <Spacer />
                <Text>
                  <br />- Children below 18 years of age are not permitted
                  entry/stay at any of our hostels, with or without guardians.
                  We do not recommend families.
                </Text>
                <Spacer />
                <Text>
                  <br />- We only accept a government ID as valid identification
                  proof. No local IDs shall be accepted at the time of check-in.
                </Text>
                <Spacer />
                <Text>
                  <br />- Guests are not permitted to bring outsiders inside the
                  hostel campus.
                </Text>
                <Spacer />
                <Text>
                  <br />- We believe in self-help and do not provide luggage
                  assistance or room services.
                </Text>
                <Spacer />
                <Text>
                  <br />- Drugs and any substance abuse is strictly banned
                  inside and around the property.
                </Text>
                <Spacer />
                <Text>
                  <br />- Alcohol consumption is strictly prohibited in and
                  around the property premises.
                </Text>
                <Spacer />
                <Text>
                  <br />- Right to admission reserved
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="header"
                    flex="1"
                    textAlign="left"
                    fontSize={"18"}
                    fontWeight={"600"}
                    color={useColorModeValue("blackAlpha.700", "white")}
                  >
                    <Text>Cancellation Policy</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>
                  We understand that sometimes plans change. Hence, to make it
                  light on your pocket, we are only charging a 21% advance,
                  which is on a non-refundable basis.
                </Text>
                <Text>&nbsp;</Text>
                <Text>NOTE:</Text>
                <Text>
                  - 21% advance payment is non-refundable at all times, as
                  stated above.
                </Text>
                <Text>
                  - If you have paid any amount over this 21%, it stands
                  applicable for a credit only if the cancellation is informed 7
                  days or more in advance. You will be able to avail the
                  credited amount for any future booking at any of our
                  properties.
                </Text>
                <Text>
                  - If informed within 7 days of the standard check-in time (12
                  pm), the amount shall be adjusted against the cancellation
                  fee.
                </Text>
                <Text>&nbsp;</Text>
                <Text>
                  For any other queries, please reach out to us at{" "}
                  <Link href="mailto:reservations@zostel.com">
                    reservations@zostel.com
                  </Link>
                  .
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>

        {/* sidebar  */}
        <Box
          borderRadius={"10"}
          width={{
            sm: "100%",
            md: "100%",
            lg: "35%",
            xl: "35%",
          }}
          border={useColorModeValue("1px solid #E8F0F2", "1px solid #3F444E")}
          padding={"3"}
        >
          <Text as={"h3"} fontSize={"24"} fontWeight={"700"}>
            Summary
          </Text>
          <Text fontSize={"14"} fontWeight={"700"}>
            1 night <span style={{ color: "gray" }}>starting from</span> Mon 27
            Mar, 2023
          </Text>
          <VStack>
            {/* Hotel Card Starts */}
            <HStack spacing={5} width={"100%"} mt={5}>
              <Image
                src="https://img.cdn.zostel.com/zostel/gallery/images/EGa5gqO-SXGPxRVR94YL7A/zostel-bangalore-4-bed-mixed-dorm-ensuite-2_g7kImbo.jpg?w=64"
                width={"64px"}
                borderRadius="10"
              />
              <VStack align={"baseline"} spacing={"0"}>
                <Text fontSize={"16"} fontWeight={"600"}>
                  4 Bed Mixed Dorm (Ensuite) x 1
                </Text>
                <Text fontSize={"16"} fontWeight={"600"}>
                  ₹799 x 1 night
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize={"16"} fontWeight={"600"}>
                ₹799
              </Text>
            </HStack>
            <Divider />
            {/* Hotel Card Ends */}

            <HStack width={"100%"} fontSize={18} fontWeight="600">
              <Text>Tax</Text>
              <Spacer />
              <Text>₹96</Text>
            </HStack>
            <HStack width={"100%"} fontSize={18} fontWeight="600">
              <Text>Total (tax incl.)</Text>
              <Spacer />
              <Text>₹895</Text>
            </HStack>
            <HStack width={"100%"} fontSize={18} fontWeight="600">
              <Text>Payable Now</Text>
              <Spacer />
              <Text>₹188</Text>
            </HStack>
            <Divider />
            <Checkbox isChecked={formsubmit} colorScheme="orange" isRequired mt={"50px"} onChange={(e) => console.log("eeee", e.target.checked)}>
              I acknowledge and accept the terms and conditions mentioned in the
              Property Policy & Cancellation Policy.
            </Checkbox>
            <Button
              isDisabled={!formsubmit}
              width={"100%"}
              colorScheme={"orange"}
              onClick={onOpen}
            >
              Reserve
            </Button>
            <PaymentModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
}
