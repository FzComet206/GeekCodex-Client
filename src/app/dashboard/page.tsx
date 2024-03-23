"use client"
import React from "react"
import MainPage from '../mainPage'
import SelfContent from "./components/selfContent";

export default function Home() {
  return (
      <MainPage ContentBody={SelfContent}/>
  );
}
