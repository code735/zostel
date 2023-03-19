import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalHeader,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    Flex,
    Image,
    Button,
    ModalFooter
} from "@chakra-ui/react"

export default function PaymentModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Flex>
                            <Image src="https://cdn.razorpay.com/logos/K1ZMdO01lopiw9_medium.png" />
                        </Flex>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Helo
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}