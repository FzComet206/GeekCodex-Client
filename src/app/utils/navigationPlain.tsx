import { Box, Button, Center, Flex, Input, Switch, } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../../../context/appContext";
import { useRouter } from "next/navigation";


export default function Navigation() {

    const {darkTheme, setTheme } = useContext(AppContext) || {};
    const router = useRouter();
    
    return (
        <Box margin="auto" className="nav" bg={darkTheme ? "brand.bodyDark" : "brand.bodyLight"} borderColor= {darkTheme ? "black" : "white"}

                minW={["450px", "1800px"]}
                maxW={["450px", "1800px"]}
        >
            <Flex alignContent="center">

                <Box paddingTop="40px" position="relative" left={["75%", "85%"]}>
                    <Button fontSize="20px" onClick={() => router.push("/homepage")}>
                        Back
                    </Button>
                </Box>
            </Flex>
        </Box>
    )
}