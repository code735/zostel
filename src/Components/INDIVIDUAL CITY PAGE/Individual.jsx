import React from 'react'
import { useEffect, useState } from 'react'
import { json, NavLink, useParams } from 'react-router-dom'
import prop from "./indivdual.module.css"
import parse from 'html-react-parser';
import Navbar from '../../Router/Navbar';
import PreLoader from "../PreLoader";


import { Box, Badge, SimpleGrid, Container, Image, Link, Text, Button, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center } from '@chakra-ui/react';
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
  const[show,setshow] = useState(false)


 
  let City= useParams();
  let city = City.city
  
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
      {data == undefined ?  <Center h={"100vh"}>
    {/* //preloader */}
    <PreLoader/>
    </Center> :
        <div>

          {/* screen display div */}

          <div style={{
            backgroundImage: `url(${data.images[0].image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            position: "relative"
          }}>
            {/* <Navbar/> */}
            <img src="" alt="" />
            <h2 style={{
              textAlign: "center", margin: "0", padding: "0", position: "absolute", top: "50%", left: "50%",
              transform: 'translateX(-50%)', color: "white", fontSize: "3em", fontWeight: "bold"
            }}>{data.name}</h2>
          </div>

          {/* side images or middle div start here */}


          <div style={{ display: "flex" }}>

            {/* left image div */}

            <div style={{ backgroundImage: `url(${data.graphic_left})`, backgroundPosition: 'center', backgroundRepeat: 'repeat', width: "5%", opacity: "0.2" }} ></div>


            <div style={{ width: "90%", position: "relative" }}>
              <Box mt={"3%"}>
                <Breadcrumb separator="->" mb={"5"}>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="/destination">Destinations</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">{data.name}</BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>

              </Box>
              <div style={show?{justifyContent:"center", height: "auto"}:{ overflow:"hidden",  height: "15em"}}>

              <h1 style={{ textAlign: "center", fontSize: "2.2em", fontWeight: "bold", marginTop: "2%" }}>Welcome to</h1>
              <h1 style={{ textAlign: "center", fontSize: "2.8em", color: "#FF6347", fontWeight: "bold" }}>{data.name}</h1>
              <p style={{ textAlign: "center", margin: "0 15%" }}> {parse(data.description)}</p>
            

              </div>
              

              <button style={{color:"tomato",position:"absolute",transform: "translateX(-50%)",left:"50%"}} onClick={()=>setshow(!show)}>{show?"show less":"show More"}</button>
            


              <h1 style={{ textAlign: "center", margin: "2% 15%", fontSize: "2.2em", fontWeight: "bold",marginBottom:"2%",marginTop:"35px" }}>Stays At <span style={{ color: "tomato", fontSize: "1.3em" }}>{data.name}</span> </h1>
              {data.operators.map((ele) => {
                
                 let price = Math.random() * (999 - 449) + 449;
                 price=price.toFixed(0)
                
                 console.log(price)

                return (

                  <div className={prop.containers}>
                    <div className={prop.left} >
                      <img src={ele.images[0].image} style={{ width: "100%", height: "430px", borderRadius: "8px" }} alt="gdfgd" />

                    </div>
                    <div className={prop.right}>
                      <div>

                        <h2 style={{ color: "grey", fontWeight: "bold", fontSize: "1.26em" }}>Zostal</h2>
                        <h1 style={{ fontWeight: "bold", fontSize: "2em",color:"black" }}>{ele.name}</h1>
                        <p style={{ fontWeight: "bold", color: `#4D585B`, marginTop: "2%" }}>{ele.short_description}</p>
                        <div style={{ display: "flex", textAlign: "right", marginTop: "10%" }}>

                          <p style={{ textAlign: "left", fontWeight: "bold" , color:"black" }}>Starting from  <span style={{color:"tomato",fontSize:"1.1em"}}>&#8377;{price}</span></p> <Button _hover={{ bg: "white", color: "tomato" }} ml={"40%"} color="white" bg="tomato"><NavLink to="/zostel" style={{ textDecoration: "none" }}>View &nbsp;&#8594;</NavLink>&nbsp;</Button>
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


          <div style={{ backgroundColor: "#E8F0F2", padding: "1%" }}>
            <h1 style={{ textAlign: "center", fontSize: "2.4em",color:"black",fontWeight:"bold" }}>Latest Road </h1>

            <Container maxWidth="100%" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
              <SimpleGrid columns={{ sm: "1", md: "2", lg: "5", xl: "5" }} spacing="15px">
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
                        <Image src={blog.custom_cover} alt="Blog image" />
                        <Box p={{ base: 4, lg: 4 }}>
                          <Box d="flex" alignItems="baseline">
                            <Box
                              fontWeight="semibold"
                              as="h1"
                              color={"black"}

                              textTransform="uppercase"
                              ml="2"
                            >
                              {blog.title}
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
