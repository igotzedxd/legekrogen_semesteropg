import { FaShoppingCart } from "react-icons/fa";
import styles from "./shoppingCartIcon.module.css";

function ShoppingCartIcon({ cartLength, toggleCart }) {
  return (
    <div className={styles.shoppingCart} onClick={toggleCart}>
      <span className={styles.cartCount}>{cartLength}</span>
      <FaShoppingCart />
    </div>
  );
}

export default ShoppingCartIcon;
