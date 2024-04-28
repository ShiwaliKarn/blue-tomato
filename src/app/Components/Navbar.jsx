'use client';

import styles from '../Styles/navbar.module.css'
import Image from 'next/image'
import { TiShoppingCart } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';

const Navbar = () => {

    const[menu, setMenu] = useState("Home");
    return (
        <nav className={styles.navbar}>
            <Image className={styles.logo} src='/favicon.png' width={80} height={100} alt='blue tomato logo' priority></Image>
            <ul className={styles.navbar_menu}>
                <li onClick={() =>setMenu("Home")} className={menu==="Home"?styles.active:""}>Home</li>
                <li onClick={() =>setMenu("Menu")} className={menu==="Menu"?styles.active:""}>Menu</li>
                <li onClick={() =>setMenu("Contact Us")} className={menu==="Contact Us"?styles.active:""}>Contact Us</li>
            </ul>
            <div className={styles.navbar_right}>
                <CiSearch className={styles.CiSearch}/>
                <div className={styles.navbar_search_icon}>
                    <TiShoppingCart className={styles.TiShoppingCart}/>
                    <div className={styles.dot}></div>
                </div>
                <button>Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar