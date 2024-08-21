import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const { data, error, loading } = useFetch("https://legekrogen.webmcdm.dk/products");

  // Grab cart from local storage or set to empty array if not found
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartProducts")) || []);

  // Function that handles cart operations based on the type
  const handleCart = (e, type, product, newCount) => {
    if (e) e.preventDefault();

    setCart((prevCart) => {
      const productInCart = type !== "clear" && prevCart.find((item) => item._id === product._id);

      const updatedCart =
        type === "clear"
          ? []
          : type === "add"
          ? productInCart
            ? prevCart.map((item) =>
                item._id === product._id ? { ...item, count: (item.count || 0) + 1 } : item
              )
            : [...prevCart, { ...product, count: 1 }]
          : type === "remove"
          ? prevCart.filter((item) => item._id !== product._id)
          : type === "inc"
          ? prevCart.map((item) =>
              item._id === product._id ? { ...item, count: (item.count || 0) + 1 } : item
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

  // Return the provider with the value prop
  return (
    <AppContext.Provider value={{ data, error, loading, cart, handleCart }}>
      {children}
    </AppContext.Provider>
  );
};
