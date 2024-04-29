'use client';
import { useState } from 'react';
import Menu from '../menu/Menu'
import Navbar from './Navbar'
import FoodDisplay from './FoodDisplay/FoodDisplay';
import LoginPopup from './LoginPopup/LoginPopup';


const HomePage = () => {
  const [category, SetCategory] = useState("All");
  const[showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} /> : <> </>}
      <Navbar setShowLogin={setShowLogin}/>
      <Menu category={category} SetCategory={SetCategory} />
      <FoodDisplay category={category} />

    </>
  )
}

export default HomePage