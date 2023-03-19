import React from 'react'
import { Image, Box, Flex, Button, Heading, Text, Tag, TagLabel, Avatar, HStack } from '@chakra-ui/react'
import { BsFillKeyFill, BsWifi, BsFan, BsFillLampFill, BsFillCreditCardFill, BsReception3, BsQrCodeScan } from "react-icons/bs"
import { GrCafeteria } from "react-icons/gr"
import { IoMdCafe, IoMdBed } from "react-icons/io"
import { MdShower, MdRestoreFromTrash, MdOutlineLocalParking, MdOutlineBathtub, MdOtherHouses, MdLocalLaundryService } from "react-icons/md"
import { GiAtSea } from "react-icons/gi"
import { FaGlassWhiskey } from "react-icons/fa"
import { BiArea } from "react-icons/bi"
import {ChevronRightIcon} from "@chakra-ui/icons"
import LocationCom from './Location'
import CartCom from './Cart'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import {useState,useEffect} from "react";

export default function Zostel() {
  
  return (
    <div>
      <NavLink to="/payment"><Button>Payment</Button></NavLink>
      <Box width="80%" m="20px auto">
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Destination</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Alleppey</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Zostel Alleppey</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      {/* Image Section */}
      <Box w="80%" h="fit-content" m="auto"  >
        <Flex gap="5px">
          <Box >
            <Image src="https://img.cdn.zostel.com/zostel/gallery/images/SAReimRtRpeYxcwZL8vFqw/zostel-alleppey-20221008133041.jpg" alt="error" w="900px" h="520px" borderRadius="10px 0px 0px 10px" />
          </Box>
          <Box>
            <Image src="https://img.cdn.zostel.com/zostel/gallery/images/LEZzomqOSqaKSwTTUro54Q/zostel-alleppey-20221008133126.jpg?w=1280" mb="5px"  borderRadius="0px 10px 0px 0px" w="300px" h="170px" />
            <Image src="https://img.cdn.zostel.com/zostel/gallery/images/LEZzomqOSqaKSwTTUro54Q/zostel-alleppey-20221008133126.jpg?w=1280" mb="5px"  w="300px" h="170px" />
            <Image src="https://img.cdn.zostel.com/zostel/gallery/images/LEZzomqOSqaKSwTTUro54Q/zostel-alleppey-20221008133126.jpg?w=1280"   w="300px" h="170px" borderRadius="0px 0px 10px 0px" />
            {/* <Button>View All Photo</Button> */}
          </Box>
        </Flex>

        {/* Detail Section */}
        <Flex gap="30px">
          <Box w="55%">
            <Heading color="#f15824" mt="10px">
              Zostel Alleppey
            </Heading>
            <Text mt="5px">
              Situated right at the scenic Alappuzha Beach, Zostel Alleppey is a happening backpackers' hostel ideal for exploring the town and its backwaters. A white-coloured building surrounded by swaying palm trees invites you to a dreamy beach vacation here. The hostel is equipped with workstations, a colourful common area with indoor games, and a sprawling rooftop with an unobstructed view of the Arabian Sea. Look forward to a tour of backwaters on a houseboat, soothing village walks, and crimson-gold beach sunsets. And when you make your way back to the hostel, a lively evening full of chatter with fellow travellers will await.
            </Text>
            <Heading fontSize="1xl" mt="30px">Recommended experiences:</Heading>
            <Text>
              Experience the village life in Kuttanad, watch sunsets, and explore long stretches of sand. Watch locals practicing for snake boat race, go on a boat ride on backwaters, and chill by the campfire.
            </Text>
            
          </Box>
          <Box>
            <Heading mt="10px" fontSize="3xl" mb="20px">
              Amenities
            </Heading>
            <Flex gap="50px">
              <Box>
                <HStack mb="8px">
                  <BsFillKeyFill />
                  <Text fontSize="1xl">Lockers</Text>
                </HStack>
                <HStack mb="8px">
                  <BsWifi />
                  <Text fontSize="1xl">Free Wi-Fi</Text>
                </HStack>
                <HStack mb="8px">
                  <BsFan />
                  <Text fontSize="1xl">Air-Conditioning</Text>
                </HStack>
                <HStack mb="8px">
                  <GrCafeteria />
                  <Text fontSize="1xl">Cafe</Text>
                </HStack>
                <HStack mb="8px">
                  <IoMdCafe />
                  <Text fontSize="1xl">Breakfast (Extra)</Text>
                </HStack>
                <HStack mb="8px">
                  <IoMdBed />
                  <Text fontSize="1xl">Linen Included</Text>
                </HStack>
                <HStack mb="8px">
                  <MdOutlineLocalParking />
                  <Text fontSize="1xl">Parking</Text>
                </HStack >




              </Box>
              <Box>
                <HStack mb="8px">
                  <MdOutlineBathtub />
                  <Text fontSize="1xl">Hot Water</Text>
                </HStack>
                <HStack mb="8px">
                  <BsFillCreditCardFill />
                  <Text fontSize="1xl">Card Payment Accepted</Text>
                </HStack>
                <HStack mb="8px">
                  <BsReception3 />
                  <Text fontSize="1xl">24/7 Reception</Text>
                </HStack>
                <HStack mb="8px">
                  <MdOtherHouses />
                  <Text fontSize="1xl">In-house Activities</Text>
                </HStack>
                <HStack mb="8px">
                  <GiAtSea />
                  <Text fontSize="1xl">Sea-View</Text>
                </HStack>
                <HStack mb="8px">
                  <BsQrCodeScan />
                  <Text fontSize="1xl">UPI PAyment Accepted</Text>
                </HStack>

              </Box>


              <Box>
                <HStack mb="8px">
                  <MdLocalLaundryService />
                  <Text fontSize="1xl">Laundry Services (Extra)</Text>
                </HStack>
                <HStack mb="8px">
                  <FaGlassWhiskey />
                  <Text fontSize="1xl">Water Dispenser</Text>
                </HStack>
                <HStack mb="8px">
                  <BiArea />
                  <Text fontSize="1xl">Common Hangout Area</Text>
                </HStack>
                <HStack mb="8px">
                  <BsFillLampFill />
                  <Text fontSize="1xl">Bedside Lamp</Text>
                </HStack>
                <HStack mb="8px">
                  <MdRestoreFromTrash />
                  <Text fontSize="1xl">Storage Facilities</Text>
                </HStack>
                <HStack mb="8px">
                  <MdShower />
                  <Text fontSize="1xl">Shower</Text>
                </HStack>
              </Box>
            </Flex>

          </Box>
        </Flex>

      </Box>
      {/* Cart Section */}
      <CartCom />
      {/* Location Section */}
      <LocationCom />
    </div>
  )
}

