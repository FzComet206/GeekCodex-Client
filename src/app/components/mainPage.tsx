"use client"
import { Box, Center, Flex, PinInput, useDisclosure, useStatStyles, } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Navigation from "./navigation";
import ContentBody from "./contentBody";
import { AppContext } from "../../../context/appContext";
import { me } from "@/lib/api/me";


export default function MainPage() {

    const { setIsLoggedIn, setUser, pinged, setpinged} = useContext(AppContext) || {};

    // ping backend with cookie to check if user is logged in
    useEffect(() => {
        async function ping() {
            const data = await me();
            if (data.username) {
                setIsLoggedIn?.(true);
                setUser?.(data.username);
            };
        }
        if (!pinged){
            setpinged?.(true);
            ping();
        }
    }, []);
    const {darkTheme, } = useContext(AppContext) || {};

    return (
            <Box bg={darkTheme ? "brand.pageDark" : "brand.pageLight"} className="fullsize">

                    {/* this box is rightpart of screen */}
                    <Box margin="auto" width="1800px">
                        <Navigation />
                        <ContentBody />
                    </Box>

            </Box>
  );
}