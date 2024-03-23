import { Button, Box } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../../../context/appContext";

export function FollowButton({followed, setFollowed, id, p}:any){

    const { setFlip } = useContext(AppContext) || {};

    const handleFollow = async (e: any) => {
        e.stopPropagation();
        console.log("client side follow call")
        try
        {
            await axios.get(`/api/follow?authorid=${id}`)
            setFlip(true)
            setFollowed(!followed)
        } catch (error) {
            console.error(error)
        }
    }

    const w = p ? "65px" : "85px";
    const h = p ? "25px" : "35px";
    const fs = p ? "" : "20px";

    return (
        <>
            {
                followed?
                <Box>
                    <Button 
                        onClick={handleFollow}
                        w={w} h={h} fontSize={fs} bg="#EAC435">Unfollow
                    </Button>
                </Box>
                :
                <Box>
                    <Button 
                        onClick={handleFollow}
                        w={w} h={h} fontSize={fs} bg="rgba(255,255,255,0.5)">Follow
                    </Button>
                </Box>
            }
        </>
    )
}