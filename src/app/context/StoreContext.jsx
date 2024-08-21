"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [likedItems, setLikedItems] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post("/api/cart/add", { itemId }, { headers: { token } });
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if (token) {
      await axios.delete(
        "/api/cart/delete",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      "api/cart/get",
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData);
  };
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();

      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const fetchFoodList = async () => {
    const respone = await axios.get("/api/food/foodList");
    setFoodList(respone.data.data);
  };

  const toggleLike = (itemId) => {
    if (likedItems.includes(itemId)) {
      setLikedItems((prevLikedItems) =>
        prevLikedItems.filter((item) => item !== itemId)
      );
    } else {
      setLikedItems((prevLikedItems) => [...prevLikedItems, itemId]);
    }
  };

  // const toggleLike = async (itemId) => {
  //     if (likedItems.includes(itemId)) {
  //         setLikedItems((prevLikedItems) => prevLikedItems.filter((item) => item !== itemId));
  //     } else {
  //         setLikedItems((prevLikedItems) => [...prevLikedItems, itemId]);
  //     }
  //     if (token) {
  //         await axios.post('/api/cart/add', { itemId }, { headers: { token } })
  //     }
  // };

  useEffect(() => {
    console.log("Cart items:", cartItems);
    console.log("Liked items:", likedItems);
  }, [cartItems, likedItems]);

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

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
    setToken,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
