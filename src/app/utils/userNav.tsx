import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../../context/appContext";
import { Text, Box, Flex } from "@chakra-ui/react";
import { Profile } from "./profile";
import { ChevronDownIcon } from "@chakra-ui/icons";

export function UserNav() {

    const {user} = useContext(AppContext) || {};

    return (
        <Box position="relative" left="12%" w="150px" paddingTop="20px" fontSize="35px" textColor="white"> 
        
            <Flex>

                <Box
                    maxW={["0px", "280px"]}
                    minW={["0px", "280px"]}
                    overflow={["hidden", "visible"]}
                    paddingTop="12px" position="relative" mr="auto" fontSize="35px" >
                    <Text textAlign="center">
                        Hello: {user}
                    </Text>
                </Box>

                <Box position="relative" left="25%" mr="auto" paddingTop="15px">
                    <Profile/>
                </Box>

            </Flex>
        </Box>
    )
}
