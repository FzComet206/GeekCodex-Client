import { Box, Button, Center, Flex, } from "@chakra-ui/react";

// Add import statement for the missing type

import React from "react";


export default function Navigation({ toggleFade }: any) {
    return (
        <Box bg='brand.400' className="navbar">
            <Flex justifyContent="center">
                <Center >
                    <Button onClick={toggleFade}>
                        Click me
                    </Button>
                    <Box fontSize="50px">
                        Search Bar
                    </Box>
                </Center>
            </Flex>
        </Box>
    )
}