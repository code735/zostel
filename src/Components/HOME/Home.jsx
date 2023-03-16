import React from 'react'
import { NavLink } from 'react-router-dom'
import Slideshow from '../Slidershow'
import { Text, Tabs, TabPanels, TabList, Tab, TabPanel } from '@chakra-ui/react'

export default function Home() {
  return (
    <div style={{
      position: "relative"
    }}>
      <Slideshow />
      <div style={{
        position: "absolute",
        top: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}>
        <Text as='h1' fontWeight='bold' textShadow='0px 0px 10px grey' color='white' fontSize='4rem' mb='5rem'>Live it. Now</Text>
        <div style={{
          background: "white",
          padding: "30px",
          width: "90%",
          borderRadius: "5px"
        }}>
          <Tabs>
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
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
