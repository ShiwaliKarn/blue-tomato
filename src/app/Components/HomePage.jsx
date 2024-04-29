'use client';

import { useState } from 'react';
import Menu from '../menu/Menu'
import Navbar from './Navbar'
import FoodDisplay from './FoodDisplay/FoodDisplay';
import LoginPopup from './LoginPopup/LoginPopup';
import dynamic from 'next/dynamic';


const HomePage = () => {
  const [category, SetCategory] = useState("All");
  const[showLogin,setShowLogin] = useState(false);
  const DynamicNavbar = dynamic(() => import('./Navbar'), { ssr: false });

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} /> : <> </>}
      <DynamicNavbar setShowLogin={setShowLogin}/>
      <Menu category={category} SetCategory={SetCategory} />
      <FoodDisplay category={category} />

    </>
  )
}

export default HomePage