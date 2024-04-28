'use client';
import { createContext, useEffect, useState } from "react";
import { food_list } from "../Components/MenuItems";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [likedItems, setLikedItems] = useState([]);
    const [cartItems, setCartItems] = useState({});
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
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const toggleLike = (itemId) => {
        if (likedItems.includes(itemId)) {
            setLikedItems((prevLikedItems) => prevLikedItems.filter((item) => item !== itemId));
        } else {
            setLikedItems((prevLikedItems) => [...prevLikedItems, itemId]);
        }
    };

    useEffect(() => {
        console.log("Liked items:", likedItems);
    }, [likedItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        likedItems,
        toggleLike

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;