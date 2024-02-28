"use client"
import axios from "axios";
import { Box, Center, useDisclosure, } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Navigation from "./navigation";
import ContentBody from "./contentBody";
import { AppContext } from "../../../context/appContext";


export default function MainPage() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { isOpen, onToggle} = useDisclosure();
    const {darkTheme, } = useContext(AppContext) || {};

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
    <Box bg={darkTheme ? "brand.pageDark" : "brand.pageLight"}>
            {/* this box is rightpart of screen */}
            <Center>
                <Navigation toggleFade={onToggle}/>
            </Center>
            <Center>
                <Box className="body">
                    <ContentBody fade={isOpen} />
                </Box>
            </Center>
    </Box>
  );
}