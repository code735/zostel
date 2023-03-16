import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { VscThreeBars } from 'react-icons/vsc';
import { motion } from 'framer-motion';

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
                ></motion.div>
            </Box>
        </div>
    );
}
