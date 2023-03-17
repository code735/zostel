import * as React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  useColorModeValue,
  VStack,
  Checkbox,
  Link,
  Image,
  Flex,
  PinInput,
  PinInputField,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router";

export default function Login() {
  const form = useRef();
  const [otp, setOTP] = React.useState("Not Generated");
  const [submittedotp, setSubmittedOTP] = React.useState(
    "Not Generated SubmittedOtp"
  );
  const [username, setUsername] = React.useState("Not Generated Username");
  const [submitedform, setSubmitedform] = React.useState(false);

  const [isOpen, setIsOpen] = React.useState(false);

  const navigate = useNavigate();

  const toast = useToast()

  //OTP HANDLE SUBMIT
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitedform(true);
    console.log("otp:", otp);
    if (otp == submittedotp) {
      toast({
        position: "top",
        title: 'Successfully Logged In 😊 ',
        description: "We've created your account for you!",
        status: 'success',
        duration: 8000,
        isClosable: true,
      })
      setTimeout(() => {
        setSubmitedform(false);
        navigate("/");
      }, 1000);
    } else {
      toast({
        position: "top",
        title: 'WRONG OTP',
        description: "OTP Doesnt Match, Try Again !",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      setSubmitedform(false);

    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitedform(true);
    setUsername(form.current.user_email.value);
    const digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 5; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    console.log("sendEmail", username, OTP);
    form.current.otp_random.value = OTP;
    setTimeout(() => {
      setOTP(OTP);
      setIsOpen(true);
      setSubmitedform(false);
    }, 1000);


    toast({
      position: "top",
      title: `OTP sent to ${form.current.user_email.value}`,
      description: `We've sent OTP-${OTP}`,
      status: 'success',
      duration: 9000,
      isClosable: true,
    })


    // emailjs
    //   .sendForm(
    //     "service_3yydjin",
    //     "template_e0a4u9v",
    //     form.current,
    //     "VSVeva8uMM9Bh4gpq"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    // toast({
    //     position:"top",
    //     title: `OTP sent to ${form.current.user_email.value}`,
    //     description: "We've sent OTP",
    //     status: 'success',
    //     duration: 9000,
    //     isClosable: true,
    //   })
    //     },
    //     (error) => {
    //     toast({
    //         position:"top",
    //         title: 'FAILED TO SEND OTP',
    //         description: "Server Issues!! Try Again After Some Time",
    //         status: 'error',
    //         duration: 3000,
    //         isClosable: true,
    //       })
    //       console.log(error.text);
    //     }
    //   );
  };
  return (
    <Stack
      minH="90vh"
      direction={{ base: "column-reverse", md: "row" }}
      overflow="hidden"
    >
      <Flex flex={1}>
        <Image
          alt="Cover image"
          objectFit="cover"
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/414721166.jpg?k=705dd3625c1e56552ec08190bdab415fa309a1a3239b479d477b5c3d6a14d9de&o=&hp=1"
          borderRadius={"0 15px 15px 0px"}
        />
      </Flex>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Sign in to your account</Heading>
          </Stack>
          <VStack
            as="form"
            spacing={8}
            boxSize={{ base: "xs", sm: "sm", md: "md" }}
            h="max-content !important"
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
            ref={form}
            onSubmit={sendEmail}
          >
            <VStack spacing={4} w="100%">
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  rounded="md"
                  type="email"
                  autoComplete="on"
                  name="user_email"
                />
                <Input type={"hidden"} name="otp_random" />
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justify="space-between" w="100%">
                <Checkbox colorScheme="green" size="md">
                  Remember me
                </Checkbox>
                <Link fontSize={{ base: "md", sm: "md" }}>
                  Forgot password?
                </Link>
              </Stack>
              <Button
                type={"submit"}
                bg="#F2604E"
                color="white"
                _hover={{
                  bg: "orange.600",
                  cursor: "pointer",
                }}
                rounded="md"
                w="100%"
                value="Sign in"
                isLoading={submitedform}
                loadingText="Submitting..."
              >
                Sign In
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Flex>

      {/* //OTP MODAL */}
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter your OTP</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <FormControl>
                  <FormLabel>Enter 5-Digit OTP Pin</FormLabel>
                  <PinInput
                    placeholder="_"
                    onChange={(e) => setSubmittedOTP(e)}
                  >
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </FormControl>
                <Button
                  type="submit"
                  bg="#F2604E"
                  color="white"
                  _hover={{
                    bg: "orange.500",
                    cursor: "pointer",
                  }}
                  rounded="md"
                  w="100%"
                  isLoading={submitedform}
                  loadingText="Verifying..."
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  );
}
