import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, MenuItem, MenuList, Menu, Box, MenuButton, MenuDivider, Switch, MenuItemOption, MenuOptionGroup } from "@chakra-ui/react"
import axios from "axios";
import React, { useContext, useEffect } from "react"
import { AppContext } from "../../../context/appContext";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@chakra-ui/icons";

export function Profile({onClose, isOpen, onOpen} : any) {

    const {darkTheme, setTheme, user, setUser, setIsLoggedIn, setCurrSort, setFlip, currSort, currTitle, setCurrTitle } = useContext(AppContext) || {};
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
        router.push("/homepage")
    }

    const handleClickSelf = async () => {
        router.push("/selfpage")
    }

    const handleClickLike = async () => {
        router.push("/likedpage")
    }

    const handleClickDashboard = async () => {
        router.push("/dashboard")
    }

    const handleSortLike = () => {
        setCurrSort("like")
        setFlip(true)
    }

    const handleSortTime = () => {
        setCurrSort("time")
        setFlip(true)
    }

    useEffect(() => {
        console.log(currSort)
        console.log(currTitle)
    })

    return (
        <>
        <Box display="block" fontSize="20px" textColor="black"> 
            <Menu closeOnSelect={false}>
                <MenuButton 
                    as={Button} rightIcon={<ChevronDownIcon />}
                    fontSize="20px"
                    h="45px"
                    bgColor="wheat"
                >
                    Profile
                </MenuButton>
                <MenuList bgColor="wheat">

                    <MenuOptionGroup title="View" value={currTitle} type="radio" fontSize="20px">
                        <MenuItemOption
                            _hover={{bgColor: "rgba(0,0,0,0.1)"}}
                            value="Geek Codex"
                            onClick={handleClickFeed}
                            fontSize="20px"
                            bgColor="wheat"
                        > 
                            Feed
                        </MenuItemOption>
                        <MenuItemOption
                            _hover={{bgColor: "rgba(0,0,0,0.1)"}}
                            value="Your Posts"
                            onClick={handleClickSelf}
                            fontSize="20px"
                            bgColor="wheat"
                        >
                            View your posts
                        </MenuItemOption>
                        <MenuItemOption
                            _hover={{bgColor: "rgba(0,0,0,0.1)"}}
                            value="Liked Posts"
                            onClick={handleClickLike}
                            fontSize="20px"
                            bgColor="wheat"
                        >
                            View liked posts
                        </MenuItemOption>
                        <MenuItemOption
                            _hover={{bgColor: "rgba(0,0,0,0.1)"}}
                            value="Dashboard"
                            onClick={handleClickDashboard}
                            fontSize="20px"
                            bgColor="wheat"
                        >
                            Dashboard
                        </MenuItemOption>
                    </MenuOptionGroup>

                    <MenuDivider />
                    
                    <MenuOptionGroup title="Theme" fontSize="20px" type="checkbox" value={darkTheme? "dark" : ""}>
                        <MenuItemOption 
                            _hover={{bgColor: "rgba(0,0,0,0.1)"}}
                            bgColor="wheat"
                            value="dark" fontSize="20px" onClick={()=>{setTheme(!darkTheme)}}>
                            Dark Mode
                        </MenuItemOption>
                    </MenuOptionGroup>

                    <MenuDivider/>

                    <MenuOptionGroup title="Sort by" fontSize="20px" defaultValue="time" type="radio">
                        <MenuItemOption 
                            _hover={{bgColor: "rgba(0,0,0,0.1)"}}
                            bgColor="wheat"
                            value="time" fontSize="20px" onClick={handleSortTime}>
                            Sort by created date
                        </MenuItemOption>
                        <MenuItemOption 
                            _hover={{bgColor: "rgba(0,0,0,0.1)"}}
                            bgColor="wheat"
                            value="like" fontSize="20px" onClick={handleSortLike}>
                            Sort by number of likes
                        </MenuItemOption>
                    </MenuOptionGroup>

                    <MenuDivider />

                    <MenuItem 
                        _hover={{bgColor: "rgba(0,0,0,0.1)"}}
                        bgColor="wheat"
                        onClick={logoutRedirect}>Log Out</MenuItem>

                </MenuList>

            </Menu>
        </Box>
        </>
    )
}