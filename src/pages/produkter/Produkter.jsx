import styles from "./produkter.module.css";
import Products from "../../components/products/Products";

function Produkter() {
  return (
    <div className={styles.contentDiv}>
      <Products />
    </div>
  );
}

export default Produkter;
