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
        <Box 
            className="nav" 
            bg={darkTheme ? "brand.bodyDark" : "brand.bodyLight"} 
            borderColor= "white" margin="auto"
                minW={["500px", "1800px"]}
                maxW={["500px", "1800px"]}
            >
            <Flex alignContent="center">

                <Box 
                    paddingTop="20px"
                    fontSize={fs}
                    textColor="white" 
                    position="relative" 
                    left="2%" 
                    alignContent="center"
                    maxW={["0px", "250px"]}
                    minW={["0px", "250px"]}
                    overflow={["hidden", "visible"]}
                    >
                    <Text textAlign="center">
                        {currTitle}
                    </Text>
                </Box>

                <Box paddingTop="32px" textColor="white" position="relative" left="5.5%">
                    <Button bgColor="wheat" h="50px" w="80px" fontSize="30px" onClick={goToPost}>Post</Button>
                </Box>

                <Box 
                    w={["150px", "750px"]}
                    overflow={["hidden", "visible"]}
                    paddingTop="32px" textColor="white" position="relative" left="10%">
                    <Input placeholder='Search' size="lg" value={query} onChange={handleQueryChange} onKeyUp={handleKeyPress}/>
                </Box>

                {
                    isLoggedIn?
                    <>
                        <UserNav/>
                    </>
                    :
                    <Flex position="relative" left="20%">

                            <Box paddingTop="35px">
                                <Button bgColor="wheat" h="40px" w="80px" fontSize="20px" onClick={goToLogin}>Login</Button>
                            </Box>

                            <Box 
                                w={["0px", "95px"]} overflow={["hidden", "visible"]}
                                paddingTop="35px" position="relative" left="15%">
                                <Button bgColor="wheat" h="40px" w="95px" fontSize="20px" onClick={goToRegister}>Register</Button>
                            </Box>
                    </Flex>
                }



            </Flex>

        </Box>

    )
}