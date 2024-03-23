import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, MenuItem, MenuList, Menu, Box } from "@chakra-ui/react"
import axios from "axios";
import React, { useContext } from "react"
import { AppContext } from "../../../context/appContext";
import { useRouter } from "next/navigation";

export function Profile({onClose, isOpen, onOpen} : any) {

    const {darkTheme, user, setUser, setIsLoggedIn } = useContext(AppContext) || {};
    const router = useRouter();

    const logoutRedirect = async () => {
        try {
            await axios.post(
                "../api/logout", "",
                { headers: { 'Content-Type': 'application/json' }, withCredentials: true} 
            );

            // await logout()
            setUser?.("");
            setIsLoggedIn?.(false);

            router.push("/auth/login");
        } catch (error) {
            console.log(error)
        }
    }

    const handleClickFeed = async () => {
        router.push("/")
    }

    const handleClickSelf = async () => {
        router.push("/dashboard")
    }

    const txtColor = darkTheme? "white" : "black";

    return (
        <>
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            size="xs"
            blockScrollOnMount={false}
        >
            <DrawerContent textColor={txtColor} bg={darkTheme ? "brand.bodyDark" : "brand.bodyLight"}>
            <DrawerCloseButton />
            <DrawerHeader>
                <Box textAlign="center" fontSize="20px" marginTop="50px">
                    Hello
                </Box>
                <Box textAlign="center" fontSize="35px">
                    {user}
                </Box>

            </DrawerHeader>
                <DrawerBody>
                    <Box borderColor="white" borderWidth="1px" borderRadius="20px" w="100%" p="20px" >
                        <Button 
                            onClick={handleClickFeed}
                            width="100%" h="40px" marginTop="20px" fontSize="20px" bg="rgba(255,255,255,0.85)">
                            View Feed
                        </Button>
                        <Button 
                            onClick={handleClickSelf}
                            width="100%" h="40px" marginTop="40px" fontSize="20px" bg="rgba(255,255,255,0.85)">
                            Your Posts
                        </Button>
                        <Button width="100%" h="40px" marginTop="40px" fontSize="20px" bg="rgba(255,255,255,0.85)">
                            Liked Posts
                        </Button>
                        <Button width="100%" h="40px" marginTop="40px" fontSize="20px" bg="rgba(255,255,255,0.85)">
                            Follows
                        </Button>
                        <Button width="100%" h="40px" marginTop="40px" fontSize="20px" bg="rgba(255,255,255,0.85)">
                            Followers
                        </Button>
                        <Button 
                            onClick={logoutRedirect}
                            width="100%" h="40px" marginTop="40px" marginBottom="20px" fontSize="20px" bg="rgba(255,255,255,0.85)">
                            Log out
                        </Button>
                    </Box>

                </DrawerBody>
            </DrawerContent>
        </Drawer>
        </>
    )
}