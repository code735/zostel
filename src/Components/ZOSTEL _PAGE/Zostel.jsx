import React from "react";
import {
  Image,
  Box,
  Flex,
  Button,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import {
  BsFillKeyFill,
  BsWifi,
  BsFan,
  BsFillLampFill,
  BsFillCreditCardFill,
  BsReception3,
  BsQrCodeScan,
} from "react-icons/bs";
import { GrCafeteria } from "react-icons/gr";
import { IoMdCafe, IoMdBed } from "react-icons/io";
import {
  MdShower,
  MdRestoreFromTrash,
  MdOutlineLocalParking,
  MdOutlineBathtub,
  MdOtherHouses,
  MdLocalLaundryService,
} from "react-icons/md";
import { GiAtSea } from "react-icons/gi";
import { FaGlassWhiskey } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { ChevronRightIcon } from "@chakra-ui/icons";
import LocationCom from "./Location";
import CartCom from "./Cart";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import { useParams } from "react-router";

export default function Zostel() {
  const [slugdata, setSlugdata] = useState();
  let slug1= useParams();
  console.log("slug: ", slug1);
  let slug = slug1.slug;
  // let slug = "bir-20-birh138";
  const Getdata = () => {
    console.log("yha hai");
    fetch(
      `https://api.zostel.com/api/v1/stay/metadata/?url=https://www.zostel.com/zostel/bir/${slug}/`
    )
      .then((res) => res.json())
      .then((d) => {
        console.log("setcard: ", d.data);
        setSlugdata(d.data);
      });
  };
  useEffect(() => {
    Getdata();
  }, []);

  return (
    <>
    {slugdata == undefined?<></>:<div>
      <Box width="80%" m="20px auto">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Destination</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/destination/${slug.city}/`}>{slugdata.city}</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href={`/destination/${slug.city}/${slug.slug}`}>{slugdata.alt_name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      {/* Image Section */}
      <Box w="80%" h="fit-content" m="auto">
        <Flex gap="5px">
          <Box>
            <Image
              src={slugdata.images[0].image}
              alt="error"
              w="900px"
              h="520px"
              borderRadius="10px 0px 0px 10px"

            />
          </Box>
          <Box>
            <Image
              src={slugdata.images[1].image}
              mb="5px"
              borderRadius="0px 10px 0px 0px"
              w="300px"
              h="170px"
            />
            <Image
              src={slugdata.images[2].image}
              mb="5px"
              w="300px"
              h="170px"
            />
            <Image
              src={slugdata.images[3].image}
              w="300px"
              h="170px"
              borderRadius="0px 0px 10px 0px"
            />
            {/* <Button>View All Photo</Button> */}
          </Box>
        </Flex>

        {/* Detail Section */}
        <Flex gap="30px">
          <Box w="55%" mb="20">
            <Heading color="#f15824" mt="10px">
              {slugdata.alt_name}
            </Heading>
            <Text mt="5px">
              {parse(slugdata.description)}
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
                </HStack>
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
    </div>}
    </>
    
  );
}
