import { Box, Center, Flex } from "@chakra-ui/react";
import { Preview } from "./preview";

export default function ContentBody({ fade }: any){

    return (
        <Box bg="brand.500" className="content">
            <Box>
                <Flex justifyContent="center">
                    <Preview fade = {fade}/>
                    <Preview fade = {fade}/>
                    <Preview fade = {fade}/>
                    <Preview fade = {fade}/>
                    <Preview fade = {fade}/>
                </Flex>
            </Box>
            <Box>
                <Flex justifyContent="center">
                    <Preview fade = {fade}/>
                    <Preview fade = {fade}/>
                    <Preview fade = {fade}/>
                    <Preview fade = {fade}/>
                    <Preview fade = {fade}/>
                </Flex>
            </Box>
            <Box>
                <Flex justifyContent="center">
                    <Preview fade = {fade}/>
                    <Preview fade = {fade}/>
                    <Preview fade = {fade}/>
                    <Preview fade = {fade}/>
                    <Preview fade = {fade}/>
                </Flex>
            </Box>
        </Box>
    )
}
