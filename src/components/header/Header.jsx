import { useState, useEffect, useContext } from "react";
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
  }

  function toggleCart() {
    setActiveCart((prev) => !prev);
  }

  return (
    <div>
      <div className={styles.container}>
        <img src="/logo/legekrogen_logo.png" alt="" className={styles.logo} />
        <div className={styles.shoppingCart} onClick={toggleCart}>
          <FaShoppingCart />
          <span className={styles.cartCount}>{cart.length}</span>
        </div>
        <NavLink className={styles.logo} to={"/"}>
          <img src="/logo/legekrogen_logo.png" alt="" />
        </NavLink>
        <div className={styles.burgerMenu}>
          {!activeBM ? <RxHamburgerMenu onClick={navMenu} /> : <FaXmark onClick={navMenu} />}
        </div>
      </div>
      <ul className={`${styles.nav} ${activeBM ? styles.show : ""}`}>
        <li>
          <a href="/produkter">Produkter</a>
        </li>
        <li>
          <a href="/faq">FAQ</a>
        </li>
        <li>
          <a href="/kundeklub">
            <p>Nyhedsbrev</p>
          </a>
        </li>
      </ul>
      {activeCart && (
        <div className={styles.cartDropdown}>
          <FaRegTrashCan onClick={() => handleCart("clear")} />
          {cart.length > 0 ? (
            cart.map((product, index) => (
              <div key={index} className={styles.cartItem}>
                <img src={product.image} alt={product.name} className={styles.cartItemImage} />
                <div className={styles.cartItemDetails}>
                  <p>{product.name}</p>
                  <p>{product.price} kr</p>
                  <p>{product.count}</p>
                </div>
                <button
                  className={styles.removeButton}
                  onClick={() => handleCart("remove", product)}
                >
                  &times;
                </button>
                <button onClick={() => handleCart("dec", (product = product))}>-</button>
                <button onClick={() => handleCart("inc", (product = product))}>+</button>
              </div>
            ))
          ) : (
            <p>Cart is empty</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
