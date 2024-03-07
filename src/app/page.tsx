import React, { useContext, useEffect, useState } from 'react';
import MainPage from './components/mainPage';
import { AppContext } from '../../context/appContext';
import { me } from '@/lib/api/me';

export default function Home() {
  return (
      <MainPage/>
  );
}
