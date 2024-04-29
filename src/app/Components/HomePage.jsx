'use client';
import { useState } from 'react';
import Menu from '../menu/Menu'
import Navbar from './Navbar'
import FoodDisplay from './FoodDisplay/FoodDisplay';
import dynamic from 'next/dynamic';

const HomePage = () => {
  const [category, SetCategory] = useState("All");
  const[showLogin,setShowLogin] = useState(false);
  const DynamicLoginPopup = dynamic(() => import('./LoginPopup/LoginPopup.jsx'), { ssr: false });
  return (
    <>
    {showLogin?<DynamicLoginPopup setShowLogin={setShowLogin} /> : <> </>}
      <Navbar setShowLogin={setShowLogin}/>
      <Menu category={category} SetCategory={SetCategory} />
      <FoodDisplay category={category} />

    </>
  )
}

export default HomePage