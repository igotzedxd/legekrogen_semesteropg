import { useState, useEffect } from "react";
import styles from "./header.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";

function Header() {
  const [activeBM, setActiveBM] = useState(false);

  function navMenu(event) {
    setActiveBM((prev) => !prev);
  }

  return (
    <div>
      <div className={styles.container}>
        <img src="/logo/legekrogen_logo.png" alt="" className={styles.logo} />
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
          <a href="/faq">FAQ</a>
        </li>
        <li>
          <a href="/kundeklub">
            <p>Nyhedsbrev</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
