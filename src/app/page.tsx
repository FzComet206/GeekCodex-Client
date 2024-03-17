"use client"
import React from "react"
import MainPage from './components/mainPage';
import ContentBody from './components/contentBody';

export default function Home() {
  return (
      <MainPage ContentBody={ContentBody}/>
  );
}
