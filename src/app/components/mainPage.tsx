"use client"
import axios from "axios";
import { Box, Center, Flex, useDisclosure, } from "@chakra-ui/react";
import React, { ReactNode, useEffect, useState } from "react";
import Navigation from "./navigation";
import ContentBody from "./body";


export default function MainPage() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { isOpen, onToggle} = useDisclosure();

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
    <Box bg="brand.800">
        <Flex>
            {/* this box is left part of screen */}
            <Box bg="brand.800" className="menu" fontSize="40px">
                <Center>
                    Recommendations
                </Center>
            </Box>

            {/* this box is rightpart of screen */}
            <Box className="body">
                <Navigation toggleFade= {onToggle}/>
                <ContentBody fade = {isOpen} />
            </Box>

        </Flex>
    </Box>
  );
}