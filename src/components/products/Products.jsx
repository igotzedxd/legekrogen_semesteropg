import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
import MyFavorites from "../myFavorites/MyFavorites";
import styles from "./products.module.css";
import { AppContext } from "../../context/AppContext";

function Products({ rec }) {
  const { data, error } = useContext(AppContext);

  const products = rec ? data?.filter((product) => product.recommended) : data;

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className={styles.productContainer}>
        {products?.map((product, index) => (
          <NavLink to={`/produkter/${product._id}`} key={index}>
            <ProductCard id={product._id} product={product} />
          </NavLink>
        ))}
      </div>
      <MyFavorites />
    </>
  );
}

export default Products;
