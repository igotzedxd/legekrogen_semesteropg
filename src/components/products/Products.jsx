import { useState, useEffect } from "react";
import styles from "./products.module.css";
import useFetch from "../hooks/useFetch";
import ProductCard from "../productCard/ProductCard";
import { NavLink } from "react-router-dom";

function Products() {
  const { data: products, error } = useFetch("https://legekrogen.webmcdm.dk/products");
  const [productList, setProductList] = useState([]);

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
        <NavLink to={`/produkter/${product._id}`} key={index}>
          <ProductCard
            id={product._id}
            name={product.title}
            imgURL={product.image}
            description={product.description}
            price={product.price}
          />
        </NavLink>
      ))}
    </div>
  );
}

export default Products;
