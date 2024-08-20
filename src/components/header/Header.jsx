import { useState, useContext } from "react";
import styles from "./header.module.css";
import Logo from "../logo/Logo";
import NavigationMenu from "../navigationMenu/NavigationMenu";
import ShoppingCartIcon from "../shoppingCartIcon/ShoppingCartIcon";
import CartDropdown from "../cartDropdown/CartDropdown";
import { AppContext } from "../../context/AppContext";

// Main Header Component
function Header() {
  const [activeBM, setActiveBM] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const { cart, handleCart } = useContext(AppContext);

  function navMenu() {
    setActiveBM((prev) => !prev);
    setActiveCart(false);
  }

  function toggleCart() {
    setActiveCart((prev) => !prev);
  }

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.count,
    0
  );

  return (
    <div>
      <div className={styles.container}>
        <Logo onClick={() => setActiveBM(false)} />
        <ShoppingCartIcon cartLength={cart.length} toggleCart={toggleCart} />
        <NavigationMenu activeBM={activeBM} navMenu={navMenu} />
      </div>
      <CartDropdown
        activeCart={activeCart}
        cart={cart}
        handleCart={handleCart}
        totalPrice={totalPrice}
      />
    </div>
  );
}

export default Header;
