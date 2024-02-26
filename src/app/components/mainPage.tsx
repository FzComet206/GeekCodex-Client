"use client"
import axios from "axios";
import { Box, } from "@chakra-ui/react";
import React, { ReactNode, useEffect, useState } from "react";
import { JsonData } from "../../../types";


export default function MainPage() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:3001/api")
        .then((res) => {
            setData(res.data);
            setLoading(false);
        })

    }, []);

  return (
    <Box>
        {loading ? (
            <h1>Loading...</h1>
        ) : (
            <div>
                <h1>{(data as unknown as JsonData)?.title}</h1>
                <h2>{(data as unknown as JsonData)?.ingredients as ReactNode}</h2> 
                <h2>{(data as unknown as JsonData)?.creator}</h2>
                <h3>{(data as unknown as JsonData)?.description}</h3>
                <h3>{(data as unknown as JsonData)?.ratings}</h3>
                <h3>{(data as unknown as JsonData)?.views}</h3>
                <h3>{(data as unknown as JsonData)?.likes}</h3>
                <h3>{(data as unknown as JsonData)?.comments}</h3>
            </div>
        )}

    </Box>
  );
}