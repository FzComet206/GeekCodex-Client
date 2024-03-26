"use client"
import React from "react"
import MainPage from '../../utils/mainPage';
import ContentBody from './components/contentBody';

export default function Home() {
  return (
      <MainPage ContentBody={ContentBody}/>
  );
}
