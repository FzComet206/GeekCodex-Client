import { Box, Center, Flex, Grid, GridItem, useConst } from "@chakra-ui/react";
import { Preview } from "./preview";
import { useContext } from "react";
import { AppContext } from "../../../context/appContext";

export default function ContentBody({ fade}: any){

    const {darkTheme } = useContext(AppContext) || {};
    var width = 1000;
    var minWidth = 700;
    if (typeof window !== "undefined") {
        width = window.screen.width * 0.7;
        minWidth = window.screen.width * 0.5;
    }

    return (
        <Box bg={darkTheme? "brand.bodyDark" : "brand.bodyLight"} className="content" minWidth={`${minWidth}px`} w={`${width}px`}>
            <Box>
                <Flex alignContent="center" justifyContent="center">
                    <Preview fade = {fade} />
                    <Preview fade = {fade} />
                    <Preview fade = {fade} />
                    <Preview fade = {fade} />
                </Flex>
            </Box>
            <Box >
                <Flex alignContent="center" justifyContent="center">
                    <Preview fade = {fade} />
                    <Preview fade = {fade} />
                    <Preview fade = {fade} />
                    <Preview fade = {fade} />
                </Flex>
            </Box>
        </Box>
    )
}
