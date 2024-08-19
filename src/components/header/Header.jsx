import { useState, useContext } from "react";
import styles from "./header.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegTrashCan, FaXmark } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { AppContext } from "../../context/AppContext";
import { NavLink } from "react-router-dom";

function Header() {
  const [activeBM, setActiveBM] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const { cart, handleCart } = useContext(AppContext);

  function navMenu(event) {
    setActiveBM((prev) => !prev);
    setActiveCart(false);
  }

  function toggleCart() {
    setActiveCart((prev) => !prev);
  }

  // Calculate the total price
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.count,
    0
  );

  return (
    <div>
      <div className={styles.container}>
        <NavLink className={styles.logo} to={"/"} onClick={() => setActiveBM(false)}>
          <img src="/logo/legekrogen_logo.png" alt="" />
        </NavLink>{" "}
        <div className={styles.shoppingCart} onClick={toggleCart}>
          <FaShoppingCart />
          <span className={styles.cartCount}>{cart.length}</span>
        </div>
        <div className={styles.burgerMenu}>
          {!activeBM ? (
            <RxHamburgerMenu onClick={navMenu} />
          ) : (
            <FaXmark onClick={navMenu} />
          )}
        </div>
      </div>
      <ul className={`${styles.nav} ${activeBM ? styles.show : ""}`}>
        <li>
          <a href="/produkter">Produkter</a>
        </li>
        <li>
          <a href="/FAQ">FAQ</a>
        </li>
      </ul>
      {activeCart && !activeBM && (
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
                  <p>{product.count}</p>
                  <button
                    className={styles.incButton}
                    onClick={(e) => handleCart(e, "inc", product)}
                  >
                    +
                  </button>
                  <button
                    className={styles.decButton}
                    onClick={(e) => handleCart(e, "dec", product)}
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
      )}
    </div>
  );
}

export default Header;
