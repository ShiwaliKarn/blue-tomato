'use client';

import styles from '../Styles/navbar.module.css'
import Image from 'next/image'
import { TiShoppingCart } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../context/StoreContext'
import Link from 'next/link';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("Home");
    const [scrollPosition, setScrollPosition] = useState(0);
    const {getTotalCartAmount} = useContext(StoreContext);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                const position = window.scrollY;
                setScrollPosition(position);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);



    return (
        <nav className={`${styles.navbar}`} style={{
            boxShadow: scrollPosition > 400 ? '0px 0px 18px #d1ccccd6' : 'none',
            backgroundColor: scrollPosition > 400 ? '#ffffff' : 'transparent',
            padding: scrollPosition > 400 ? '13px 30px' : '13px 0px',
            width: scrollPosition > 400 ? '100%' : ' ',
            position: scrollPosition > 400 ? 'fixed' : ' ',
            left: scrollPosition > 400 ? '0' : ' ',
            top: scrollPosition > 400 ? '0' : ' ',
        }}>
            <Link href='/'>
            <Image className={styles.logo} src='/favicon.png' width={80} height={100} alt='blue tomato logo' priority />
            </Link>

            <ul className={styles.navbar_menu}>
                <li onClick={() => setMenu("Home")} className={menu === "Home" ? styles.active : ""}>Home</li>
                <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? styles.active : ""}>Menu</li>
                <li onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? styles.active : ""}>Contact Us</li>
            </ul>
            <div className={styles.navbar_right}>
                <CiSearch className={styles.CiSearch} />
                <div className={styles.navbar_search_icon}>
                <Link href='/cart'>
                <TiShoppingCart className={styles.TiShoppingCart} />
                    <div className={getTotalCartAmount()===0?"":styles.dot}></div>
                    </Link>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar