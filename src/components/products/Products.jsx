import { useState, useEffect } from "react";
import styles from "./products.module.css";
import useFetch from "../hooks/useFetch";
import ProductCard from "../productCard/ProductCard";

function Products() {
  const { data: products, error } = useFetch(
    "https://legekrogen.webmcdm.dk/products"
  );
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
      {productList.map((product) => (
        <ProductCard
          key={product.index}
          name={product.title}
          imgURL={product.image}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default Products;
