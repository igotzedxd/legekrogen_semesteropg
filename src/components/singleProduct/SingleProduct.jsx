import styles from "./singleProduct.module.css";
import CartCounter from "../cartCounter/CartCounter";

function SingleProduct({ product }) {
  
  return (
    <div className={styles.productContainer}>
      <div className={styles.inner}>
        <div className={styles.product}>
          <img src={product.image} alt={product.description} />
        </div>
        <div className={styles.info}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Pris: {product.price} kr</p>
          <CartCounter product={product} />
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
