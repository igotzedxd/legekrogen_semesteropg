import { useContext } from "react";
import styles from "./cartCounter.module.css";
import { AppContext } from "../../context/AppContext";

function CartCounter({product}) {
  const { cart, handleCart } = useContext(AppContext);

  const item = cart.find((i) => i._id === product._id)
  console.log(item)

  return (
    <div className={styles.counterContainer}>
      <span>{item ? item.count : 0}</span>
      <button
        className={styles.incButton}
        onClick={(e) => handleCart(e, !item ? "add" : "inc", product)}
      >
        +
      </button>
      <button
        className={styles.decButton}
        onClick={(e) => handleCart(e, "dec", product)}
        disabled={!item}
      >
        -
      </button>
      <button
        className={styles.removeButton}
        onClick={(e) => handleCart(e, "remove", product)}
      >
        &times;
      </button>
    </div>
  );
}

export default CartCounter;
