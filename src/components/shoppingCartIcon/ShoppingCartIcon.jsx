import { FaShoppingCart } from "react-icons/fa";
import styles from "./shoppingCartIcon.module.css";

function ShoppingCartIcon({ cartLength, toggleCart }) {
  return (
    <div className={styles.shoppingCart} onClick={toggleCart}>
      <FaShoppingCart />
      <span className={styles.cartCount}>{cartLength}</span>
    </div>
  );
}

export default ShoppingCartIcon;
