import { Box, Button, Center, Flex, Input, Switch, } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { AppContext } from "../../../context/appContext";


export default function Navigation({ toggleFade}: any) {

    const {darkTheme, setTheme } = useContext(AppContext) || {};
    
    const router = useRouter();
    const goToRegister = () => {
        router.push("/auth/register");
    }
    const goToLogin = () => {
        router.push("/auth/login");
    }

    return (
        <Box className="navbar" bg={darkTheme ? "brand.bodyDark" : "brand.bodyLight"} borderColor= {darkTheme ? "black" : "white"}>
            <Flex alignContent="center">

                <Box padding="20px" position="relative" left="2.5%">
                    <Box textAlign="center" textColor="white">Dark Mode</Box>
                    <Box textAlign="center" padding="15px">
                        <Switch size="lg" isChecked={darkTheme} onChange={() => setTheme?.(!darkTheme)}></Switch>
                    </Box>
                </Box>

                <Box padding="30px" position="relative" left="2.5%">
                    <Button onClick={toggleFade}>
                        Refresh
                    </Button>
                </Box>

                <Box padding="5px" fontSize="50px" textColor="white" position="relative" left="10%">
                    <Input placeholder='Search' size="lg" width="35vw"/>
                </Box>

                <Box padding="10px" fontSize="50px" textColor="white" position="relative" left="15%">
                    <Button onClick={goToLogin}>Login</Button>
                </Box>

                <Box padding="10px" fontSize="50px" textColor="white" position="relative" left="15%">
                    <Button onClick={goToRegister}>Register</Button>
                </Box>

            </Flex>

        </Box>

    )
}