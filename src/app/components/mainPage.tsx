"use client"
import { Box, Center, Flex, ModalOverlay, PinInput, useDisclosure, useStatStyles, } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Navigation from "./navigation";
import ContentBody from "./contentBody";
import { AppContext } from "../../../context/appContext";
import { me } from "@/lib/api/me";
import WritePost from "./writePost";


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

    // open post forum
    const Overlay = () => (
        <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropBlur='6px'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ overlay, setOverlay ] = useState(<Overlay />);

    return (
            <Box bg={darkTheme ? "brand.pageDark" : "brand.pageLight"} className="fullsize">

                    {/* this box is rightpart of screen */}
                    <Box margin="auto" width="1800px">
                        <Navigation onOpen={onOpen} setOverlay={setOverlay} Overlay={<Overlay/>}/>
                        <ContentBody />
                    </Box>
                    <WritePost isOpen={isOpen} onClose={onClose} overlay={overlay}></WritePost>

            </Box>
  );
}