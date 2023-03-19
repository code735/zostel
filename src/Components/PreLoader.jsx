import { motion } from "framer-motion";
import logo from '../images/logo.png'
import { useColorModeValue } from "@chakra-ui/react";

export default function PreLoader() {
  return (
    <div
      style={{
        height: "90vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <motion.img
        style={{
          width: "5%",
          borderRadius: "100%",
          boxShadow: useColorModeValue("0px 0px 13px #b3b3b3ad", "0px 0px 13px #11151d"),
          padding: "10px"
        }}
        animate={{ rotate: 1000 }}
        transition={{ duration: 3, repeat: Infinity }}
        src={logo}
      />
      <p
        style={{
          fontWeight: "bold",
          color: useColorModeValue("#4A5568", "white"),
          marginTop: "10px",
          fontSize: "20px"
        }}
      >
        Follow your ❤️
      </p>
    </div>
  );
}

{/* <VStack justify={"start"} width="430px">
<Text as={"h3"} fontSize="24px" fontWeight={"700"} justify={"flex-start"}>
  Summary
</Text>
<Text fontSize="14px" fontWeight={"700"}>
  1 night starting from Fri 24 Mar, 2023
</Text>
{cart.length > 0 ? (
  <VStack>
    {cart.map((ele) => {
      return (
        <>
          <Text
            width={"100%"}
            fontSize={18}
            fontWeight="600"
          >
            {ele.name}x{ele.quantity_rooms}
          </Text>
          <HStack
            width={"100%"}
            fontSize={18}
            fontWeight="600"
          >
            <Text>₹{ele.price}x 1 Night</Text>
            <Spacer></Spacer>
            <Text>₹{ele.price}</Text>
          </HStack>
        </>
      );
    })}
    <HStack width={"100%"} fontSize={18} fontWeight="600">
      <Text>Tax</Text>
      <Spacer />
      <Text>₹96</Text>
    </HStack>
    <HStack width={"100%"} fontSize={18} fontWeight="600">
      <Text>Total (tax incl.)</Text>
      <Spacer />
      <Text>₹895</Text>
    </HStack>
    <HStack width={"100%"} fontSize={18} fontWeight="600">
      <Text>Payable Now</Text>
      <Spacer />
      <Text>₹188</Text>
    </HStack>
  </VStack>
) : (
  <VStack>
    <Image src="https://book.zostel.com/static/media/gray-zobu.018014d9.svg" />
    <Text color={"#96A4A9"}>No Room Selected </Text>
  </VStack>
)}
</VStack>
     */}
