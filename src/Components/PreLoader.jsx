import { motion } from "framer-motion";

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
          boxShadow: "0px 0px 13px #b3b3b3ad",
          padding: "10px"
        }}
        animate={{ rotate: 1000 }}
        transition={{ duration: 3, repeat: Infinity }}
        src="https://s3.ap-south-1.amazonaws.com/zo-static/website/img/zostel-logo.jpg"
      />
      <p
        style={{
          fontWeight: "bold",
          color: "#4A5568",
          marginTop:"10px",
          fontSize:"20px"
        }}
      >
        Follow your ❤️
      </p>
    </div>
  );
}
