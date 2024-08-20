import { FaRegTrashCan } from "react-icons/fa6";
import CartCounter from "../cartCounter/CartCounter";
import styles from "./cartDropdown.module.css";

function CartDropdown({ activeCart, cart, handleCart, totalPrice }) {
  return (
    activeCart && (
      <div className={styles.cartDropdown}>
        {cart.length > 0 && (
          <div className={styles.clearCartContainer}>
            <FaRegTrashCan
              className={styles.clearCartIcon}
              onClick={(e) => handleCart(e, "clear")}
            />
          </div>
        )}
        {cart.length > 0 ? (
          <>
            {cart.map((product, index) => (
              <div key={index} className={styles.cartItem}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.cartItemImage}
                />
                <div className={styles.cartItemDetails}>
                  <p>{product.title}</p>
                  <p>{product.price * product.count} kr</p>
                </div>
                <CartCounter product={product} />
              </div>
            ))}
            <div className={styles.checkoutContainer}>
              <button className={styles.checkoutButton}>Til Checkout</button>
              <p>
                Pris i alt: <br /> {totalPrice} kr
              </p>
            </div>
          </>
        ) : (
          <p>Kurven er tom</p>
        )}
      </div>
    )
  );
}

export default CartDropdown;
