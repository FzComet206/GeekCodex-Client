import { Box, Flex, List, Text} from "@chakra-ui/react";
import { AppContext } from "../../../../context/appContext";
import { Global, css } from "@emotion/react";

import React, { useContext, useState, useEffect } from "react";
import { useDashboard } from "./dashHook";
import { User, Activity } from "./rowformat";
import { DashboardRow } from "../../api/dashboard/route"
import { useRouter } from "next/navigation"

export default function ContentBody(){

    // styles
    const { darkTheme, setCurrTitle, setCurrSearchId} = useContext(AppContext) || {};
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
    const { loading, hasMore, setRow, setPage, row, page } = useDashboard(20);
    // get posts and page state
    const [ scrolled, setScrolled ] = useState(false);
    // append skeletons to the end of the posts
    const router = useRouter();

    const handleView = (id: number, name: string) => {
        // push to page with id, and fetch id
        setCurrSearchId(id)
        router.push("/user/" + name)
    }

    useEffect(() => {
        setCurrTitle("Dashboard")
        const scrollBox = document.getElementById("mainScroll");

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
                <Flex>
                    <Box h="10vh" className="dash" paddingTop="30px">
                        <Text textColor="cyan" fontSize="50px" textAlign="center">
                            Followers
                        </Text>
                    </Box>
                    <Box h="10vh" className="dash" paddingTop="30px">
                        <Text textColor="cyan" fontSize="50px" textAlign="center">
                            Following
                        </Text>
                    </Box>
                    <Box h="10vh" className="activities" paddingTop="30px">
                        <Text textColor="cyan" fontSize="50px" textAlign="center">
                            Activities
                        </Text>
                    </Box>
                </Flex>
                {
                    row.map((item: DashboardRow, index) => {
                        return (
                            <Flex key={index}>
                                <User 
                                    name={item.follower} 
                                    userid={item.followerid} 
                                    handle={handleView}
                                    ></User>
                                <User 
                                    name={item.following} 
                                    userid={item.followingid} 
                                    handle={handleView}
                                ></User>
                                <Activity 
                                    name={item.likeuser}
                                    userid={item.likeuserid} 
                                    title={item.likeposttitle} 
                                    timestamp={item.timestamp}
                                    handle={handleView}
                                ></Activity>
                            </Flex>
                        )
                    })
                }
            </Box>
        </>
    )
}
