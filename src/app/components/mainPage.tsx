"use client"
import axios from "axios";
import { Box, Center, Flex, useDisclosure, } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Navigation from "./navigation";
import ContentBody from "./contentBody";
import { AppContext } from "../../../context/appContext";


export default function MainPage() {

    const { isOpen, onToggle} = useDisclosure();
    const {darkTheme, } = useContext(AppContext) || {};

    const width = window.screen.width * 0.7;
    const minWidth = window.screen.width * 0.5;

    return (
            <Box bg={darkTheme ? "brand.pageDark" : "brand.pageLight"} className="fullsize">

                <Box minWidth={`${minWidth}px`}>
                    {/* this box is rightpart of screen */}
                    <Center>
                        <Navigation toggleFade={onToggle}/>
                    </Center>
                    <Center>
                        <ContentBody fade={isOpen}/>
                    </Center>
                </Box>
            </Box>
  );
}