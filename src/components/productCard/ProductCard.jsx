import styles from "../productCard/productCard.module.css";

const ProductCard = ({ name, description, imgURL, price }) => {
  return (
    <div className={styles.productDiv}>
      <img src={imgURL} className={styles.productImg}></img>
      <div className={styles.productTextDiv}>
        <p className={styles.productName}>{name}</p>
        <h3 className={styles.productDescription}>{description}</h3>
      </div>
      <div className={styles.priceDiv}>
        <h3 className={styles.productPrice}>{price} kr</h3>
      </div>
    </div>
  );
};

export default ProductCard;
