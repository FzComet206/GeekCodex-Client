import { Box, Center, Flex, Grid, GridItem, useConst } from "@chakra-ui/react";
import { Preview } from "./preview";
import { useContext } from "react";
import { AppContext } from "../../../context/appContext";

export default function ContentBody({ fade}: any){

    const {darkTheme } = useContext(AppContext) || {};

    return (
        <Box bg={darkTheme? "brand.bodyDark" : "brand.bodyLight"} className="content">
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
