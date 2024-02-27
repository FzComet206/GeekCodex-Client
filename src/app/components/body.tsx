import { Box, Center, Flex, useConst } from "@chakra-ui/react";
import { Preview } from "./preview";
import { useContext } from "react";
import { AppContext } from "../../../context/appContext";

export default function ContentBody({ fade}: any){

    const {darkTheme } = useContext(AppContext) || {};

    return (
        <Box bg={darkTheme? "brand.bodyDark" : "brand.bodyLight"} className="content">
            <Box>
                <Flex justifyContent="center">
                    <Preview fade = {fade} />
                    <Preview fade = {fade} />
                    <Preview fade = {fade} />
                    <Preview fade = {fade} />
                </Flex>
            </Box>
            <Box>
                <Flex justifyContent="center">
                    <Preview fade = {fade} />
                    <Preview fade = {fade} />
                    <Preview fade = {fade} />
                    <Preview fade = {fade} />
                </Flex>
            </Box>
        </Box>
    )
}
function useAppContext(): { darkTheme: any; } {
    throw new Error("Function not implemented.");
}

