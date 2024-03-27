import { Box, Button, Flex, Input, Menu, MenuButton, MenuItem, MenuList, Switch, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/appContext";
import { UserNav } from "./userNav";
import { ChevronDownIcon } from "@chakra-ui/icons";


export default function Navigation({ onOpen }: any) {

    const {darkTheme, setTheme, isLoggedIn, currTitle, setFlip, setCurrQuery, setCurrSort} = useContext(AppContext) || {};
    const [changed, setChanged] = useState(false)

    const router = useRouter();

    const [query, setQuery] = useState("")
    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        setChanged(true)
        setQuery(e.target.value);
    }

    const goToPost = () => {
        if (!isLoggedIn) {
            router.push("/auth/login");
        }
        onOpen()
    }

    const goToRegister = () => {
        router.push("/auth/register");
    }
    const goToLogin = () => {
        router.push("/auth/login");
    }

    const handleSortLike = () => {
        setCurrSort("like")
        setFlip(true)
    }

    const handleSortTime = () => {
        setCurrSort("")
        setFlip(true)
    }

    const handleKeyPress = (event : React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }

    const handleSearch = () => {    
        if (query.length < 50 && changed){
            setCurrQuery(query)
            setChanged(false)
            setFlip(true)
        }
    }

    let fs = "45px";
    if (currTitle.length > 11) {
        fs = "35px";
    }

    // post forum
    return (
        <Box className="nav" bg={darkTheme ? "brand.bodyDark" : "brand.bodyLight"} borderColor= "white">
            <Flex alignContent="center">

                <Box 
                    fontSize={fs}
                    textColor="white" 
                    position="relative" 
                    left="2%" 
                    minWidth="250px"
                    maxWidth="250px"
                    alignContent="center"
                    >
                    <Text textAlign="center">
                        {currTitle}
                    </Text>
                </Box>

                <Box marginTop="30px" textColor="white" position="relative" left="4%">
                    <Button colorScheme="pink" h="50px" w="80px" fontSize="30px" onClick={goToPost}>Post</Button>
                </Box>

                <Box marginTop="30px" textColor="white" position="relative" left="9%" width="750px" minWidth="300px">
                    <Input placeholder='Search' size="lg" value={query} onChange={handleQueryChange} onKeyUp={handleKeyPress}/>
                </Box>


                <Box padding="20px" position="relative" left="10%">
                    <Box textAlign="center" textColor="white">Dark Mode</Box>
                    <Box textAlign="center" padding="15px">
                        <Switch size="lg" isChecked={darkTheme} onChange={() => setTheme?.(!darkTheme)}></Switch>
                    </Box>
                </Box>

                <Box display="block" position="relative" left="12%" w="10px" paddingTop="35px" fontSize="20px" textColor="black"> 
                    <Menu>
                        <MenuButton colorScheme="pink" as={Button} fontSize="20px" rightIcon={<ChevronDownIcon />}>
                            Sort
                        </MenuButton>
                        <MenuList display="block">
                            <MenuItem onClick={handleSortTime}>
                                Date of post
                            </MenuItem>
                            <MenuItem onClick={handleSortLike}>
                                Number of likes
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>

                {
                    isLoggedIn?
                    <>
                        <UserNav/>
                    </>
                    :
                    <Flex position="relative" left="19%">
                            <Box marginTop="35px" textColor="white">
                                <Button onClick={goToLogin}>Login</Button>
                            </Box>

                            <Box marginTop="35px" textColor="white" position="relative" left="10%">
                                <Button onClick={goToRegister}>Register</Button>
                            </Box>
                    </Flex>
                }



            </Flex>

        </Box>

    )
}