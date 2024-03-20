import { Box, Wrap, WrapItem} from "@chakra-ui/react";
import { Preview } from "./preview";
import { AppContext } from "../../../context/appContext";
import { Global, css } from "@emotion/react";

import React, { useContext, useState, useEffect} from "react";
import { usePosts } from "./postHook";
import { BlankPreview } from "./skeleton";

export default function ContentBody(){

    // styles
    const { darkTheme } = useContext(AppContext) || {};
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
    const { loading, hasMore, setPosts, setPage, posts } = usePosts(4);
    // get posts and page state
    const [ scrolled, setScrolled ] = useState(false);
    const [ initial, setInitial ] = useState(true);

    // append skeletons to the end of the posts
    let numSkeletons = 4 + (4 - posts.length % 4);
    
    useEffect(() => {
        const scrollBox = document.getElementById("mainScroll");
        // set global 
        
        if (initial){
            setPage(2);
            setInitial(false);
        }

        if (scrollBox) {
            scrollBox.onscroll = () => {
                if (
                    // this condition triggers requests
                    scrollBox?.scrollTop >=
                        scrollBox?.scrollHeight -
                            scrollBox?.offsetHeight -
                            800 && hasMore && !scrolled && !loading 
                    ) {
                    
                    setScrolled(true);
                    setPage(prevPage => prevPage + 1);
                    console.log("scrolling")
                }
                else
                {
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
                    posts.map((post : any) => {
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
