"use client"
import axios from "axios";
import { Box, } from "@chakra-ui/react";
import React, { ReactNode, useEffect, useState } from "react";
import { JsonData } from "../../../types";
import MainPageLoading from "./mainPageLoading";


export default function MainPage() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const serverApi = process.env.NEXT_PUBLIC_SERVER_API;

        if (serverApi) {
            axios.get(serverApi)
                .then((res) => {
                    setData(res.data);
                    setLoading(false);
                });
        } else {
            console.error("SERVER_API environment variable is not defined.");
        }
    }, []);

  return (
    <Box>
        {loading ? (
            <MainPageLoading />
        ) : (
            <Box bg='brand.800'className="fullsize" >
                <h1>{(data as unknown as JsonData)?.title}</h1>
                <h2>{(data as unknown as JsonData)?.ingredients as ReactNode}</h2> 
                <h2>{(data as unknown as JsonData)?.creator}</h2>
                <h3>{(data as unknown as JsonData)?.description}</h3>
                <h3>{(data as unknown as JsonData)?.ratings}</h3>
                <h3>{(data as unknown as JsonData)?.views}</h3>
                <h3>{(data as unknown as JsonData)?.likes}</h3>
                <h3>{(data as unknown as JsonData)?.comments}</h3>
            </Box>
        )}

    </Box>
  );
}