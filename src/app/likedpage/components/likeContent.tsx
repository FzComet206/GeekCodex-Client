import { Box, Wrap, WrapItem} from "@chakra-ui/react";
import { Preview } from "../../utils/preview";
import { AppContext } from "../../../../context/appContext";
import { Global, css } from "@emotion/react";

import React, { useContext, useState, useEffect } from "react";

// using the dashboard post hook here
import { usePosts } from "./postHook"
import { BlankPreview } from "../../utils/skeleton";

export default function LikeContent(){

    // styles
    const {darkTheme, flip, setFlip} = useContext(AppContext) || {};
    const styledScroll = css `
        ::-webkit-scrollbar {
        width: 15px;
        }

        ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.2);
        }

        ::-webkit-scrollbar-thumb {
        background-color: #a0a0a0;
        border-radius: 8px;
        border: 2px solid #f0f0f0;
        }

        ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0);
        }
    `

    // get hooks and set limit
    const { loading, hasMore, posts, setPosts, setPage, page } = usePosts(4);
    const [ scrolled, setScrolled ] = useState(false);
    const [ initial, setInitial ] = useState(true);

    // append skeletons to the end of the posts
    let numSkeletons = 4 + (4 - posts.length % 4);

    const OnReset = () => {
        setPosts([]);
        setPage(1);
        setInitial(true);
    }
    
    useEffect(() => {
        if (flip) {
            OnReset();
            setFlip(false);
        }

        const scrollBox = document.getElementById("mainScroll");
        
        if (initial){
            setPage(page + 1)
            setInitial(false);
        }

        if (scrollBox) {
            scrollBox.onscroll = () => {
                if (
                    // this condition triggers requests
                    scrollBox?.scrollTop >=
                        scrollBox?.scrollHeight -
                            scrollBox?.offsetHeight -
                            1200 && hasMore && !scrolled && !loading 
                    ) {
                    
                    console.log("scrolling: " + page)
                    setScrolled(true);
                    setPage(page + 1);
                    // scrolling is logged 3 times, but request is only sent 2 times
                } else {
                    setScrolled(false);
                }
            };
        }
    })

    return (
        <>
            <Global styles={styledScroll}></Global>
            <Box 
                bg={darkTheme? "brand.bodyDark" : "brand.bodyLight"} 
                className="content"
                id="mainScroll"
                >

                <Wrap marginLeft="18px">


                {
                    posts.map((post) => {
                        return (
                            <WrapItem key={post.id}>
                                <Preview key={post.id} {...post} />
                            </WrapItem>
                        )
                    })
                }

                {
                    Array.from({ length: numSkeletons}).map((_, index) => {
                        return (
                            <BlankPreview key={index} />
                        )
                    })
                }

                </Wrap>

            </Box>
        </>
    )
}
