"use client";

import styles from "../Styles/navbar.module.css";
import Image from "next/image";
import { TiShoppingCart } from "react-icons/ti";
import { useState, useEffect, useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import Link from "next/link";
import { IoBagHandleOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { GoHeartFill } from "react-icons/go";

const Navbar = ({ setShowLogin }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    router.push("/");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <nav
      className={`${styles.navbar}`}
      style={{
        boxShadow: scrollPosition > 50 ? "0px 0px 18px #d1ccccd6" : "none",
      }}
    >
      <Link href="/">
        <Image
          className={styles.logo}
          src="/favicon.png"
          width={80}
          height={100}
          alt="blue tomato logo"
          priority
        />
      </Link>

      <div className={styles.navbar_right}>
        <GoHeartFill className={styles.GoHeartFill} />
        <div className={styles.navbar_search_icon}>
          <Link href="/cart">
            <TiShoppingCart className={styles.TiShoppingCart} />
            <div className={getTotalCartAmount() === 0 ? "" : styles.dot}></div>
          </Link>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className={styles.navbar_profile}>
            <FaUser />
            <ul className={styles.nav_profile_dropdown}>
              <li>
                <IoBagHandleOutline />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <AiOutlineLogout />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
