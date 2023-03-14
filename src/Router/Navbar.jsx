import { Box, Image, useColorMode, Button, Text, Menu, MenuList, MenuItem, MenuButton, MenuDivider, MenuGroup } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { BsSunFill, BsMoonFill, BsChevronDown } from 'react-icons/bs';
import logo from '../images/logo.png';
import './Navbar.css'

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  console.log(colorMode)

  return <>
    <Box w='100%' display='flex' px={{ sm: '10px', lg: '30px' }} py={{ sm: '10px' }} justifyContent='space-between' alignItems='center'>
      <NavLink to='/'>
        <Box display="flex" alignItems="center" gap='10px'>
          <Image width={{ sm: "50px" }} objectFit={'cover'} src={logo} />
          <p style={{
            fontWeight: "bold",
            letterSpacing: "5px"
          }}
            className="logotxt"
          >Z  O  S  T  E  L</p>
        </Box>
      </NavLink>
      <Box display={'flex'}>
        <Box display={{ base: 'none', md: 'flex' }} className='navlinks' alignItems='center'>
          <Text mx={2}>
            <NavLink to='/destination'>
              Destinations
            </NavLink>
          </Text>
          <Text mx={2}>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='md'
                border='none'
                borderWidth='1px'
              >
                <Text
                  fontWeight='bold'
                  outline='none'
                  display="flex"
                  alignItems='center'
                  gap='10px'
                >
                  <Text>Zostel</Text> <BsChevronDown style={{
                    fontWeight: "bold",
                    fontSize: ".8rem"
                  }} />
                </Text>
              </MenuButton>
              <MenuList className='MenuList'>
                <MenuItem>Zostel Alleppey</MenuItem>
                <MenuItem>Zostel Aurangabad</MenuItem>
                <MenuItem>Zostel Bangalore</MenuItem>
                <MenuItem>Zostel Banikhet (Dalhousie)</MenuItem>
                <MenuItem>Zostel Barot (Rajgundha)</MenuItem>
                <MenuItem>Zostel Bundi</MenuItem>
                <MenuItem>Zostel Chitkul</MenuItem>
                <MenuItem>Zostel Coorg (Madikeri)</MenuItem>
                <MenuItem>Zostel Coorg (Siddapura)</MenuItem>
                <MenuItem>Zostel Dalhousie</MenuItem>
                <MenuItem>Zostel Delhi</MenuItem>
                <MenuItem>Zostel Dharamkot</MenuItem>
                <MenuItem>Zostel Dobhi</MenuItem>
                <MenuItem>Zostel Gangtok</MenuItem>
                <MenuItem>Zostel Goa (Morjim)</MenuItem>
                <MenuItem>Zostel Gokarna</MenuItem>
                <MenuItem>Zostel Hyderabad</MenuItem>
                <MenuItem>Zostel Jaipur</MenuItem>
                <MenuItem>Zostel Jaisalmer</MenuItem>
                <MenuItem>Zostel Jodhpur</MenuItem>
                <MenuItem>Zostel Kathmandu</MenuItem>
                <MenuItem>Zostel Kochi</MenuItem>
                <MenuItem>Zostel Kodaikanal</MenuItem>
                <MenuItem>Zostel Kolad</MenuItem>
                <MenuItem>Zostel Leh</MenuItem>
                <MenuItem>Zostel Manali (Burwa)</MenuItem>
                <MenuItem>Zostel Manali (Old Manali)</MenuItem>
                <MenuItem>Zostel Manali (Vashisht)</MenuItem>
                <MenuItem>Zostel McLeodganj</MenuItem>
                <MenuItem>Zostel Mukteshwar</MenuItem>
                <MenuItem>Zostel Mumbai</MenuItem>
                <MenuItem>Zostel Munnar</MenuItem>
                <MenuItem>Zostel Mysore</MenuItem>
                <MenuItem>Zostel Ooty</MenuItem>
                <MenuItem>Zostel Pokhara</MenuItem>
                <MenuItem>Zostel Pushkar</MenuItem>
                <MenuItem>Zostel Rishikesh (Laxman Jhula)</MenuItem>
                <MenuItem>Zostel Rishikesh (Tapovan)</MenuItem>
                <MenuItem>Zostel Sangla</MenuItem>
                <MenuItem>Zostel Shangarh</MenuItem>
                <MenuItem>Zostel Sissu</MenuItem>
                <MenuItem>Zostel Spiti</MenuItem>
                <MenuItem>Zostel Srinagar</MenuItem>
                <MenuItem>Zostel Udaipur</MenuItem>
                <MenuItem>Zostel Vagamon</MenuItem>
                <MenuItem>Zostel Varkala</MenuItem>
              </MenuList>
            </Menu>
          </Text>
          <Text mx={2}>
            <NavLink>
              Zostel Homes
            </NavLink>
          </Text>
          <Text mx={2}>
            <NavLink>
              Zostel Plus
            </NavLink>
          </Text>
          <Text mx={2}>
            <NavLink>
              Franchise
            </NavLink>
          </Text>
          <Text mx={2}>
            <NavLink>
              Join us
            </NavLink>
          </Text>
          <Text mx={2}>
            <NavLink>
              Blog
            </NavLink>
          </Text>
        </Box>
        <Box>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <BsMoonFill /> : <BsSunFill fontSize={'1.4rem'} />}
          </Button>
        </Box>
        <Menu>
          <MenuButton as={Button} colorScheme='pink'>
            Profile
          </MenuButton>
          <MenuList>
            <MenuGroup title='Profile'>
              <MenuItem>
                <NavLink to='/profile'>My Account</NavLink></MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title='Help'>
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  </>
}

export default Navbar;