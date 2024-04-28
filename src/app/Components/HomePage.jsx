'use client';
import { useState } from 'react';
import Menu from '../menu/Menu'
import Navbar from './Navbar'
import FoodDisplay from './FoodDisplay/FoodDisplay';

const HomePage = () => {
const[category,SetCategory] = useState("All");

  return (
    <>
<Navbar />
<Menu category ={category} SetCategory={SetCategory}/>
<FoodDisplay category={category}/>
    </>
  )
}

export default HomePage