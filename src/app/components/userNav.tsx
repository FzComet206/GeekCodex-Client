import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../../context/appContext";
import { Avatar, AvatarBadge, Box, useDisclosure} from "@chakra-ui/react";
import { Profile } from "./profile";

export function UserNav() {

    const {user} = useContext(AppContext) || {};

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box position="relative" left="18%" w="150px" marginTop="23px" fontSize="35px" textColor="white"> 
            <Avatar  
                w="70px" 
                h="70px" 
                src="img/avatar.png" 
                transition="transform 0.1s"
                cursor="pointer"
                _hover={{
                    transform: 'scale(1.05)', 
                }}
                onClick={onOpen}
            >
                <AvatarBadge  bg='tomato' boxSize='1.5em'>
                    {(user as any).at(0).toUpperCase() || "U"}
                </AvatarBadge>
            </Avatar>
            <Profile isOpen={isOpen} onClose={onClose} onOpen={onOpen}></Profile>
        </Box>
    )
}