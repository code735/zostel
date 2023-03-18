import React from 'react'
import { HStack, Text, Box } from '@chakra-ui/react'

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
                <HStack fontSize={{ sm: '30', md: "32", lg: '32', xl: "32" }} my={{ sm: "1rem", md: "0" }} mb={{ md: "3rem" }} justifyContent={{ sm: "center", md: "start" }} fontWeight={"bold"}>
                    <Text as={"h1"}>Southern</Text>
                    <Text as={"strong"} color={"#F15824"}>
                        Playlist
                    </Text>
                </HStack>
                <HStack fontSize={{ sm: '30', md: "32", lg: '32', xl: "32" }} my={{ sm: "1rem", md: "0" }} mb={{ md: "3rem" }} justifyContent={{ sm: "center", md: "start" }} fontWeight={"bold"}>
                    <Text as={"h1"}>Weekend</Text>
                    <Text as={"strong"} color={"#F15824"}>
                        Singles
                    </Text>
                </HStack>
            </Box>
        </div>
    )
}
