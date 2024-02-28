
import { Box, Button, Center, Flex, Input, Switch, } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../../../context/appContext";
import { useRouter } from "next/navigation";


export default function Navigation({ toggleFade }: any) {

    const {darkTheme, setTheme } = useContext(AppContext) || {};
    const router = useRouter();
    
    return (
        <Box className="navbar" bg={darkTheme ? "brand.bodyDark" : "brand.bodyLight"} borderColor= {darkTheme ? "black" : "white"}>
            <Flex alignContent="center">

                <Box padding="20px" position="relative" left="2.5%">
                    <Box textAlign="center" textColor="white">Dark Mode</Box>
                    <Box textAlign="center" padding="15px">
                        <Switch size="lg" isChecked={darkTheme} onChange={() => setTheme?.(!darkTheme)}></Switch>
                    </Box>
                </Box>

                <Box padding="30px" position="relative" left="80%">
                    <Button onClick={() => router.push("/")}>
                        Back
                    </Button>
                </Box>
            </Flex>
        </Box>
    )
}