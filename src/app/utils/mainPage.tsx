"use client"
import { Box, ModalOverlay, useDisclosure, useToast, } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Navigation from "./navigation";
import { AppContext } from "../../../context/appContext";
import WritePost from "./writePost";
import axios from "axios";


export default function MainPage({ ContentBody } : any) {

    const { setIsLoggedIn, setUser, pinged, setpinged} = useContext(AppContext) || {};
    const toast = useToast();

    const showToast = () => {
        toast({
            title: "Post Submitted!",
            description: "Your post has been submitted successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
        })
    }

    // ping backend with cookie to check if user is logged in
    useEffect(() => {
        async function ping() {
            try {
                const res = await axios.get('/api/me');
                // const data = await me();
                if (res.data.username) {
                    setIsLoggedIn?.(true);
                    setUser?.(res.data.username);
                };
            } catch (error) {
                console.log("no user logged in");
            }
        }

        if (!pinged){
            setpinged?.(true);
            ping();
        }
    }, []);

    const {darkTheme, } = useContext(AppContext) || {};

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
            <Box bg={darkTheme ? "brand.pageDark" : "brand.pageLight"} className="fullsize">

                    {/* this box is rightpart of screen */}
                    <Box margin="auto" width="1800px">
                        <Navigation onOpen={onOpen} />
                        <ContentBody/>
                    </Box>
                    <WritePost isOpen={isOpen} onClose={onClose} showToast={showToast}></WritePost>

            </Box>
  );
}