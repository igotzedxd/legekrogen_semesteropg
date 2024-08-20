import React, { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const { data, error } = useFetch("https://legekrogen.webmcdm.dk/products");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartProducts")) || []
  );

  const handleCart = (e, type, product, newCount) => {
    if (e) e.preventDefault();
  
    setCart((prevCart) => {
      const productInCart = prevCart.find((item) => item._id === product._id);
  
      const updatedCart = type === "clear"
        ? []
        : type === "add"
        ? productInCart
          ? prevCart.map((item) =>
              item._id === product._id
                ? { ...item, count: (item.count || 0) + 1 }
                : item
            )
          : [...prevCart, { ...product, count: 1 }]
        : type === "remove"
        ? prevCart.filter((item) => item._id !== product._id)
        : type === "inc"
        ? prevCart.map((item) =>
            item._id === product._id
              ? { ...item, count: (item.count || 0) + 1 }
              : item
          )
        : type === "dec"
        ? prevCart.reduce((acc, item) => {
            if (item._id === product._id && item.count > 1) {
              acc.push({ ...item, count: item.count - 1 });
            } else if (item._id !== product._id) {
              acc.push(item);
            }
            return acc;
          }, [])
        : type === "updateCount"
        ? productInCart
          ? newCount > 0
            ? prevCart.map((item) =>
                item._id === product._id ? { ...item, count: newCount } : item
              )
            : prevCart.filter((item) => item._id !== product._id) // Remove item if count is 0
          : newCount > 0
          ? [...prevCart, { ...product, count: newCount }]
          : prevCart // Do nothing if newCount is 0 and item is not in cart
        : prevCart;
  
      localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  
  
  

  return (
    <AppContext.Provider value={{ data, cart, handleCart }}>
      {children}
    </AppContext.Provider>
  );
};

// function for each
/*   const addToCart = (product) => {
    const productInCart = cart.find((p) => p._id === product._id);

    if (!productInCart) {
      // Add the product to the cart with count: 1
      const newProduct = { ...product, count: 1 };
      const updatedCart = [...cart, newProduct];
      setCart(updatedCart);
      localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    } else {
      // Increase count by 1 if the product already exists in the cart
      const updatedCart = cart.map(
        (p) => p._id === product._id && { ...p, count: p.count + 1 }
      );
      setCart(updatedCart);
      localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    }
  };

  function removeFromCart(product) {
    const updatedCart = cart.filter((item) => item._id !== product._id);
    setCart(updatedCart);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
  } */
