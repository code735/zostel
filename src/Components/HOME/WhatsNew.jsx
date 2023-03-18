import React from 'react'
import data from './HomePageAllData.json'
import { Grid, GridItem, Card, CardBody, Text, Image, Stack, Heading, CardFooter, Button } from '@chakra-ui/react'

export default function WhatsNew() {

    return (
        <div>
            <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }} gap={6}>
                {
                    data.whatsnew.map((el, i) => {
                        return <GridItem key={i}>
                            <Card maxW='sm'>
                                <CardBody p='0'>
                                    <Image
                                        src={el.img}
                                        alt='Green double couch with wooden legs'
                                        height='200px'
                                        objectFit='cover'
                                        borderRadius='lg'
                                    />
                                    <Stack my='6' spacing='3' p='10px' height='168px'>
                                        <Heading size='md'>{el.title}</Heading>
                                        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 4 }}>
                                            <Text>
                                                {el.desc}
                                            </Text>
                                        </div>
                                    </Stack>
                                </CardBody>
                                <CardFooter>
                                    <Button w='100%' colorScheme='orange'>
                                        Book now
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