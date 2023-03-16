import { Box, Heading, Text, Flex, Button, } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa"
import { BiDirections } from "react-icons/bi"
import { Menu, MenuButton, MenuList, MenuItem, } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'





const LocationCom = () => {
    return (
        <Box w="80%" m="auto">
            <Heading mt="50px" mb="20px">Locate Us</Heading>
            <Flex>
                <Box w="35%">
                    <Heading fontSize="1xl" color="#4d585b;">Address:</Heading>
                    <Text>Beach Road, Near Vijay Beach Park, Sea View Ward, Padinjare Kurisadi, Kanjiramchira, Alappuzha, Kerala Contact : 04440114576</Text>


                    <Button mt="30px" w="210px" fontSize="1xl" color="#f15824" boxShadow="box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" borderRadius="10px" textAlign="start" >
                        <FaWhatsapp color="#f15824" />
                         Whatapp Us
                    </Button>

                    <Menu >
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} justify="space-between" w="350px" mt="30px" fontSize="2xl" color="#4d585b;">
                            Directions
                        </MenuButton>
                        <MenuList w="350px">
                            <MenuItem mb="20px">Ask for Vijay Amusement part. Walk North on Beach Road for 500 meters, and you’ll reach a junction. On the opposite right corner, you will find Zostel Alleppey.</MenuItem>
                            <MenuItem mb="20px">
                                <Heading fontSize="0xl">From the Alleppey Railway Station:</Heading> 2.5 km; ~INR 85 for a tuk-tuk to Zostel Alleppey.
                            </MenuItem>
                            <MenuItem mb="20px">
                                <Heading fontSize="0xl">From the Bus Stand Jetty:</Heading> 4 km; ~INR 100 for a tuk-tuk to Zostel Alleppey.
                            </MenuItem>
                            <MenuItem mb="20px">
                                <Heading fontSize="0xl">From Kochi Airport: </Heading> 85 km, 2 hrs; ~INR 2500 for a cab to Zostel Alleppey.
                            </MenuItem>
                        </MenuList>

                    </Menu>

                    <Button mt="30px" w="350px" fontSize="2xl" color="#f15824" bg="#e2e8f0" boxShadow="box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" borderRadius="10px" >
                        <BiDirections color="#f15824" />
                        Get Direction
                    </Button>
                </Box>
              <Box  >
              <div class="mapouter"><div class="gmap_canvas"><iframe borderRadius="20px" width="700px" height="300px" id="gmap_canvas" src="https://maps.google.com/maps?q=india&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
              </Box>
            </Flex>



            <Box>
                <Heading mb="20px" mt="35px">
                    Property Policy
                </Heading>
                <Text>
                    - Guests are required to pay a 21% advance at the time of booking itself. The entire balance needs to be cleared upon arrival at the property during check-in.
                </Text>
                <Text>- Our standard check-in time is 12 PM and the standard check-out time is 10 AM. Early check-in and late check-out requests are subject to availability, and may also attract an additional fee at the property's discretion.</Text>
                <Text>- We strictly DO NOT allow a group of more than 8 people. In case of a group of 4 or more, you might be purposefully allotted different dorm rooms. Further, if the group behaviour is deemed unfit at the property, the Zostel Property Manager, upon subjective evaluation, retains the full right to take required action which may also result in an on-spot cancellation without refunds.</Text>
                <Text>
                    - Children below 18 years of age are not permitted entry/stay at any of our hostels, with or without guardians. We do not recommend families.
                </Text>
                <Text>
                    - We only accept a government ID as valid identification proof. No local IDs shall be accepted at the time of check-in.
                </Text>
                <Text>
                    - Guests are not permitted to bring outsiders inside the hostel campus.
                </Text>
                <Text>
                    - We believe in self-help and do not provide luggage assistance or room services.
                </Text>
                <Text>
                    - Drugs and any substance abuse is strictly banned inside and around the property.
                </Text>
                <Text>
                    - Alcohol consumption is permitted at the premises as per the property’s discretion and local laws. Please reach out to the property prior to your arrival to confirm the same.
                </Text>
                <Text>
                    - Right to admission reserved.
                </Text>
            </Box>
            <Box>
                <Heading mt="30px" mb="20px">
                    Cancellation Policy
                </Heading>
                <Text mt="20px" mb="20px">We understand that sometimes plans change. Hence, to make it light on your pocket, we are only charging a 21% advance, which is on a non-refundable basis.</Text>
                <Text>Note</Text>
                <Text>- 21% advance payment is non-refundable at all times, as stated above. </Text>
                <Text>- If you have paid any amount over this 21%, it stands applicable for a credit only if the cancellation is informed 7 days or more in advance. You will be able to avail the credited amount for any future booking at any of our properties.</Text>
                <Text>- If informed within 7 days of the standard check-in time (12 pm), the amount shall be adjusted against the cancellation fee.</Text>
                <Text mt="20px" mb="10px">For any other queries, please reach out to us at reservations@zostel.com.</Text>
            </Box>
        </Box>
    );
}


export default LocationCom; 