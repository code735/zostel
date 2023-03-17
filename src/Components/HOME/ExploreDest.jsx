import React from 'react'
import data from '../DESTINATION_PAGE/Explore Destinations _ Zostel.json'
import { HStack, Text } from '@chakra-ui/react'

export default function ExploreDest() {
    return (
        <div>
            <HStack fontSize={{ sm: '30', md: "32", lg: '32', xl: "32" }} fontWeight={"bold"}>
                <Text as={"h1"}>Explore</Text>
                <Text as={"strong"} color={"#F15824"}>
                    Destinations
                </Text>
            </HStack>
            {data.map((el) => {
                return
            })}
        </div>
    )
}
