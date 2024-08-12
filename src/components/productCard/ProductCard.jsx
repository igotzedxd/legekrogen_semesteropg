import styles from "../productCard/productCard.module.css";

const ProductCard = ({ name, description, imgURL, price }) => {
  return (
    <div className={styles.productDiv}>
      <img src={imgURL} className={styles.productImg}></img>
      <h2 className={styles.productName}>{name}</h2>
      <h3 className={styles.productDescription}>{description}</h3>
      <h3 className={styles.productPrice}>{price} kr</h3>
    </div>
  );
};

export default ProductCard;
