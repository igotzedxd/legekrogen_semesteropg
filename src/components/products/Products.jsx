import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./productCard/ProductCard";
import MyFavorites from "./myFavorites/MyFavorites";
import styles from "./products.module.css";
import { AppContext } from "../../context/AppContext";
import Loader from "../loader/Loader";

function Products({ rec }) {
  const { data, error, loading } = useContext(AppContext);

  //recommended products sorting by product.recommended IF rec is true
  const products = rec ? data?.filter((product) => product.recommended) : data;

  (error) => console.log("error: ", error);

  return (
    <>
      {!loading ? (
        <>
          <div className={styles.productContainer}>
            {products?.map((product, index) => (
              <Link to={`/produkter/${product._id}`} key={index}>
                <ProductCard id={product._id} product={product} />
              </Link>
            ))}
          </div>
          <MyFavorites />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Products;
