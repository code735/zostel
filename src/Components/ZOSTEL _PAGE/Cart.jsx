import {
  Box,
  Stack,
  HStack,
  VStack,
  Heading,
  Text,
  Input,
  Flex,
  Image,
  Option,
  Center,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Select, Spacer } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { BsFillPersonFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
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
import { useEffect, useState } from "react";
import { RiNumber1 } from "react-icons/ri";
import parse from "html-react-parser";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  chakra,
  Divider,
  Checkbox,
} from "@chakra-ui/react";
import PreLoader from "../PreLoader";
import { NavLink, useParams } from "react-router-dom";
const CartCom = () => {
  const [carddata, setcard] = useState();
  const [cart, setcart] = useState([]);

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
        setcard(d.data);
      });
  };

  const [totalprice, setTotalprice] = useState(0);

  useEffect(() => {
    Getdata();
  }, []);
  const handledata = (e, ele) => {
    console.log("ele: ", ele);
    console.log("cart", cart);
    if (cart.length > 0) {
      let arr = cart.filter((elem, i) => {
        return elem.id != ele.id;
      });
      arr.push({ ...ele, quantity_rooms: Number(e.target.value) });
      let x = arr.reduce((e1, e2) => {
        return e1 + e2.price * e2.quantity_rooms;
      }, 0);
      setTotalprice(x);
      setcart(arr);
    } else {
      setTotalprice(ele.price * Number(e.target.value));
      setcart([...cart, { ...ele, quantity_rooms: Number(e.target.value) }]);
    }
  };
  console.log(cart);

  return (
    <>
      {carddata == undefined ? (
        <PreLoader />
      ) : (
        <Box width="100%" bg="#E8F0F2" pt="50" pb="50">
          <Stack direction="row" m="auto" width="80%">
            <VStack width="70%">
              <HStack w={"100%"}>
                <VStack mb="5">
                  <Text as={"h3"} fontSize="40px" fontWeight="700">
                    Book your stay
                  </Text>
                  <Text fontSize="16px" fontWeight="500" color="#4D585B">
                    Select from a range of beautiful rooms
                  </Text>
                </VStack>
                <Spacer />
                <HStack w={"450px"}>
                  <Select placeholder="INR" fontSize="sm" bg="white">
                    <option value="INR">INR</option>
                    <option value="EURO">EURO</option>
                    <option value="DOLLAR">DOLLAR</option>
                  </Select>
                  <HStack
                    borderRadius="10"
                    bg="white"
                    boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  >
                    <Input type="date" border="none" />
                    <ArrowForwardIcon />
                    <Input type="date" border="none" />
                  </HStack>
                </HStack>
              </HStack>
              <Box width="100%">
                {carddata.rooms.map((ele) => {
                  return (
                    <div style={{ marginBottom: "10px" }}>
                      <Card
                        bg={"#FAFEFF"}
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                        borderRadius={"12px"}
                      >
                        <Image
                          objectFit="cover"
                          maxW={{ base: "100%", sm: "200px" }}
                          src={ele.images[0].image}
                          alt="Caffe Latte"
                        />

                        <Stack>
                          <CardBody w={"600px"} p="5">
                            <HStack>
                              <chakra.h3
                                fontSize={{ base: "lg", md: "xl" }}
                                fontWeight="bold"
                              >
                                {ele.name}
                              </chakra.h3>
                              <Spacer />
                              <chakra.h3
                                fontSize={{ base: "lg", md: "xl" }}
                                fontWeight="bold"
                              >
                                ₹{ele.price}/night
                              </chakra.h3>
                            </HStack>

                            <Flex mt={"10px"}>
                              <BsFillPersonFill />
                              <RxCross2 />

                              <RiNumber1 />
                            </Flex>

                            <Text py="2">{parse(ele.description)}</Text>
                            <Flex gap={2}>
                              <MdShower /> <MdRestoreFromTrash />{" "}
                              <MdOutlineLocalParking /> <MdOutlineBathtub />{" "}
                              <GiAtSea /> <FaGlassWhiskey />
                              <BsFillKeyFill /> <BsWifi /> <BsFan />{" "}
                              <BsFillLampFill /> <BsFillCreditCardFill />{" "}
                              <BsReception3 /> <BsQrCodeScan /> <GrCafeteria />{" "}
                              <IoMdCafe /> <IoMdBed />
                            </Flex>
                          </CardBody>

                          <HStack>
                            <Box>
                              <Select
                                fontSize="1xl"
                                mt="10px"
                                mb="10px"
                                mr="20px"
                                color="coral"
                                borderColor="coral"
                                size="sm"
                                textDecoration="none"
                                border="none"
                                borderRadius="5px"
                              >
                                <option value="option1">Rooms Available</option>
                              </Select>
                            </Box>
                            <Spacer />

                            <Box pr="15px">
                              <Select
                                borderColor="coral"
                                size="sm"
                                textDecoration="none"
                                border="none"
                                borderRadius="5px"
                                fontSize="1xl"
                                color="white"
                                bg={"tomato"}
                                onChange={(e) => {
                                  handledata(e, ele);
                                }}
                              >
                                <option
                                  value="option1"
                                  style={{
                                    backgroundColor: "#E8F0F2",
                                    borderRadius: "none",
                                    color: "black",
                                  }}
                                >
                                  Select Room
                                </option>
                                <option
                                  value="1"
                                  style={{
                                    backgroundColor: "#E8F0F2",
                                    borderRadius: "none",
                                    color: "black",
                                  }}
                                >
                                  1
                                </option>
                                <option
                                  value="2"
                                  style={{
                                    backgroundColor: "#E8F0F2",
                                    borderRadius: "none",
                                    color: "black",
                                  }}
                                >
                                  2
                                </option>
                                <option
                                  value="3"
                                  style={{
                                    backgroundColor: "#E8F0F2",
                                    borderRadius: "none",
                                    color: "black",
                                  }}
                                >
                                  3
                                </option>
                              </Select>
                            </Box>
                          </HStack>
                        </Stack>
                      </Card>
                    </div>
                  );
                })}
              </Box>
            </VStack>
            <Spacer />
            <Box
              borderRadius={"10"}
              width={{
                sm: "100%",
                md: "100%",
                lg: "35%",
                xl: "35%",
              }}
              // border={useColorModeValue("1px solid #E8F0F2", "1px solid #3F444E")}
              padding={"3"}
            >
              <Text as={"h3"} fontSize={"24"} fontWeight={"700"}>
                Summary
              </Text>
              <Text fontSize={"14"} fontWeight={"700"}>
                1 night <span style={{ color: "gray" }}>starting from</span> Mon
                27 Mar, 2023
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
                    <Button
                      isDisabled={false}
                      width={"100%"}
                      colorScheme={"orange"}
                    >
                      <NavLink to="/payment">Payment</NavLink>
                    </Button>
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
      )}
    </>
  );
};
export default CartCom;
