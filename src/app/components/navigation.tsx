import { Box, Button, Center, Flex, Input, Switch, } from "@chakra-ui/react";

// Add import statement for the missing type

import React from "react";


export default function Navigation({ toggleFade, darkMode, onSwitch}: any) {
    return (
        <Box className="navbar" bg={darkMode ? "brand.bodyDark" : "brand.bodyLight"} borderColor= {darkMode? "black" : "white"}>
            <Flex alignContent="center">

                <Box padding="20px" position="relative" left="2.5%">
                    <Box textAlign="center" textColor="white">Dark Mode</Box>
                    <Box textAlign="center" padding="15px">
                        <Switch size = "lg" isChecked={darkMode} onChange={onSwitch}></Switch>
                    </Box>
                </Box>

                <Box padding="30px" position="relative" left="2.5%">
                    <Button onClick={toggleFade}>
                        Refresh
                    </Button>
                </Box>

                <Box padding="5x" fontSize="50px" textColor="white" position="relative" left="10%">
                    <Input placeholder='Search' size="lg" width="35vw"/>
                </Box>
            </Flex>

        </Box>

    )
}