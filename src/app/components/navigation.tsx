import { Box, Button, Center, Flex, Input, Switch, } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { AppContext } from "../../../context/appContext";


export default function Navigation({ toggleFade }: any) {

    const {darkTheme, setTheme } = useContext(AppContext) || {};

    const router = useRouter();
    const goToRegister = () => {
        router.push("/auth/register");
    }
    const goToLogin = () => {
        router.push("/auth/login");
    }

    return (
        <Box className="nav" bg={darkTheme ? "brand.bodyDark" : "brand.bodyLight"} borderColor= "white">
            <Flex alignContent="center">

                <Box padding="10px" fontSize="45px" textColor="white" position="relative" left="2%" paddingTop="20px" minWidth="250px">
                    Geek Codex
                </Box>

                <Box padding="10px" fontSize="50px" textColor="white" position="relative" left="3%">
                    <Button onClick={toggleFade}>Recommand</Button>
                </Box>

                <Box padding="5px" fontSize="50px" textColor="white" position="relative" left="8%" width="700px" minWidth="300px">
                    <Input placeholder='Search' size="lg"/>
                </Box>

                <Box padding="10px" fontSize="50px" textColor="white" position="relative" left="8%">
                    <Button>Search</Button>
                </Box>

                <Box padding="20px" position="relative" left="11%">
                    <Box textAlign="center" textColor="white">Dark Mode</Box>
                    <Box textAlign="center" padding="15px">
                        <Switch size="lg" isChecked={darkTheme} onChange={() => setTheme?.(!darkTheme)}></Switch>
                    </Box>
                </Box>
                
                <Box padding="10px" fontSize="50px" textColor="white" position="relative" left="14%">
                    <Button onClick={goToLogin}>Login</Button>
                </Box>

                <Box padding="10px" fontSize="50px" textColor="white" position="relative" left="14%">
                    <Button onClick={goToRegister}>Register</Button>
                </Box>

            </Flex>

        </Box>

    )
}