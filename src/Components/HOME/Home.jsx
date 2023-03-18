import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Slideshow from '../Slidershow'
import {
  Text,
  Tabs,
  TabPanels,
  TabList,
  Tab,
  TabPanel,
  Box,
  Stack,
  Button,
  Input,
  Flex,
  HStack,
  VStack,
  Image
} from '@chakra-ui/react'
import { MdArrowRightAlt } from 'react-icons/md'
import { useColorMode } from '@chakra-ui/react'
import './Home.css'
import ExploreDest from './ExploreDest'
import PreLoader from '../PreLoader'
import WhatsNew from './WhatsNew'
import ZostelXp from './ZostelXp'
import PlayList from './PlayList'

export default function Home() {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const { colorMode, toggleColorMode } = useColorMode();
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.addEventListener('load', () => {
      setLoading(false);
    });
  }, [])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const [city, setCity] = useState("")
  const navigate = useNavigate()

  const inputcity = (e) => {
    setCity(e.target.value)
    console.log("e: ", e);
  }

  const citysubmit = (e) => {
    e.preventDefault()
    navigate(`/destination/${city}`)
  }

  return (
    <>{loading ? <PreLoader /> : <div>
      <div style={{
        position: "relative"
      }}>
        <Slideshow />
        <Box
          pt={{ sm: "30px", md: "0" }}
          style={{
            position: "absolute",
            top: "-12%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            flexDirection: "column",
          }}>
          <Text as='h1' fontWeight='bold' textShadow='0px 0px 10px grey' color='white' fontSize={{ sm: '2rem', md: '4rem' }} mb={{ sm: "1rem", md: '2.5rem' }}>Live it. Now</Text>
          <Box
            className='main-tab-box'
            style={{
              borderRadius: "5px",
              background: colorMode === "light" ? "white" : "#1A202C",
              color: colorMode === "light" ? "black" : "white"
            }}>

            <Tabs p={{ sm: "10px", md: "10px 30px" }}>
              <TabList style={{ justifyContent: "space-between" }} className='tablist'>
                <Tab isSelected={selectedTab === 0} onClick={() => setSelectedTab(0)} px={{ sm: '10px', md: '20px' }}>
                  <Text fontWeight={selectedTab === 0 ? 'bold' : '600'} color={colorMode == 'light' ? '#545f71' : 'white'} fontSize={{ sm: ".7rem", md: "1rem" }}>
                    Destinations
                  </Text>
                </Tab>
                <Tab isSelected={selectedTab === 1} onClick={() => setSelectedTab(1)}>
                  <Text fontWeight={selectedTab === 1 ? 'bold' : '600'} color={colorMode == 'light' ? '#545f71' : 'white'} fontSize={{ sm: ".7rem", md: "1rem" }}>
                    Zostel
                  </Text>
                </Tab>
                <Tab isSelected={selectedTab === 2} onClick={() => setSelectedTab(2)} display={{ sm: "none", lg: "block" }}>
                  <Text fontWeight={selectedTab === 2 ? 'bold' : '600'} color={colorMode == 'light' ? '#545f71' : 'white'} fontSize={{ sm: ".7rem", md: "1rem" }}>
                    Zostel Homes
                  </Text>
                </Tab>
                <Tab isSelected={selectedTab === 3} onClick={() => setSelectedTab(3)}>
                  <Text fontWeight={selectedTab === 3 ? 'bold' : '600'} color={colorMode == 'light' ? '#545f71' : 'white'} fontSize={{ sm: ".7rem", md: "1rem" }}>
                    Zostel Plus
                  </Text>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel px={{ sm: "0" }} >
                  <Box className='tab-box'>
                    <Flex alignItems={{ sm: "center", md: "flex-end" }} flexDir={{ sm: "column", md: "row" }} justifyContent={{ sm: "center", md: "space-between" }}>
                      <Stack direction={{ base: "column", lg: "row" }} mt={{ sm: "1rem" }} w={{ xl: "66%" }} justifyContent={{ xl: "space-between" }} color="#B5C0C4" fontWeight='600' fontSize={{ sm: '.8rem' }}>
                        <Box textAlign='center'>
                          <Text>
                            SELECT YOUR DESTINATION
                          </Text>
                          <Input className='dest-ip' onChange={inputcity} border='none' pb={{ sm: "1rem" }} w={{ sm: "100%", lg: "260px" }} mt={{ sm: "1rem" }} borderBottom='1px solid #96A4A9' borderRadius='0' color={colorMode === 'light' ? "black" : "white"} placeholder='eg. Manali, Jodhpur, Jaipur, etc.' />
                        </Box>
                        <HStack borderBottom='1px solid #96A4A9'>
                          <VStack className='date-box'>
                            <Text>
                              CHECK IN
                            </Text>
                            <Input type='date' border='none' outline='none' p={{ sm: "0" }} mt={{ sm: '0!important' }} />
                          </VStack>
                          <Box fontSize={{ sm: "1.5rem" }}>
                            <MdArrowRightAlt />
                          </Box>
                          <VStack className='date-box'>
                            <Text>
                              CHECK OUT
                            </Text>
                            <Input type='date' border='none' outline='none' p={{ sm: "0" }} mt={{ sm: '0!important' }} />
                          </VStack>
                        </HStack>
                      </Stack>
                      <NavLink to='/destination/${city}'>
                        <Button bg='#F15824' color='white' py='1.3rem' m={{ sm: "10px", lg: "0" }} px={{ sm: "6rem" }} onClick={citysubmit}>
                          Book Now
                        </Button>
                      </NavLink>
                    </Flex>
                  </Box>
                </TabPanel>
                <TabPanel px={{ sm: "0" }} >
                  <Box className='tab-box'>
                    <Flex alignItems={{ sm: "center", md: "flex-end" }} flexDir={{ sm: "column", md: "row" }} justifyContent={{ sm: "center", md: "space-between" }}>
                      <Stack direction={{ base: "column", lg: "row" }} mt={{ sm: "1rem" }} w={{ xl: "66%" }} justifyContent={{ xl: "space-between" }} color="#B5C0C4" fontWeight='600' fontSize={{ sm: '.8rem' }}>
                        <Box textAlign='center'>
                          <Text>
                            SELECT YOUR ZOSTEL
                          </Text>
                          <Input className='dest-ip' border='none' pb={{ sm: "1rem" }} w={{ sm: "100%", lg: "260px" }} mt={{ sm: "1rem" }} borderBottom='1px solid #96A4A9' borderRadius='0' placeholder='eg. Manali, Jodhpur, Jaipur, etc.' />
                        </Box>
                        <HStack borderBottom='1px solid #96A4A9'>
                          <VStack className='date-box'>
                            <Text>
                              CHECK IN
                            </Text>
                            <Input type='date' border='none' outline='none' p={{ sm: "0" }} mt={{ sm: '0!important' }} />
                          </VStack>
                          <Box fontSize={{ sm: "1.5rem" }}>
                            <MdArrowRightAlt />
                          </Box>
                          <VStack className='date-box'>
                            <Text>
                              CHECK OUT
                            </Text>
                            <Input type='date' border='none' outline='none' p={{ sm: "0" }} mt={{ sm: '0!important' }} />
                          </VStack>
                        </HStack>
                      </Stack>
                      <NavLink to='/individual'>
                        <Button bg='#F15824' color='white' py='1.3rem' m={{ sm: "10px", lg: "0" }} px={{ sm: "6rem" }}>
                          Book Now
                        </Button>
                      </NavLink>
                    </Flex>
                  </Box>
                </TabPanel>
                <TabPanel px={{ sm: "0" }} >
                  <Box className='tab-box'>
                    <Flex alignItems={{ sm: "center", md: "flex-end" }} flexDir={{ sm: "column", md: "row" }} justifyContent={{ sm: "center", md: "space-between" }}>
                      <Stack direction={{ base: "column", lg: "row" }} mt={{ sm: "1rem" }} w={{ xl: "66%" }} justifyContent={{ xl: "space-between" }} color="#B5C0C4" fontWeight='600' fontSize={{ sm: '.8rem' }}>
                        <Box textAlign='center'>
                          <Text>
                            SELECT YOUR ZOSTEL HOMES
                          </Text>
                          <Input className='dest-ip' border='none' pb={{ sm: "1rem" }} w={{ sm: "100%", lg: "260px" }} mt={{ sm: "1rem" }} borderBottom='1px solid #96A4A9' borderRadius='0' placeholder='eg. Manali, Jodhpur, Jaipur, etc.' />
                        </Box>
                        <HStack borderBottom='1px solid #96A4A9'>
                          <VStack className='date-box'>
                            <Text>
                              CHECK IN
                            </Text>
                            <Input type='date' border='none' outline='none' p={{ sm: "0" }} mt={{ sm: '0!important' }} />
                          </VStack>
                          <Box fontSize={{ sm: "1.5rem" }}>
                            <MdArrowRightAlt />
                          </Box>
                          <VStack className='date-box'>
                            <Text>
                              CHECK OUT
                            </Text>
                            <Input type='date' border='none' outline='none' p={{ sm: "0" }} mt={{ sm: '0!important' }} />
                          </VStack>
                        </HStack>
                      </Stack>
                      <NavLink to='/individual'>
                        <Button bg='#F15824' color='white' py='1.3rem' m={{ sm: "10px", lg: "0" }} px={{ sm: "6rem" }}>
                          Book Now
                        </Button>
                      </NavLink>
                    </Flex>
                  </Box>
                </TabPanel>
                <TabPanel px={{ sm: "0" }} >
                  <Box className='tab-box'>
                    <Flex alignItems={{ sm: "center", md: "flex-end" }} flexDir={{ sm: "column", md: "row" }} justifyContent={{ sm: "center", md: "space-between" }}>
                      <Stack direction={{ base: "column", lg: "row" }} mt={{ sm: "1rem" }} w={{ xl: "66%" }} justifyContent={{ xl: "space-between" }} color="#B5C0C4" fontWeight='600' fontSize={{ sm: '.8rem' }}>
                        <Box textAlign='center'>
                          <Text>
                            SELECT YOUR ZOSTEL PLUS
                          </Text>
                          <Input className='dest-ip' border='none' pb={{ sm: "1rem" }} w={{ sm: "100%", lg: "260px" }} mt={{ sm: "1rem" }} borderBottom='1px solid #96A4A9' borderRadius='0' placeholder='eg. Manali, Jodhpur, Jaipur, etc.' />
                        </Box>
                        <HStack borderBottom='1px solid #96A4A9'>
                          <VStack className='date-box'>
                            <Text>
                              CHECK IN
                            </Text>
                            <Input type='date' border='none' outline='none' p={{ sm: "0" }} mt={{ sm: '0!important' }} />
                          </VStack>
                          <Box fontSize={{ sm: "1.5rem" }}>
                            <MdArrowRightAlt />
                          </Box>
                          <VStack className='date-box'>
                            <Text>
                              CHECK OUT
                            </Text>
                            <Input type='date' border='none' outline='none' p={{ sm: "0" }} mt={{ sm: '0!important' }} />
                          </VStack>
                        </HStack>
                      </Stack>
                      <NavLink to='/individual'>
                        <Button bg='#F15824' color='white' py='1.3rem' m={{ sm: "10px", lg: "0" }} px={{ sm: "6rem" }}>
                          Book Now
                        </Button>
                      </NavLink>
                    </Flex>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </div >
      <div>
        <ExploreDest />
      </div>

      {/* Whats new Section */}
      <Box className='whatsnew' p={{ sm: "1rem", md: "3rem" }}>
        <Box>
          <HStack fontSize={{ sm: '30', md: "32", lg: '32', xl: "32" }} my={{ sm: "1rem", md: "0" }} mb={{ md: "3rem" }} justifyContent={{ sm: "center", md: "start" }} fontWeight={"bold"}>
            <Text as={"h1"}>What's</Text>
            <Text as={"strong"} color={"#F15824"}>
              New
            </Text>
          </HStack>
        </Box>
        <WhatsNew />
      </Box>

      {/* Zostel House Baner */}
      <Box display={{ sm: "none", lg: "block" }}>
        <Image src='https://zo-media.s3.ap-south-1.amazonaws.com/branding/zo-world-banner.png' />
      </Box>

      {/* Zostel Experiences */}
      <Box p={{ sm: "1rem", md: "3rem" }}>
        <HStack fontSize={{ sm: '30', md: "32", lg: '32', xl: "32" }} my={{ sm: "1rem", md: "0" }} mb={{ md: "3rem" }} justifyContent={{ sm: "center", md: "start" }} fontWeight={"bold"}>
          <Text as={"h1"}>Zostel</Text>
          <Text as={"strong"} color={"#F15824"}>
            Experiences
          </Text>
        </HStack>
        <ZostelXp />
      </Box>

      {/* Playlist */}
      <Box p={{ sm: "1rem", md: "3rem" }}>
        <PlayList />
      </Box>

    </div>}</>
  )
}
