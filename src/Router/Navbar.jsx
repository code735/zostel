import {
  Box,
  HStack,
  Image,
  useColorMode,
  Button,
  Text,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  MenuDivider,
  MenuGroup,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  BsSunFill,
  BsMoonFill,
  BsChevronDown,
  BsPersonCircle,
} from "react-icons/bs";
import MobileNav from "./MobileNav";
import logo from "../images/logo.png";
import "./Navbar.css";
import { useContext } from "react";
import { ZostelContext } from "../UseContext/ZostelContext";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isLogin } = useContext(ZostelContext);
  console.log("isLogin: ", isLogin);

  console.log(colorMode);

  return (
    <>
      <Box
        w="100%"
        className="navbar"
        display="flex"
        px={{ sm: "10px", lg: "10px", xl: "30px" }}
        py={{ sm: "10px" }}
        position={{ sm: "relative" }}
        zIndex="2"
        justifyContent="space-between"
        alignItems="center"
      >
        <NavLink to="/">
          <Box display="flex" alignItems="center" gap="10px">
            <Image
              width={{ sm: "35px", md: "50px" }}
              objectFit={"cover"}
              src={logo}
            />
            <HStack
              fontSize={{ sm: "15", md: "20", xl: "22" }}
              fontWeight={900}
            >
              <Text as={"strong"} letterSpacing="2px">
                Z O S T E L
              </Text>
            </HStack>
          </Box>
        </NavLink>
        <Box display={"flex"} gap="10px">
          <Box
            display={{ base: "none", lg: "flex" }}
            className="navlinks"
            alignItems="center"
          >
            <Text mx={2}>
              <NavLink to="/destination">Destinations</NavLink>
            </Text>
            <Text mx={2}>
              <Menu className="menu">
                <MenuButton
                  transition="all 0.2s"
                  borderRadius="md"
                  border="none"
                  borderWidth="1px"
                >
                  <Text
                    fontWeight="bold"
                    outline="none"
                    display="flex"
                    alignItems="center"
                    gap="5px"
                  >
                    <Text className="dropdown_links">Zostel</Text>{" "}
                    <BsChevronDown
                      style={{
                        fontWeight: "bold",
                        fontSize: ".8rem",
                      }}
                    />
                  </Text>
                </MenuButton>
                <MenuList className="MenuList-zostel">
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
                </MenuList>
              </Menu>
            </Text>
            <Text mx={2}>
              <Menu className="menu">
                <MenuButton
                  transition="all 0.2s"
                  borderRadius="md"
                  border="none"
                  borderWidth="1px"
                >
                  <Text
                    fontWeight="bold"
                    outline="none"
                    display="flex"
                    alignItems="center"
                    gap="5px"
                  >
                    <Text className="dropdown_links">Zostel Homes</Text>{" "}
                    <BsChevronDown
                      style={{
                        fontWeight: "bold",
                        fontSize: ".8rem",
                      }}
                    />
                  </Text>
                </MenuButton>
                <MenuList className="MenuList">
                  <MenuItem>Zostel Alleppey</MenuItem>
                  <MenuItem>Zostel Aurangabad</MenuItem>
                  <MenuItem>Zostel Bangalore</MenuItem>
                  <MenuItem>Zostel Banikhet (Dalhousie)</MenuItem>
                  <MenuItem>Zostel Barot (Rajgundha)</MenuItem>
                  <MenuItem>Zostel Bundi</MenuItem>
                </MenuList>
              </Menu>
            </Text>
            <Text mx={2}>
              <Menu className="menu">
                <MenuButton
                  transition="all 0.2s"
                  borderRadius="md"
                  border="none"
                  borderWidth="1px"
                >
                  <Text
                    fontWeight="bold"
                    outline="none"
                    display="flex"
                    alignItems="center"
                    gap="5px"
                  >
                    <Text className="dropdown_links">Zostel Plus</Text>{" "}
                    <BsChevronDown
                      style={{
                        fontWeight: "bold",
                        fontSize: ".8rem",
                      }}
                    />
                  </Text>
                </MenuButton>
                <MenuList className="MenuList">
                  <MenuItem>Zostel Plus Bir</MenuItem>
                  <MenuItem>Zostel Plus Kareri</MenuItem>
                  <MenuItem>Zostel Plus Lonavala</MenuItem>
                  <MenuItem>Zostel Plus Mussoorie</MenuItem>
                  <MenuItem>Zostel Plus Nainital (Naina Range)</MenuItem>
                  <MenuItem>Zostel Plus Panchgani</MenuItem>
                  <MenuItem>Zostel Plus Rishikesh (Mohanchatti)</MenuItem>
                  <MenuItem>Zostel Plus Wayanad</MenuItem>
                </MenuList>
              </Menu>
            </Text>
            <Text mx={2}>
              <NavLink>Franchise</NavLink>
            </Text>
            <Text mx={2}>
              <Menu className="menu">
                <MenuButton
                  transition="all 0.2s"
                  borderRadius="md"
                  border="none"
                  borderWidth="1px"
                >
                  <Text
                    fontWeight="bold"
                    outline="none"
                    display="flex"
                    alignItems="center"
                    gap="10px"
                  >
                    <Text className="dropdown_links">Join us</Text>{" "}
                    <BsChevronDown
                      style={{
                        fontWeight: "bold",
                        fontSize: ".8rem",
                      }}
                    />
                  </Text>
                </MenuButton>
                <MenuList className="MenuList">
                  <MenuItem>Careers</MenuItem>
                  <MenuItem>Zostel Internship Program</MenuItem>
                  <MenuItem>Artist Collaboration Program</MenuItem>
                  <MenuItem>Travel Agency Partner Program</MenuItem>
                  <MenuItem>Tour Operator Partner Program</MenuItem>
                  <MenuItem>Travel, Shoot & Learn with Zostel</MenuItem>
                </MenuList>
              </Menu>
            </Text>
            <Text mx={2}>
              <NavLink>Blog</NavLink>
            </Text>
          </Box>
          <Box>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <BsMoonFill />
              ) : (
                <BsSunFill fontSize={"1.4rem"} />
              )}
            </Button>
          </Box>
          <Box>
            <MobileNav />
          </Box>
          {!isLogin ? (
            <NavLink to="/login">
              <Button bg={"#F15824"} colorScheme={"orange"}>LOGIN</Button>
            </NavLink>
          ) : (
            <Menu>
              <MenuButton
                display={{ base: "none", lg: "block" }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.border =
                    colorMode === "light"
                      ? "1px solid black"
                      : "1px solid white";
                  event.currentTarget.style.background = "transparent";
                  event.currentTarget.style.color =
                    colorMode === "light" ? "black" : "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.background = "#F15824";
                  e.currentTarget.style.borderColor = "transparent";
                }}
                bg="#F15824"
                as={Button}
                color="white"
              >
                <Box display={{ base: "flex" }} alignItems="center" gap="10px">
                  <BsPersonCircle
                    style={{
                      fontWeight: "bold",
                    }}
                  />{" "}
                  <Text>Profile</Text>
                </Box>
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem>
                    <NavLink
                      to="/profile"
                      style={{
                        fontWeight: "normal",
                      }}
                    >
                      My Account
                    </NavLink>
                  </MenuItem>
                  <MenuItem>Payments </MenuItem>
                  <MenuItem>
                    <NavLink
                      to="/login"
                      style={{
                        fontWeight: "normal",
                      }}
                    >
                      Login
                    </NavLink>
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Help">
                  <MenuItem>Docs</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
