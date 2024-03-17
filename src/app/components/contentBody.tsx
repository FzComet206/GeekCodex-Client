import { Box, Wrap, WrapItem} from "@chakra-ui/react";
import { Preview } from "./preview";
import { AppContext } from "../../../context/appContext";
import { Global, css } from "@emotion/react";

import React, { useContext, useState, useCallback, useRef, useEffect } from "react";
import { usePosts } from "./postHook";
import { BlankPreview } from "./skeleton";

export default function ContentBody(){

    // styles
    const {darkTheme } = useContext(AppContext) || {};
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
    const { posts, loading, hasMore, setPage } = usePosts(8);
    const [scrolled, setScrolled] = useState(false);

    let numSkeletons = 4 - posts.length % 4;
    if (posts.length < 4){
        numSkeletons = numSkeletons + 4;
    }

    useEffect(() => {
        const scrollBox = document.getElementById("mainScroll");

        if (scrollBox) {
            scrollBox.onscroll = () => {
                if (
                    scrollBox?.scrollTop >=
                        scrollBox?.scrollHeight -
                            scrollBox?.offsetHeight -
                            200 && !scrolled && hasMore
                    ) {
                    setScrolled(true);
                    setPage(prevPage => prevPage + 1);
                    console.log("scrolling")
                }
                
                if (loading) {
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

                <Wrap>

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
