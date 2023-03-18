import React from 'react'
import { HStack, Text, Card, Image, Link, SimpleGrid, Box } from '@chakra-ui/react'
import data from './HomePageAllData.json'

export default function PlayList() {
    return (
        <div>
            <Box>
                <HStack fontSize={{ sm: '30', md: "32", lg: '32', xl: "32" }} my={{ sm: "1rem", md: "0" }} mb={{ md: "3rem" }} justifyContent={{ sm: "center", md: "start" }} fontWeight={"bold"}>
                    <Text as={"h1"}>Northern</Text>
                    <Text as={"strong"} color={"#F15824"}>
                        Playlist
                    </Text>
                </HStack>
                <SimpleGrid columns={{ sm: '1', md: "2", lg: '3', xl: "5" }} placeItems={{ sm: "center" }} spacing={3}>
                    {data.northern_playlist.map((e) => {
                        return <Card w='100%' position="relative">
                            <Image
                                src={e.img}
                                alt="Green double couch with wooden legs"
                                borderRadius="lg"
                                opacity={"0.9"}
                                width={"30"}
                                h={"180"}
                                objectFit="cover"
                            />
                            <Text
                                position="absolute"
                                bottom="4"
                                left="4"
                                fontWeight="bold"
                                color="white"
                                fontSize={"2xl"}
                            >
                                {e.name}
                            </Text>
                        </Card>
                    })}
                </SimpleGrid>
            </Box>
            <Box py='30px'>
                <HStack fontSize={{ sm: '30', md: "32", lg: '32', xl: "32" }} my={{ sm: "1rem", md: "0" }} mb={{ md: "3rem" }} justifyContent={{ sm: "center", md: "start" }} fontWeight={"bold"}>
                    <Text as={"h1"}>Southern</Text>
                    <Text as={"strong"} color={"#F15824"}>
                        Playlist
                    </Text>
                </HStack>
                <SimpleGrid columns={{ sm: '1', md: "2", lg: '3', xl: "5" }} placeItems={{ sm: "center" }} spacing={3}>
                    {data.southern_playlist.map((e) => {
                        return <Card w='100%' position="relative">
                            <Image
                                src={e.img}
                                alt="Green double couch with wooden legs"
                                borderRadius="lg"
                                opacity={"0.9"}
                                width={"30"}
                                h={"180"}
                                objectFit="cover"
                            />
                            <Text
                                position="absolute"
                                bottom="4"
                                left="4"
                                fontWeight="bold"
                                color="white"
                                fontSize={"2xl"}
                            >
                                {e.name}
                            </Text>
                        </Card>
                    })}
                </SimpleGrid>
            </Box>
            <Box>
                <HStack fontSize={{ sm: '30', md: "32", lg: '32', xl: "32" }} my={{ sm: "1rem", md: "0" }} mb={{ md: "3rem" }} justifyContent={{ sm: "center", md: "start" }} fontWeight={"bold"}>
                    <Text as={"h1"}>Weekend</Text>
                    <Text as={"strong"} color={"#F15824"}>
                        Singles
                    </Text>
                </HStack>
                <SimpleGrid columns={{ sm: '1', md: "2", lg: '3', xl: "5" }} placeItems={{ sm: "center" }} spacing={3}>
                    {data.weekend_singles.map((e) => {
                        return <Card w='100%' position="relative">
                            <Image
                                src={e.img}
                                alt="Green double couch with wooden legs"
                                borderRadius="lg"
                                opacity={"0.9"}
                                width={"30"}
                                h={"180"}
                                objectFit="cover"
                            />
                            <Text
                                position="absolute"
                                bottom="4"
                                left="4"
                                fontWeight="bold"
                                color="white"
                                fontSize={"2xl"}
                            >
                                {e.name}
                            </Text>
                        </Card>
                    })}
                </SimpleGrid>
            </Box>
        </div>
    )
}
