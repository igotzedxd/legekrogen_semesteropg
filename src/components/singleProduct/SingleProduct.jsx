import styles from "./singleProduct.module.css";

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
          <p>Price: {product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
