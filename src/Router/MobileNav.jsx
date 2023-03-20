import React, { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { VscThreeBars } from 'react-icons/vsc';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Box display={{ base: 'block', lg: 'none' }}>
                <Button onClick={handleMenuClick}>
                    <VscThreeBars />
                </Button>
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: isOpen ? "70%" : "0" }}
                    transition={{ duration: 0.5 }}
                    className="mobile_slide"
                    style={{
                        height: '100vh',
                        backgroundColor: '#F15824',
                        position: 'absolute',
                        left: '0'
                    }}
                >
                    <div
                        style={{ display: isOpen ? 'block' : 'none' }}
                    >
                        <motion.div
                            initial={{ opacity: isOpen ? "100%" : "0" }}
                            animate={{ opacity: isOpen ? "100%" : "0" }}
                            transition={{ duration: 1 }}

                            style={{
                                color: "white",
                                fontWeight: "bold",
                                display: "flex",
                                flexDirection: "column",
                                padding: "10px",
                                gap: "20px"
                            }}
                        >
                            <NavLink to="/destination"><Text>Destinations</Text></NavLink>
                            <Text>Zostel</Text>
                            <Text>Zostel Homes</Text>
                            <Text>Zostel Plus</Text>
                            <Text>Franchise</Text>
                            <Text>Join us</Text>
                            <Text>Blog</Text>
                        </motion.div>
                    </div>
                </motion.div>
            </Box>
        </div>
    );
}
