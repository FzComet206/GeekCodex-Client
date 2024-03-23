"use client"
import React from "react"
import MainPage from '../utils/mainPage'
import LikeContent from "./components/likeContent";

export default function Home() {
  return (
      <MainPage ContentBody={LikeContent}/>
  );
}
