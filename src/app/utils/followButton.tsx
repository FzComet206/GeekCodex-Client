import { Button, Box } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../../../context/appContext";
import { useRouter } from "next/navigation"

export function FollowButton({followed, id, p}:any){

    const { setFollowUpdate, setCurrFollowId, isLoggedIn } = useContext(AppContext) || {};
    const router = useRouter();

    const handleFollow = async (e: any) => {
        e.stopPropagation();
        if (!isLoggedIn) {
            router.push("/auth/login")
            return
        }
        console.log("client side follow call")
        try
        {
            await axios.get(`/api/follow?authorid=${id}`)
            setFollowUpdate(true)
            setCurrFollowId(id)

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