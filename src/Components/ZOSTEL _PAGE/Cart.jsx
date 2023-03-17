import { Box, Heading, Text, Flex,Spinner, Menu, MenuButton, MenuList, Button } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Select } from '@chakra-ui/react'


const CartCom = () => {
    return (
        <Box bg="#e8f0f2" w="100%" h="1600px" mt="50px">
            <Box w="80%" h="200px" border="1px solid Black" margin="20px auto" >
                <Flex gap="80px">
                    <Box>
                        <Heading color="black" mt="30px" mb="5px">Book your stay</Heading>
                        <Text color="#4d585b">Select from a range of beautiful rooms</Text>
                    </Box>
                  
                    <Select placeholder='INR' color="#f15824" mt="35px" w="100px">
                         <option value='option1'>GER</option>
                        <option value='option2'>EURO</option>
                        <option value='option3'>USD</option>
                    </Select>
                    
                </Flex>
            </Box>
        </Box>
    )
}
export default CartCom;