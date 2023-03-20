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
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  let cart = [
    {
      id: 188,
      addons: [],
      status: "active",
      category: "room",
      sub_category: "dorm-bed",
      tax_category: "Room",
      amenities: [
        {
          id: 4,
          name: "Lockers",
          code: "vpn_key",
        },
        {
          id: 9,
          name: "Hot water",
          code: "hot_tub",
        },
        {
          id: 10,
          name: "Laundry Services (Extra)",
          code: "local_laundry_service",
        },
        {
          id: 13,
          name: "Free Wi-Fi",
          code: "wifi",
        },
        {
          id: 23,
          name: "Air-conditioning",
          code: "ac_unit",
        },
        {
          id: 7,
          name: "24/7 Reception",
          code: "room_service",
        },
        {
          id: 26,
          name: "Bedside Lamps",
          code: "wb_incandescent",
        },
        {
          id: 21,
          name: "Breakfast (Extra)",
          code: "free_breakfast",
        },
        {
          id: 20,
          name: "Towels on rent",
          code: "layers",
        },
        {
          id: 18,
          name: "Linen Included",
          code: "airline_seat_individual_suite",
        },
        {
          id: 24,
          name: "Shower",
          code: "shower",
        },
      ],
      images: [
        {
          id: "3a5bcdc2-d4e8-4e8f-ae08-1a443fcce765",
          title: "Zostel Bangalore - 10 Bed Mixed Dorm",
          description: "",
          image:
            "https://img.cdn.zostel.com/zostel/gallery/images/OlvNwtToTo-uCBpEP8znZQ/zostel-bangalore-10-bed-mixed-dorm-20201112104629.jpg",
          alt_text: "Zostel Bangalore - 10 Bed Mixed Dorm",
          priority: 6,
        },
        {
          id: "d10c6e1c-e60e-438d-bc94-5c8968918b11",
          title: "10 Bed Mixed Dorm (with shared washroom)",
          description: "",
          image:
            "https://img.cdn.zostel.com/zostel/gallery/images/0QxuHOYOQ428lFyJaJGLEQ/10-bed-mixed-dorm-with-shared-washroom-2021_HTcElS7.jpg",
          alt_text: "10 Bed Mixed Dorm (with shared washroom)",
          priority: 5,
        },
        {
          id: "095a858b-38b7-4f1c-bccc-23af7f87edcf",
          title: "10 Bed Mixed Dorm (with shared washroom)",
          description: "",
          image:
            "https://img.cdn.zostel.com/zostel/gallery/images/CVqFizi3Txy8zCOvf4ftzw/10-bed-mixed-dorm-with-shared-washroom-2021_R6gGod3.jpg",
          alt_text: "10 Bed Mixed Dorm (with shared washroom)",
          priority: 4,
        },
        {
          id: "961d8a88-ac74-42b4-84b6-7478f1c9172b",
          title: "10 Bed Mixed Dorm (with shared washroom)",
          description: "",
          image:
            "https://img.cdn.zostel.com/zostel/gallery/images/lh2KiKx0QrSEtnR48ckXKw/10-bed-mixed-dorm-with-shared-washroom-2021_VUoRKnt.jpg",
          alt_text: "10 Bed Mixed Dorm (with shared washroom)",
          priority: 3,
        },
        {
          id: "6b812694-afad-4edb-bb68-2c9c11f9fd29",
          title: "10 Bed Mixed Dorm (with shared washroom)",
          description: "",
          image:
            "https://img.cdn.zostel.com/zostel/gallery/images/a4EmlK-tTtu7aCycEfn9KQ/10-bed-mixed-dorm-with-shared-washroom-2021_DuEUBqc.jpg",
          alt_text: "10 Bed Mixed Dorm (with shared washroom)",
          priority: 1,
        },
      ],
      videos: [],
      code: "RM-8VLPI",
      name: "10 Bed Mixed Dorm (with shared washroom)",
      description:
        "<p>A bed in a mixed dormitory with private lockers, AC, and a shared washroom outside.</p>",
      inclusion: null,
      exclusion: null,
      itinerary: null,
      priority: 1,
      units: 20,
      price: 2512,
      advance_percent: 21,
      occupancy: 1,
      ref_keys: {
        ezee: "1240400000000000004",
      },
      data: {},
      experience: null,
      quantity_rooms: 3,
    },
    {
      id: 189,
      addons: [],
      status: "active",
      category: "room",
      sub_category: "dorm-bed",
      tax_category: "Room",
      amenities: [
        {
          id: 4,
          name: "Lockers",
          code: "vpn_key",
        },
        {
          id: 9,
          name: "Hot water",
          code: "hot_tub",
        },
        {
          id: 10,
          name: "Laundry Services (Extra)",
          code: "local_laundry_service",
        },
        {
          id: 13,
          name: "Free Wi-Fi",
          code: "wifi",
        },
        {
          id: 23,
          name: "Air-conditioning",
          code: "ac_unit",
        },
        {
          id: 7,
          name: "24/7 Reception",
          code: "room_service",
        },
        {
          id: 26,
          name: "Bedside Lamps",
          code: "wb_incandescent",
        },
        {
          id: 21,
          name: "Breakfast (Extra)",
          code: "free_breakfast",
        },
        {
          id: 20,
          name: "Towels on rent",
          code: "layers",
        },
        {
          id: 18,
          name: "Linen Included",
          code: "airline_seat_individual_suite",
        },
        {
          id: 24,
          name: "Shower",
          code: "shower",
        },
      ],
      images: [
        {
          id: "c5de1c63-b3ea-447f-94b7-1f69e8912338",
          title: "6 Bed Mixed Dorm (with shared washroom)",
          description: "",
          image:
            "https://img.cdn.zostel.com/zostel/gallery/images/xd4cY7PqRH-Utx9p6JEjOA/6-bed-mixed-dorm-with-shared-washroom-20210_ct0JutN.jpg",
          alt_text: "6 Bed Mixed Dorm (with shared washroom)",
          priority: 5,
        },
        {
          id: "8c18f1ca-0dfa-4efb-b6c5-28100f90398f",
          title: "6 Bed Mixed Dorm (with shared washroom)",
          description: "",
          image:
            "https://img.cdn.zostel.com/zostel/gallery/images/jBjxyg36Tvu2xSgQD5A5jw/6-bed-mixed-dorm-with-shared-washroom-20210_zX23qXv.jpg",
          alt_text: "6 Bed Mixed Dorm (with shared washroom)",
          priority: 4,
        },
        {
          id: "8a7a9ea6-7bad-4039-88e6-435eb7c4e78a",
          title: "Zostel Bangalore - 6 Bed Mixed Dorm",
          description: "",
          image:
            "https://img.cdn.zostel.com/zostel/gallery/images/inqepnutQDmI5kNet8Tnig/zostel-bangalore-6-bed-mixed-dorm-20201112104623.jpg",
          alt_text: "Zostel Bangalore - 6 Bed Mixed Dorm",
          priority: 3,
        },
        {
          id: "229597d2-79f1-4714-93f1-a4d015614d03",
          title: "6 Bed Mixed Dorm (with shared washroom)",
          description: "",
          image:
            "https://img.cdn.zostel.com/zostel/gallery/images/IpWX0nnxRxST8aTQFWFNAw/6-bed-mixed-dorm-with-shared-washroom-20210_yd4Chyv.jpg",
          alt_text: "6 Bed Mixed Dorm (with shared washroom)",
          priority: 2,
        },
        {
          id: "fcb7f90d-1602-45ce-b242-34ab74c435b4",
          title: "6 Bed Mixed Dorm (with shared washroom)",
          description: "",
          image:
            "https://img.cdn.zostel.com/zostel/gallery/images/_Lf5DRYCRc6yQjSrdMQ1tA/6-bed-mixed-dorm-with-shared-washroom-20210_nxGWSO8.jpg",
          alt_text: "6 Bed Mixed Dorm (with shared washroom)",
          priority: 1,
        },
      ],
      videos: [],
      code: "RM-TFEAZ",
      name: "6 Bed Mixed Dorm (with shared washroom)",
      description:
        "<p>A bed in a mixed dormitory with private lockers, AC, and a shared washroom outside.</p>",
      inclusion: null,
      exclusion: null,
      itinerary: null,
      priority: 2,
      units: 24,
      price: 2512,
      advance_percent: 21,
      occupancy: 1,
      ref_keys: {
        ezee: "1240400000000000008",
      },
      data: {},
      experience: null,
      quantity_rooms: 2,
    },
    {
      id: 187,
      addons: [],
      status: "active",
      category: "room",
      sub_category: "dorm-bed",
      tax_category: "Room",
      amenities: [
        {
          id: 4,
          name: "Lockers",
          code: "vpn_key",
        },
        {
          id: 9,
          name: "Hot water",
          code: "hot_tub",
        },
        {
          id: 10,
          name: "Laundry Services (Extra)",
          code: "local_laundry_service",
        },
        {
          id: 13,
          name: "Free Wi-Fi",
          code: "wifi",
        },
        {
          id: 23,
          name: "Air-conditioning",
          code: "ac_unit",
        },
        {
          id: 7,
          name: "24/7 Reception",
          code: "room_service",
        },
        {
          id: 26,
          name: "Bedside Lamps",
          code: "wb_incandescent",
        },
        {
          id: 21,
          name: "Breakfast (Extra)",
          code: "free_breakfast",
        },
        {
          id: 20,
          name: "Towels on rent",
          code: "layers",
        },
        {
          id: 18,
          name: "Linen Included",
          code: "airline_seat_individual_suite",
        },
        {
          id: 24,
          name: "Shower",
          code: "shower",
        },
      ],
      images: [
        {
          id: "1066b982-a3be-4971-8fc5-1551f7860bec",
          title: "Zostel Bangalore - 4 Bed Mixed Dorm (Ensuite)",
          description: "",
          image:
            "https://img.cdn.zostel.com/zostel/gallery/images/EGa5gqO-SXGPxRVR94YL7A/zostel-bangalore-4-bed-mixed-dorm-ensuite-2_g7kImbo.jpg",
          alt_text: "Zostel Bangalore - 4 Bed Mixed Dorm (Ensuite)",
          priority: 5,
        },
        {
          id: "f5b20629-0439-49fe-a8c7-36566ccd4322",
          title: "Zostel Bangalore - 4 Bed Mixed Dorm",
          description: "",
          image:
            "https://img.cdn.zostel.com/zostel/gallery/images/9bIGKQQ5Sf6oxzZWbM1DIg/zostel-bangalore-4-bed-mixed-dorm-20201112104626.jpg",
          alt_text: "Zostel Bangalore - 4 Bed Mixed Dorm",
          priority: 4,
        },
        {
          id: "47e2e469-7590-44b4-a432-532741261560",
          title: "4 Bed Mixed Dorm (Ensuite)",
          description: "",
          image:
            "https://img.cdn.zostel.com/zostel/gallery/images/R-LkaXWQRLSkMlMnQSYVYA/4-bed-mixed-dorm-ensuite-20210315042218.jpg",
          alt_text: "4 Bed Mixed Dorm (Ensuite)",
          priority: 2,
        },
        {
          id: "89ae5d7e-cdbc-42f5-bd66-4a04637f7ce5",
          title: "4 Bed Mixed Dorm (Ensuite)",
          description: "",
          image:
            "https://img.cdn.zostel.com/zostel/gallery/images/ia5dfs28QvW9ZkoEY3985Q/4-bed-mixed-dorm-ensuite-20210315042220.jpg",
          alt_text: "4 Bed Mixed Dorm (Ensuite)",
          priority: 1,
        },
      ],
      videos: [],
      code: "RM-BZJN0",
      name: "4 Bed Mixed Dorm (Ensuite)",
      description:
        "<p>A bed in a mixed dormitory with private lockers, AC, and a shared en-suite washroom.</p>",
      inclusion: null,
      exclusion: null,
      itinerary: null,
      priority: 3,
      units: 8,
      price: 2512,
      advance_percent: 21,
      occupancy: 1,
      ref_keys: {
        ezee: "1240400000000000005",
      },
      data: {},
      experience: null,
      quantity_rooms: 2,
    },
  ];
  // let cart=[]

  const [totalprice, setTotalprice] = useState(0);
  console.log("totalprice: ", totalprice);

  function pricecalculate() {
    let x = cart.reduce((e1, e2) => {
      return e1 + e2.price * e2.quantity_rooms;
    }, 0);
    setTotalprice(x);
  }
  useEffect(() => {
    pricecalculate();
  }, []);

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
            <></>
            {cart.length > 0 ? (
              <>
                {cart.map((e) => {
                  return (
                    <HStack spacing={5} width={"100%"} mt={5}>
                      <Image
                        src={e.images[0].image}
                        width={"64px"}
                        borderRadius="10"
                      />
                      <VStack align={"baseline"} spacing={"0"}>
                        <Text fontSize={"14"} fontWeight={"600"}>
                          {e.name} x {e.quantity_rooms}
                        </Text>
                        <Text fontSize={"16"} fontWeight={"600"}>
                          ₹{e.price} x 1 night
                        </Text>
                      </VStack>
                      <Spacer />
                      <Text fontSize={"16"} fontWeight={"600"}>
                        ₹{e.price * e.quantity_rooms}
                      </Text>
                    </HStack>
                  );
                })}
                <Divider />
                <HStack width={"100%"} fontSize={18} fontWeight="600">
                  <Text>Tax</Text>
                  <Spacer />
                  <Text>₹{(totalprice * 0.12).toFixed(0)}</Text>
                </HStack>
                <HStack width={"100%"} fontSize={18} fontWeight="600">
                  <Text>Total (tax incl.)</Text>
                  <Spacer />
                  <Text>₹{totalprice}</Text>
                </HStack>
                <HStack width={"100%"} fontSize={18} fontWeight="600">
                  <Text>Payable Now</Text>
                  <Spacer />
                  <Text>₹{(totalprice * 0.21).toFixed(0)}</Text>
                </HStack>
                <Divider />
                <Checkbox
                  isChecked={formsubmit}
                  colorScheme="orange"
                  isRequired
                  mt={"50px"}
                  onChange={(e) => console.log("eeee", e.target.checked)}
                >
                  I acknowledge and accept the terms and conditions mentioned in
                  the Property Policy & Cancellation Policy.
                </Checkbox>
                <Button
                  isDisabled={!formsubmit}
                  width={"100%"}
                  colorScheme={"orange"}
                  onClick={onOpen}
                >
                  Reserve
                </Button>
                <PaymentModal
                  onOpen={onOpen}
                  onClose={onClose}
                  isOpen={isOpen}
                />
              </>
            ) : (
              <VStack>
                <Image src="https://book.zostel.com/static/media/gray-zobu.018014d9.svg" />
                <Text color={"#96A4A9"}>No Room Selected </Text>
              </VStack>
            )}
            {/* Hotel Card Ends */}
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
}
{
  /* <VStack>
         
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
         <Checkbox
           isChecked={formsubmit}
           colorScheme="orange"
           isRequired
           mt={"50px"}
           onChange={(e) => console.log("eeee", e.target.checked)}
         >
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
       </VStack> */
}
