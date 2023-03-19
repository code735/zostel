import { Box, Stack, HStack, VStack, Heading, Text, Input, Flex, Image } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Select } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { BsFillPersonFill } from "react-icons/bs"
import { RxCross2 } from "react-icons/rx"
import { MdShower, MdRestoreFromTrash, MdOutlineLocalParking, MdOutlineBathtub, MdOtherHouses, MdLocalLaundryService } from "react-icons/md"
import { GiAtSea } from "react-icons/gi"
import { FaGlassWhiskey } from "react-icons/fa"
import { BsFillKeyFill, BsWifi, BsFan, BsFillLampFill, BsFillCreditCardFill, BsReception3, BsQrCodeScan } from "react-icons/bs"
import { GrCafeteria } from "react-icons/gr"
import { IoMdCafe, IoMdBed } from "react-icons/io"

import { Card, CardHeader, CardBody, CardFooter, Button, chakra, } from '@chakra-ui/react'
const CartCom = () => {
  const carddata = [{
    pic: "https://img.cdn.zostel.com/zostel/gallery/images/LEZzomqOSqaKSwTTUro54Q/zostel-alleppey-20221008133126.jpg?w=1280",
    title: "4 Bed Mixed Dorm (Ensuite)",
    price: 756,
    des: "A bed in a mixed dormitory with private lockers, AC, and a shared washroom outside"
  },
  {
    pic: "https://img.cdn.zostel.com/zostel/gallery/images/LEZzomqOSqaKSwTTUro54Q/zostel-alleppey-20221008133126.jpg?w=1280",
    title: "6 Bed Mixed Dorm (with shared washroom)",
    price: 896,
    des: "A bed in a mixed dormitory with private lockers, AC, and a shared washroom outside."
  }]
  return (
    <Box bg="rgb(232,240,242)" w="100vw" >
      <Box w="80%" m="auto" >
        <Flex>
          <Box  >
            <Flex justifyContent="space-evenly">
              <VStack mt="30px" mr="80px">
                <Heading fontSize="2xl" ml="-100px" >Book Your Stay</Heading>
                <Text>Select from a range of beautiful rooms</Text>
              </VStack>
              <Box>
                <Select fontSize="1xl" w="75px" mt="30px" mr="20px" color="coral" borderColor="coral" size="sm" textDecoration="none" border="none" borderRadius="5px">
                  <option value='option1'>INR - Indian Rupee</option>
                  <option value='option2'>EURO - Euro</option>
                  <option value='option3'>USD - United State Dolar</option>
                  <option value='option3'>GBP - British Pound Sterling</option>
                  <option value='option3'>AED - nited Arab Emirates Dirham</option>
                </Select>
              </Box>
              <Box ml="10px" mr="10px">
                <HStack mt="30px">
                  <Input type="date" w="150px" ml="30px" size="sm" border="none" borderBottom="1px solid black" textDecoration="none" />
                  <ArrowForwardIcon />
                  <Input type="date" w="150px" ml="30px" size="sm" border="none" borderBottom="1px solid black" textDecoration="none" />
                </HStack>
              </Box>
            </Flex>

            <Box >
              {/* <Flex>
                    <Image src="https://lh3.googleusercontent.com/oDYySe2BxHQJZ5D05NE8KnyNmzEOR9v-uobeVZDW-UZHve506SIDxiLS1gw8fClI0yxdbXoJUFHsi_bneW71eZbL0_eDByKrIHOMubo" h="200px" w="250px" alt="error"/>
                     <HStack>
                        <VStack>
                      <HStack >
                      <Heading fontSize="2xl">6 Bed Mixed Dorm</Heading>
                      <Text mr="150px"><span fontSize="2xl">$6.66</span>/night</Text>
                      </HStack>
                        <HStack>
                        <BsFillPersonFill/>  
                        <RxCross2/>
                        <Text>1</Text>
                        </HStack>
                       </VStack>
                     </HStack>
                    
                    </Flex>  */}
              

                {carddata.map((ele) => {
                  

                  return  <div style={{marginBottom:"10px"}}><Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                  >
                    <Image
                      objectFit='cover'
                      maxW={{ base: '100%', sm: '200px' }}
                      src={ele.pic}
                      alt='Caffe Latte'
                      />

                    <Stack >
                      <CardBody>
                        <Flex justify="space-between">
                          <chakra.h3 fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
                            {ele.title}
                          </chakra.h3>
                          <chakra.h3 fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
                            {ele.price}/night
                          </chakra.h3>
                        </Flex>

                        <Flex>


                          <BsFillPersonFill />
                          <RxCross2 />

                          <Text>1</Text>
                        </Flex>


                        <Text py='2'>
                          {ele.des}
                        </Text>
                        <Flex gap={1}>
                          <MdShower /> <MdRestoreFromTrash /> <MdOutlineLocalParking /> <MdOutlineBathtub /> <MdOtherHouses /> <MdLocalLaundryService />  <GiAtSea /> <FaGlassWhiskey />
                          <BsFillKeyFill /> <BsWifi /> <BsFan /> <BsFillLampFill /> <BsFillCreditCardFill /> <BsReception3 /> <BsQrCodeScan />  <GrCafeteria /> <IoMdCafe /> <IoMdBed />
                        </Flex>
                      </CardBody>


                      <Flex >
                        <Box>
                          <Select fontSize="1xl" mt="10px"  mb="10px"  mr="20px" color="coral" borderColor="coral" size="sm" textDecoration="none" border="none" borderRadius="5px">
                            <option value='option1'>Rooms Available</option>

                          </Select>
                        </Box>


                        <Button variant='solid' colorScheme='orange' _hover={{ bg: "white", color: "tomato" }} ml={"40%"} color="white" bg="tomato">
                          Book Now
                        </Button>
                      </Flex>

                    </Stack>
                  </Card>
                </div>
                })}
              
            </Box>
          </Box>
          <Box border="1px solid red" ml={"2%"} >
            <VStack >
              <Heading mt="30px" fontSize="2xl" ml="-150px">Summary</Heading>
              <Text ml="5%" >1 night starting from Sat 18 Mar,2023</Text>
            </VStack>
            <HStack>
              <VStack>
                <Image src="https://book.zostel.com/static/media/gray-zobu.018014d9.svg" />
                < Text color="rgb(150,164,169)">No room selected</Text>
              </VStack>

            </HStack>

          </Box>
        </Flex>
      </Box>
    </Box>

  )
}
export default CartCom;