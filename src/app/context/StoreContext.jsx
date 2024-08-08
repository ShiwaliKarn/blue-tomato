'use client';
import { createContext, useEffect, useState } from "react";
import { food_list } from "../Components/MenuItems";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [likedItems, setLikedItems] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
        }
    }, [])


    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }

        }
        return totalAmount;
    }

    const toggleLike = (itemId) => {
        if (likedItems.includes(itemId)) {
            setLikedItems((prevLikedItems) => prevLikedItems.filter((item) => item !== itemId));
        } else {
            setLikedItems((prevLikedItems) => [...prevLikedItems, itemId]);
        }
    };

    useEffect(() => {
        console.log("Cart items:", cartItems);
        console.log("Liked items:", likedItems);
    }, [cartItems, likedItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        likedItems,
        toggleLike,
        getTotalCartAmount,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;