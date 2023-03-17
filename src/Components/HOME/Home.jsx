import React from 'react'
import { NavLink } from 'react-router-dom'
import Slideshow from '../Slidershow'
import { Text, Tabs, TabPanels, TabList, Tab, TabPanel, Box, Stack, Button } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import './Home.css'

export default function Home() {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div style={{
      position: "relative"
    }}>
      <Slideshow />
      <Box style={{
        position: "absolute",
        top: "-12%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}>
        <Text as='h1' fontWeight='bold' textShadow='0px 0px 10px grey' color='white' fontSize={{ sm: '2rem', md: '4rem' }} mb='2.5rem'>Live it. Now</Text>
        <Box style={{
          borderRadius: "5px",
          background: colorMode === "light" ? "white" : "#1A202C",
          color: colorMode === "light" ? "black" : "white"
        }}>

          <Tabs>
            <TabList style={{ justifyContent: "space-between" }} className='tablist' font>
              <Tab isSelected={selectedTab === 0} onClick={() => setSelectedTab(0)}>
                <Text fontWeight={selectedTab === 0 ? 'bold' : 'normal'} color={colorMode == 'light' ? 'black' : 'white'}>
                  Destinations
                </Text>
              </Tab>
              <Tab isSelected={selectedTab === 1} onClick={() => setSelectedTab(1)}>
                <Text fontWeight={selectedTab === 1 ? 'bold' : 'normal'} color={colorMode == 'light' ? 'black' : 'white'}>
                  Zostel
                </Text>
              </Tab>
              <Tab isSelected={selectedTab === 2} onClick={() => setSelectedTab(2)}>
                <Text fontWeight={selectedTab === 2 ? 'bold' : 'normal'} color={colorMode == 'light' ? 'black' : 'white'}>
                  Zostel Homes
                </Text>
              </Tab>
              <Tab isSelected={selectedTab === 3} onClick={() => setSelectedTab(3)}>
                <Text fontWeight={selectedTab === 3 ? 'bold' : 'normal'} color={colorMode == 'light' ? 'black' : 'white'}>
                  Zostel Plus
                </Text>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box className='tab-box'>
                  <Stack direction={{ base: "column", md: "row" }} color="#B5C0C4" fontWeight='600' fontSize={{ sm: '.8rem' }}>
                    <Text>
                      SELECT YOUR DESTINATION
                    </Text>
                    <Text>
                      CHECK IN
                    </Text>
                    <Text>
                      CHECK OUT
                    </Text>
                  </Stack>
                  <NavLink to='/individual'>
                    <Button bg='#F15824' color='white'>
                      Book Now
                    </Button>
                  </NavLink>
                </Box>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </div >
  )
}
