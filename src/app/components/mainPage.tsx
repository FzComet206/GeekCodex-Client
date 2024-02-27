"use client"
import axios from "axios";
import { Box, Center, Flex, useDisclosure, } from "@chakra-ui/react";
import React, { ReactNode, useEffect, useState } from "react";
import Navigation from "./navigation";
import ContentBody from "./body";


export default function MainPage() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isSwitched, onSwitch] = useState(true);
    const { isOpen, onToggle} = useDisclosure();

    function toggleSwitch() {
        onSwitch(!isSwitched);
    }

    // api calls
    useEffect(() => {
        const serverApi = process.env.NEXT_PUBLIC_SERVER_API;

        if (serverApi) {
            axios.get(serverApi)
                .then((res) => {
                    setData(res.data);
                    setLoading(false);
                });
        } else {
            console.error("SERVER_API environment variable is not defined.");
        }
    }, []);

  return (
    <Box bg= {isSwitched ? "brand.pageDark" : "brand.pageLight"}>

            {/* this box is rightpart of screen */}
            <Center>
                <Navigation toggleFade= {onToggle} darkMode = {isSwitched} onSwitch={toggleSwitch} />
            </Center>
            <Center>
                <Box className="body">
                    <ContentBody fade = {isOpen} darkMode = {isSwitched} />
                </Box>

            </Center>

    </Box>
  );
}