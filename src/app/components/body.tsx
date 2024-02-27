import { Box, Center, Flex } from "@chakra-ui/react";
import { Preview } from "./preview";

export default function ContentBody({ fade, darkMode}: any){

    return (
        <Box bg={darkMode? "brand.bodyDark" : "brand.bodyLight"} className="content">
            <Box>
                <Flex justifyContent="center">
                    <Preview fade = {fade} darkMode={darkMode}/>
                    <Preview fade = {fade} darkMode={darkMode}/>
                    <Preview fade = {fade} darkMode={darkMode}/>
                    <Preview fade = {fade} darkMode={darkMode}/>
                </Flex>
            </Box>
            <Box>
                <Flex justifyContent="center">
                    <Preview fade = {fade} darkMode={darkMode}/>
                    <Preview fade = {fade} darkMode={darkMode}/>
                    <Preview fade = {fade} darkMode={darkMode}/>
                    <Preview fade = {fade} darkMode={darkMode}/>
                </Flex>
            </Box>
        </Box>
    )
}
