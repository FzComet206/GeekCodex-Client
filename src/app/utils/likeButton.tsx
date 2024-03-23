import { Button, Box } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export function LikeButton({likes, isLiked, id, p}:any){

    const [likesCount, setLikesCount] = useState(likes)
    const [liked, setLiked] = useState(isLiked)
    const handleLike = async (e: any) => {
        e.stopPropagation();
        console.log("client side like call")
        try
        {
            const res = await axios.get(`/api/like?postid=${id}`)
            setLikesCount(res.data.likes)
            setLiked(!liked)
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
                liked?
                <Box>
                    <Button 
                        onClick={handleLike}
                        w={w} h={h} fontSize={fs} bg="#7EB2DD">Liked: {likesCount}</Button>
                </Box>
                :
                <Box>
                    <Button 
                        onClick={handleLike}
                        w={w} h={h} fontSize={fs} bg="#D3FFE9">Like: {likesCount}</Button>
                </Box>
            }
        </>
    )
}