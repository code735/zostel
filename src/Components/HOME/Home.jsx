import React from 'react'
import { NavLink } from 'react-router-dom'
import Slideshow from '../Slidershow'
import { Text, Tabs, TabPanels, TabList, Tab, TabPanel } from '@chakra-ui/react'
import './Home.css'

export default function Home() {
  const [selectedTab, setSelectedTab] = React.useState(0);
  return (
    <div style={{
      position: "relative"
    }}>
      <Slideshow />
      <div style={{
        position: "absolute",
        top: "-12%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}>
        <Text as='h1' fontWeight='bold' textShadow='0px 0px 10px grey' color='white' fontSize='4rem' mb='2.5rem'>Live it. Now</Text>
        <div style={{
          background: "white",
          padding: "20px",
          paddingBottom: "30px",
          width: "75%",
          borderRadius: "5px"
        }}>

          <Tabs>
            <TabList style={{ justifyContent: "space-between" }} className='tablist'>
              <Tab isSelected={selectedTab === 0} onClick={() => setSelectedTab(0)}>
                <Text fontWeight={selectedTab === 0 ? 'bold' : 'normal'} color={selectedTab === 0 ? '#1A202C' : "#586274"}>
                  Destinations
                </Text>
              </Tab>
              <Tab isSelected={selectedTab === 1} onClick={() => setSelectedTab(1)}>
                <Text fontWeight={selectedTab === 1 ? 'bold' : 'normal'} color={selectedTab === 1 ? '#1A202C' : "#586274"}>
                  Zostel
                </Text>
              </Tab>
              <Tab isSelected={selectedTab === 2} onClick={() => setSelectedTab(2)}>
                <Text fontWeight={selectedTab === 2 ? 'bold' : 'normal'} color={selectedTab === 2 ? '#1A202C' : "#586274"}>
                  Zostel Homes
                </Text>
              </Tab>
              <Tab isSelected={selectedTab === 3} onClick={() => setSelectedTab(3)}>
                <Text fontWeight={selectedTab === 3 ? 'bold' : 'normal'} color={selectedTab === 3 ? '#1A202C' : "#586274"}>
                  Zostel Plus
                </Text>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
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

          <NavLink to='/individual' style={{
            background: "rgb(241, 88, 36)",
            color: "white",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "5px"
          }}>Book Now</NavLink>
        </div>
      </div>
    </div >
  )
}
