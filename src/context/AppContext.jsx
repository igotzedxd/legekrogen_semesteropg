import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

// Create a Context
export const AppContext = createContext();

// Create a Provider component
export const ContextProvider = ({ children }) => {
  const { data, error } = useFetch("https://legekrogen.webmcdm.dk/products");

  // grab cart from local storage or empty array
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartProducts")) || []);

  // function that takes types
  const handleCart = (e, type, product) => {
    e.preventDefault();

    setCart((prevCart) => {
      const productInCart = type !== "clear" && prevCart.find((item) => item._id === product._id);

      const updatedCart =
        type === "add"
          ? productInCart
            ? prevCart.map((item) =>
                item._id === product._id ? { ...item, count: item.count + 1 } : item
              )
            : [...prevCart, { ...product, count: 1 }]
          : type === "remove"
          ? prevCart.filter((item) => item._id !== product._id)
          : type === "dec"
          ? prevCart.reduce((acc, item) => {
              // acc is the accumulator. is it treated as an array.
              return item._id === product._id
                ? item.count > 1
                  ? [...acc, { ...item, count: item.count - 1 }]
                  : acc // if item found in cart initially had count: 1, it is not added to the new array and thus removed
                : [...acc, item];
            }, [])
          : type === "clear"
          ? []
          : prevCart; // if type passed in for some reason doesn't match, return as is

      // when we have updated the cart based on type, save it and return it to setCart
      localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  // handleCart END

  // return the provider with the value prop
  return (
    <AppContext.Provider value={{ data, cart, handleCart, error }}>{children}</AppContext.Provider>
  );
};
