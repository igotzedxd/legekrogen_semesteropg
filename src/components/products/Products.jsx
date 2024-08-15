import { useState, useEffect, useContext } from "react";
import styles from "./products.module.css";
import useFetch from "../hooks/useFetch";
import ProductCard from "../productCard/ProductCard";
import { AppContext } from "../../context/AppContext";

function Products() {
  const { data: products, error } = useContext(AppContext);
import { NavLink } from "react-router-dom";
import MyFavorites from "../myFavorites/MyFavorites";

  useEffect(() => {
    if (products.length > 0) {
      setProductList(products);
    }
    console.log(productList);
  }, [products, productList]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className={styles.productContainer}>
      {productList.map((product, index) => (
        <ProductCard key={index} id={product._id} product={product} />
      ))}
    </div>
    <>
      <MyFavorites />
      <div className={styles.productContainer}>
        {productList.map((product, index) => (
          <NavLink to={`/produkter/${product._id}`} key={index}>
            <ProductCard id={product._id} product={product} />
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Products;
