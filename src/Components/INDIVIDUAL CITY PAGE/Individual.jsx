import React from 'react'
import { useEffect, useState } from 'react'
import { json, NavLink } from 'react-router-dom'
import prop from "./indivdual.module.css"

import { Box, Badge, SimpleGrid, Container, Image, Link, Text } from '@chakra-ui/react';
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
  const [show, setshow] = useState(false)

  const articles = [
    {
      id: 1,
      categories: ['Web Development', 'Video'],
      tag: 'RUBY ON RAILS',
      title: 'Passwordless login with Rails 7',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text...`,
      created_at: 'MARCH 30, 2022'
    }
  ]

  const dataList = [
    {
      id: 1,
      title: 'Rails ActiveAdmin',
      authorName: 'Ali',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
      id: 2,
      title: 'Rails ActiveAdmin',
      authorName: 'Ali',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    }
  ]
  
  
  let city = "aurangabad"
  let mapo = (`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`)
  const Getdata = () => {
    console.log("yha hai")
    fetch(`https://api.zostel.com/api/v1/stay/destinations/${city}/`)
    .then((res)=>res.json())
    .then((d)=>{
      setdata(d.destination)

    })
  }
  console.log(data)
  useEffect(() => {
    Getdata()

  }, [])
  return (
    <>
    {data=== undefined?"loading": 
    <div>
  
      <div style={{
        backgroundImage: `url("https://img.cdn.zostel.com/zostel/gallery/images/JvRwM3NRTYSzsz5R1Y1eKg/aurangabad-20230223105304.png")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        position:"relative"
         }}>
        <img src="" alt="" />
        <h2 style={{
          textAlign: "center", margin: "0", padding: "0", position: "absolute", top: "50%", left: "50%",
          transform: 'translateX(-50%)', color: "white", fontSize: "3em"
        }}>{  data.images[0].title}</h2>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ width: "5%" ,overflow:"hidden"}}>
          <img src="https://img.cdn.zostel.com/destination/delhi/graphic/left/Delhi_Left.svg" style={{opacity:"0.2"}} alt="" />

      
        </div>


         <div style={{ width: "90%", position: "relative" }}>
            <h1 style={{ textAlign: "center", fontSize: "1.8em" }}>Welcome to</h1>
            <h1 style={{ textAlign: "center", fontSize: "2.4em", color: "tomato" }}>Aurangabad</h1>
            <p style={{ textAlign: "center", margin: "0 15%" }}> {data.operators[0].description}</p>
          

            {show ? <div> <h1 style={{ textAlign: "center", fontSize: "1.8em" }}>Why we love aurangabad</h1>
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
              {show ? "show less" : "show more"}</button>

            <h1 style={{ textAlign: "center", margin: "2% 15%" }}>Stays At <span style={{ color: "tomato" }}>Aurangabad</span> </h1>
            <div className={prop.containers}>
              <div className={prop.left} >
                <img src="https://img.cdn.zostel.com/zostel/gallery/images/7x147f3PQmOuOrb_o1ez1A/zostel-aurangabad-20201105103524.jpg?w=1280" alt="gdfgd" style={{width:"100%",height:"450px"}} />

              </div>
              <div className={prop.right}>
                <div>

                  <h2 style={{color:"gray"}}>Zostal</h2>
                   <h1>Zostal Aurangabad</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veritatis tenetur pariatur facere vero in nam assumenda repellat autem animi, quos vitae aliquam inventore 
                      voluptatibus, perspiciatis unde numquam. Commodi, possimus?</p>
                      <div style={{display:"flex"}}>

                     <p>Starting At rs 499</p> <span><button><NavLink to ="/zostel">View Now</NavLink></button></span>
                      </div>
                </div>
              </div>

            </div>

            <div style={{margin:"4% 5%",border:" 1px solid grey",borderRadius:"8px",overflow:"hidden"}}>
                       {/* <div  style={{position:"relative",textAlign:"right",height:"400px",width:"100%",borderRadius:"8px"}}>
                           <div style={{overflow:"hidden",background:"none!important",height:"400px",width:"100%",borderRadius:"8px"}}>
                             */}
                               <iframe style={{width:"100%", height:"400px", borderRadius:"8px"}} src={mapo} >

                                 </iframe>
                            {/* </div>
                         </div> */}
           </div>

           
                                      
          </div>


          <div style={{ width: "5%" }}>
          <img src="https://img.cdn.zostel.com/destination/delhi/graphic/left/Delhi_Left.svg" style={{opacity:"0.2"}} alt="" />
          </div>
      </div>


      <div style={{backgroundColor:"lightcyan",padding:"1%"}}>
          <h1 style={{textAlign:"center",fontSize:"2.4em",}}>Latest Road in Delhi</h1>

          <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
      <SimpleGrid columns={[1, 2, 3]} spacing="15px">
        {dataList.map((blog) => {
          return (
            <Box position="relative" key={blog.id}>
              <Box fontSize="sm" position="absolute" right="5px" margin="5px" zIndex="1">
                <Badge rounded="full" p="2px 8px" colorScheme="red" as="button">
                  Delete
                </Badge>
              </Box>
              <Link to="#">
                <Box
                  borderWidth="1px"
                  shadow="md"
                  rounded="lg"
                  overflow="hidden"
                  position="relative"
                >
                  <Image src="https://bit.ly/2Z4KKcF" alt="Blog image" />
                  <Box p={{ base: 4, lg: 6 }}>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        fontWeight="semibold"
                        as="h2"
                        letterSpacing="wide"
                        textTransform="uppercase"
                        ml="2"
                      >
                        {blog.title}
                      </Box>
                    </Box>
                    <Box>
                      <Box color="gray.600" fontSize="sm">
                        <Badge rounded="full" px="2" colorScheme="teal">
                          {blog.authorName}
                        </Badge>
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
                      {blog.content}
                    </Text>
                  </Box>
                </Box>
              </Link>
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
