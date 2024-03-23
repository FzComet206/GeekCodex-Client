import { Box, Button, Flex, Input, Switch } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { AppContext } from "../../../context/appContext";
import { UserNav } from "./userNav";


export default function Navigation({ onOpen }: any) {

    const {darkTheme, setTheme, isLoggedIn, user} = useContext(AppContext) || {};

    const router = useRouter();

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

    // post forum
    return (
        <Box className="nav" bg={darkTheme ? "brand.bodyDark" : "brand.bodyLight"} borderColor= "white">
            <Flex alignContent="center">

                <Box padding="10px" fontSize="45px" textColor="white" position="relative" left="2%" paddingTop="20px" minWidth="250px">
                    Geek Codex
                </Box>

                <Box marginTop="30px" textColor="white" position="relative" left="4%">
                    <Button colorScheme="pink" h="50px" w="80px" fontSize="30px" onClick={goToPost}>Post</Button>
                </Box>

                <Box marginTop="30px" textColor="white" position="relative" left="8%" width="800px" minWidth="300px">
                    <Input placeholder='Search' size="lg"/>
                </Box>

                <Box marginTop="33px" textColor="white" position="relative" left="8.2%">
                    <Button>Search</Button>
                </Box>

                <Box padding="20px" position="relative" left="12%">
                    <Box textAlign="center" textColor="white">Dark Mode</Box>
                    <Box textAlign="center" padding="15px">
                        <Switch size="lg" isChecked={darkTheme} onChange={() => setTheme?.(!darkTheme)}></Switch>
                    </Box>
                </Box>


                {
                    isLoggedIn?
                    <UserNav/>
                    :
                    <Flex position="relative" left="13%">
                            <Box marginTop="30px" textColor="white">
                                <Button onClick={goToLogin}>Login</Button>
                            </Box>

                            <Box marginTop="30px" textColor="white" position="relative" left="10%">
                                <Button onClick={goToRegister}>Register</Button>
                            </Box>
                    </Flex>
                }



            </Flex>

        </Box>

    )
}