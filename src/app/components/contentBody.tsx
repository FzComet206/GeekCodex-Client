import { Box, Center, Flex, Grid, GridItem, useConst } from "@chakra-ui/react";
import { Preview } from "./preview";
import { useContext } from "react";
import { AppContext } from "../../../context/appContext";

import { Global, css } from "@emotion/react";

export default function ContentBody(){

    const {darkTheme } = useContext(AppContext) || {};
    const styledScroll = css `
        ::-webkit-scrollbar {
        width: 15px;
        }

        ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.2);
        }

        ::-webkit-scrollbar-thumb {
        background-color: #a0a0a0;
        border-radius: 8px;
        border: 2px solid #f0f0f0;
        }

        ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0);
        }
    `

    return (
        <>
        <Global styles={styledScroll}></Global>
        <Box 
            bg={darkTheme? "brand.bodyDark" : "brand.bodyLight"} 
            className="content"
            >
            <Box>
                <Flex alignContent="center" justifyContent="center">
                    <Preview/>
                    <Preview/>
                    <Preview/>
                    <Preview/>
                </Flex>
            </Box>
            <Box>
                <Flex alignContent="center" justifyContent="center">
                    <Preview/>
                    <Preview/>
                    <Preview/>
                    <Preview/>
                </Flex>
            </Box>
            <Box>
                <Flex alignContent="center" justifyContent="center">
                    <Preview/>
                    <Preview/>
                    <Preview/>
                    <Preview/>
                </Flex>
            </Box>
            <Box>
                <Flex alignContent="center" justifyContent="center">
                    <Preview/>
                    <Preview/>
                    <Preview/>
                    <Preview/>
                </Flex>
            </Box>
            <Box>
                <Flex alignContent="center" justifyContent="center">
                    <Preview/>
                    <Preview/>
                    <Preview/>
                    <Preview/>
                </Flex>
            </Box>
            <Box>
                <Flex alignContent="center" justifyContent="center">
                    <Preview/>
                    <Preview/>
                    <Preview/>
                    <Preview/>
                </Flex>
            </Box>
            <Box>
                <Flex alignContent="center" justifyContent="center">
                    <Preview/>
                    <Preview/>
                    <Preview/>
                    <Preview/>
                </Flex>
            </Box>
            <Box>
                <Flex alignContent="center" justifyContent="center">
                    <Preview/>
                    <Preview/>
                    <Preview/>
                    <Preview/>
                </Flex>
            </Box>
            <Box>
                <Flex alignContent="center" justifyContent="center">
                    <Preview/>
                    <Preview/>
                    <Preview/>
                    <Preview/>
                </Flex>
            </Box>
        </Box>
        </>
    )
}
