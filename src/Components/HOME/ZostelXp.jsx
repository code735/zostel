import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Grid, GridItem } from '@chakra-ui/react';
import { MdLockClock } from 'react-icons/md';
import data from './HomePageAllData.json'

export default function ZostelXp() {
    return (
        <div>
            <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }} gap={6}>
                {
                    data.experiences.map((el, i) => {
                        return <GridItem key={i}>
                            <Card maxW='sm'>
                                <CardBody p='0'>
                                    <Image
                                        src={el.image_url}
                                        alt='Green double couch with wooden legs'
                                        objectFit='cover'
                                        borderRadius='lg'
                                        height='150px'
                                    />
                                    <Stack spacing='3' p='10px'>
                                        <Heading size='md' height='100px'>{el.name}</Heading>
                                        <Text>{el.destination}</Text>
                                        <Text>{el.price}</Text>
                                        <Text display="flex" alignItems='center' gap='10px'><MdLockClock /> {el.duration}</Text>
                                        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 4 }}>
                                        </div>
                                    </Stack>
                                </CardBody>
                                <CardFooter>
                                    <Button w='100%' colorScheme='orange'>
                                        Explore Now
                                    </Button>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    })
                }
            </Grid>
        </div>
    )
}
