import React from 'react'
import { useEffect, useState } from 'react'
import { json, NavLink } from 'react-router-dom'
import prop from "./indivdual.module.css"
import parse from 'html-react-parser';

import { Box, Badge, SimpleGrid, Container, Image, Link, Text, Button, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import {
  chakra,

  HStack,
  VStack,
  Icon,
  Tag,
  useColorModeValue
} from '@chakra-ui/react';


export default function Individual() {
  const [data, setdata] = useState()
  const [dataList, setdatalist] = useState([])




  let city = "delhi"
  let mapo = (`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`)
  const Getdata = () => {
    console.log("yha hai")
    fetch(`https://api.zostel.com/api/v1/stay/destinations/${city}/`)
      .then((res) => res.json())
      .then((d) => {
        setdata(d.destination)

      })
  }
  const Getblog = () => {
    fetch(`https://www.zostel.com/api/v1/blogs/destination/${city}/`)
      .then((res) => res.json())
      .then((d) => {
        setdatalist(d.blogs)

      })
  }
  console.log(data)
  useEffect(() => {
    Getdata()
    Getblog()

  }, [])
  return (
    <>
      {data == undefined ? "loading" :
        <div>

          {/* screen display div */}

          <div style={{
            backgroundImage: `url(${data.images[0].image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh',
            position: "relative"
          }}>
            <img src="" alt="" />
            <h2 style={{
              textAlign: "center", margin: "0", padding: "0", position: "absolute", top: "50%", left: "50%",
              transform: 'translateX(-50%)', color: "white", fontSize: "3em", fontWeight: "bold"
            }}>{data.name}</h2>
          </div>
          <Box>
            <Breadcrumb separator="->" mb={"5"}>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="/destination">Destinations</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">{city}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>

          </Box>

          {/* side images or middle div start here */}


          <div style={{ display: "flex" }}>

            {/* left image div */}

            <div style={{ backgroundImage: `url(${data.graphic_left})`, backgroundPosition: 'center', backgroundRepeat: 'repeat', width: "5%", opacity: "0.2" }} ></div>


            <div style={{ width: "90%", position: "relative" }}>
              <h1 style={{ textAlign: "center", fontSize: "2.2em", fontWeight: "bold", marginTop: "2%" }}>Welcome to</h1>
              <h1 style={{ textAlign: "center", fontSize: "2.8em", color: "tomato", fontWeight: "bold" }}>{data.name}</h1>
              <p style={{ textAlign: "center", margin: "0 15%" }}> {parse(data.description)}</p>



              {/* {show ? <div> <h1 style={{ textAlign: "center", fontSize: "1.8em" }}>Why we love aurangabad</h1>
              <p style={{ textAlign: "center", margin: "0 15%" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque architecto reprehenderit sunt
                corrupti dolorem. Error consequuntur earum aut. Expedita neque maxime optio molestias
                a adipisci ipsam laudantium facere ex vitae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                ad. Dolorum neque sed modi doloribus. Voluptatum mollitia at alias corrupti fuga voluptatem, fugiat,
                laboriosam, magni sunt aspernatur quidem sapiente dolor!
              </p>

              <h1 style={{ textAlign: "center", fontSize: "1.8em" }}>Fun Facts</h1>
              <p style={{ textAlign: "center", margin: "0 15%" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui iste ad minima iusto repellat ab quia reprehenderit maxime recusan
                dae nihil, laborum veniam magnam. Dolore debitis laborum ex facere laudantium?</p>
            </div>
              : <p style={{ textAlign: "center", margin: "0 15%" }}>...</p>
            }
            <button onClick={() => setshow(!show)}
              style={{ margin: "0", padding: "0.6em", position: "absolute", left: "50%", transform: 'translateX(-50%)', background: "transparent", border: "none", color: "red", cursor: "pointer" }}>
              {show ? "show less" : "show more"}</button> */}

              <h1 style={{ textAlign: "center", margin: "2% 15%", fontSize: "2.2em", fontWeight: "bold" }}>Stays At <span style={{ color: "tomato", fontSize: "1.3em" }}>{data.name}</span> </h1>
              {data.operators.map((ele) => {
                return (

                  <div className={prop.containers}>
                    <div className={prop.left} >
                      <img src={ele.images[0].image} style={{ width: "100%", height: "430px", borderRadius: "8px" }} alt="gdfgd" />

                    </div>
                    <div className={prop.right}>
                      <div>

                        <h2 style={{ color: "grey", fontWeight: "bold", fontSize: "1.26em" }}>Zostal</h2>
                        <h1 style={{ fontWeight: "bold", fontSize: "2em" }}>{ele.name}</h1>
                        <p style={{ fontWeight: "bold", color: `rgb(105,105,105)`, marginTop: "2%" }}>{ele.short_description}</p>
                        <div style={{ display: "flex", textAlign: "right", marginTop: "10%" }}>

                          <p style={{ textAlign: "left", fontWeight: "bold" }}>Starting from &#8377; 499</p><Button style={{ textAlign: "right", marginLeft: "40%", backgroundColor: "tomato" }}><NavLink to="/zostel">View Now</NavLink>&nbsp;&#8594;</Button>
                        </div>
                      </div>
                    </div>

                  </div>
                )
              })}

              <div style={{ margin: "4% 5%", border: " 1px solid grey", borderRadius: "8px", overflow: "hidden" }}>
                {/* <div  style={{position:"relative",textAlign:"right",height:"400px",width:"100%",borderRadius:"8px"}}>
                           <div style={{overflow:"hidden",background:"none!important",height:"400px",width:"100%",borderRadius:"8px"}}>
                             */}
                <iframe style={{ width: "100%", height: "400px", borderRadius: "8px" }} src={mapo} >

                </iframe>
                {/* </div>
                         </div> */}
              </div>



            </div>


            <div style={{
              width: "5%", backgroundImage: `url(${data.graphic_right})`, opacity: "0.2", backgroundPosition: 'center',
              backgroundRepeat: 'repeat',
            }}>

            </div>
          </div>


          <div style={{ backgroundColor: "lightcyan", padding: "1%" }}>
            <h1 style={{ textAlign: "center", fontSize: "2.4em", }}>Latest Road </h1>

            <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
              <SimpleGrid columns={[1, 2, 3]} spacing="15px">
                {dataList.map((blog) => {
                  return (
                    <Box position="relative" key={blog.id}>


                      <Box
                        borderWidth="1px"
                        shadow="md"
                        rounded="lg"
                        overflow="hidden"
                        position="relative"
                      >
                        <Image src={blog.cover_image} alt="Blog image" />
                        <Box p={{ base: 4, lg: 4 }}>
                          <Box d="flex" alignItems="baseline">
                            <Box
                              fontWeight="semibold"
                              as="h1"

                              textTransform="uppercase"
                              ml="2"
                            >
                              {blog.title}
                            </Box>
                          </Box>
                          <Box>
                            <Box color="gray.600" fontSize="sm">

                            </Box>
                          </Box>
                          <Text
                            mt="1"
                            fontWeight="semibold"
                            noOfLines={3}
                            lineHeight="tight"
                            color="gray.600"
                            fontSize="sm"
                          >
                            {blog.excerpt}
                          </Text>
                        </Box>
                      </Box>

                    </Box>
                  );
                })}
              </SimpleGrid>
            </Container>


          </div>
        </div>
      }
    </>
  )
}
