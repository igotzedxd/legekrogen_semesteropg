import { useState, useEffect, useContext } from "react";
import styles from "./products.module.css";
import useFetch from "../hooks/useFetch";
import ProductCard from "../productCard/ProductCard";
import { AppContext } from "../../context/AppContext";
import MyFavorites from "../myFavorites/MyFavorites";
import { NavLink } from "react-router-dom";

function Products() {
  const { data: products, error } = useContext(AppContext);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className={styles.productContainer}>
        {products?.map((product, index) => (
          <ProductCard key={index} id={product._id} product={product} />
        ))}
      </div>
      <MyFavorites />
      <div className={styles.productContainer}>
        {products?.map((product, index) => (
          <NavLink to={`/produkter/${product._id}`} key={index}>
            <ProductCard id={product._id} product={product} />
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Products;
