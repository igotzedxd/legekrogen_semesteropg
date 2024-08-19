import { useEffect, useContext, useState } from "react";
import styles from "./singleProduct.module.css";
import { AppContext } from "../../context/AppContext";

function SingleProduct({ product }) {
  const { cart, handleCart } = useContext(AppContext);
  const [cartItem, setCartItem] = useState({});

  useEffect(() => {
    setCartItem(cart.find((item) => item._id === product._id));
  }, [cart, product]);
  return (
    <div className={styles.productContainer}>
      <div className={styles.inner}>
        <div className={styles.product}>
          <img src={product.image} alt={product.description} />
        </div>
        <div className={styles.info}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Pris: {product.price},-</p>
          <button
            onClick={(e) => handleCart(e, "add", (product = product))}
            className={styles.cartButton}
          >
            Tilføj
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
