import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import styles from "../myFavorites/myFavorites.module.css";
import { NavLink } from "react-router-dom";

const MyFavorites = () => {
  const { data } = useFetch("https://legekrogen.webmcdm.dk/products");
  const [likedIDArray, setlikedIDArray] = useState([]);

  useEffect(() => {
    updateLikedArray();

    const handleCustomEvent = () => {
      updateLikedArray();
    };

    window.addEventListener("favoritesUpdated", handleCustomEvent);

    return () => {
      window.removeEventListener("favoritesUpdated", handleCustomEvent);
    };
  }, []);

  const updateLikedArray = () => {
    const liked = JSON.parse(localStorage.getItem("likedProducts"));
    if (liked) {
      setlikedIDArray(liked);
    } else {
      setlikedIDArray([]);
    }
  };

  return (
    <section className={styles.myFavoritesDiv}>
      <h1>MY FAVORITES</h1>
      <ul className={styles.list}>
        {data && likedIDArray.length > 0 ? (
          likedIDArray.map((productId) => {
            const likedProduct = data.find((r) => r._id === productId);
            if (!likedProduct) return null; // Skip if product not found

            return (
              <li key={productId}>
                <NavLink to={`/produkter/${likedProduct._id}`}>
                  {likedProduct.title.toUpperCase()}
                </NavLink>
              </li>
            );
          })
        ) : (
          <li>No favorites found.</li>
        )}
      </ul>
    </section>
  );
};

export default MyFavorites;