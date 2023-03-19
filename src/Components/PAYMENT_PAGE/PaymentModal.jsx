import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalHeader,
    Text,
    ModalOverlay,
    ModalContent,
    Flex,
    Image,
    Button,
    ModalFooter,
    VStack,
    Box,
    Accordion,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    AccordionItem
} from "@chakra-ui/react"
import { BiShieldAlt2 } from 'react-icons/bi'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export default function PaymentModal({ onOpen, onClose, isOpen }) {
    var data = {
        "payment_methods": [
            {
                "name": "Google Pay",
                "image_url": "https://cdn.razorpay.com/app/googlepay.svg"
            },
            {
                "name": "PhonePe",
                "image_url": "https://cdn.razorpay.com/app/phonepe.svg"
            },
            {
                "name": "Paytm",
                "image_url": "https://cdn.razorpay.com/app/paytm.svg"
            },
            {
                "name": "BHIM",
                "image_url": "https://cdn.razorpay.com/app/bhim.svg"
            }
        ]
    }

    return (
        <>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent borderRadius='10' width='350px'>
                    <ModalHeader bg="#F15824" style={{ borderTopRightRadius: "10px", borderTopLeftRadius: '10px' }}>
                        <Flex alignItems='center' color='white' gap='2'>
                            <Box bg='white' borderRadius='3'>
                                <Image src="https://cdn.razorpay.com/logos/K1ZMdO01lopiw9_medium.png" w="50px" />
                            </Box>
                            <VStack alignItems='flex-start'>
                                <Text fontSize='.9rem'>ARNH184-BWQ9Q8V</Text>
                                <Flex alignItems='center' gap='3px'>
                                    <BiShieldAlt2 fontSize='.8rem' />
                                    <Text fontSize='12px' mt='0 !important'>Razorpay Trusted Business</Text>
                                    <AiOutlineInfoCircle fontSize='.7rem' />
                                </Flex>
                            </VStack>
                        </Flex>
                    </ModalHeader>
                    <ModalCloseButton color='white' />
                    <ModalBody>
                        <Text fontWeight='600'>
                            Pay With UPI QR
                        </Text>
                        <Flex border='1px solid gray' p='2' my='2' gap='10px'>
                            <Image w='110px' src='https://chart.googleapis.com/chart?chs=141x141&cht=qr&chl=upi%3A%2F%2Fpay%3Fpa%3Dzoworldlimited728.rzp%40icici%26pn%3DZoWorldLimited%26tr%3DEZV2023031911551182752996%26tn%3DZoWorldLimitedARNH184BWQ9Q8V%26am%3D739.23%26cu%3DINR%26mc%3D4722&choe=UTF-8&chld=L|0' />
                            <VStack alignItems='flex-start'>
                                <Text fontSize='.8rem'>Scan the QR using any UPI app on your phone.</Text>
                                <Flex justifyContent='space-between' w='70%'>
                                    {
                                        data.payment_methods.map((el) => {
                                            return <Image width='5' src={el.image_url} />
                                        })
                                    }
                                </Flex>
                            </VStack>
                        </Flex>
                        <VStack alignItems={'flex-start'}>
                            <Text fontWeight='600'>
                                Cards, UPI & More
                            </Text>
                            <VStack width={'100%'}>
                                <Accordion allowToggle width={'100%'}>
                                    <AccordionItem width={'100%'}>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <Text>Card</Text>
                                                    <Text fontSize='.8rem'>Visa, Mastercard, RuPay & More</Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet,
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem width={'100%'}>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <Text>UPI / QR</Text>
                                                    <Text fontSize='.8rem'>Visa, Mastercard, RuPay & More</Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet,
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem width={'100%'}>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <Text>Netbanking</Text>
                                                    <Text fontSize='.8rem'>All Indian banks</Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet,
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem width={'100%'}>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <Text>Wallet</Text>
                                                    <Text fontSize='.8rem'>
                                                        JioMoney & More
                                                    </Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet,
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </VStack>
                        </VStack>
                    </ModalBody>
                    <ModalFooter style={{
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px"
                    }} boxShadow={"0px 0px 15px gray"}>
                        <Button colorScheme='orange'>Pay Now</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal >
        </>
    )
}