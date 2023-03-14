import {Box,Image,useColorMode,Link,Button} from '@chakra-ui/react';
import {BsSunFill,BsMoonFill,} from 'react-icons/bs';
import logo from '../images/logo.png';
import './Navbar.css'

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  console.log(colorMode)

  return <>
  <Box w='100%' display='flex' px={{sm:'10px',lg:'30px'}} py={{sm:'10px'}} justifyContent='space-between' alignItems='center'>
    <Box display="flex" alignItems="center" gap='10px'>
      <Image width={{sm:"50px"}} objectFit={'cover'} src={logo}/>
      <p style={{
        fontWeight:"bold"}}
        className="logotxt"
      >Z O S T E L</p>
    </Box>
    <Box display={'flex'}>
      <Box display={{ base: 'none', md: 'flex' }} className='navlinks' alignItems='center'>
          <Link href='#' mx={2}>Destinations</Link>
          <Link href='#' mx={2}>Zostel</Link>
          <Link href='#' mx={2}>Zostel Homes</Link>
          <Link href='#' mx={2}>Zostel Plus</Link>
          <Link href='#' mx={2}>Franchise</Link>
          <Link href='#' mx={2}>Join us</Link>
          <Link href='#' mx={2}>Blog</Link>
      </Box>
      <Box>
        <Button onClick={toggleColorMode}>
          { colorMode==="light"?<BsMoonFill />:<BsSunFill fontSize={'1.4rem'}/>}
        </Button>
      </Box>
    </Box>
  </Box>
  </>
}

export default Navbar;