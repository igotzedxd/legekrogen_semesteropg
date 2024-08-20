import { FaXmark } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./navigationMenu.module.css";

function NavigationMenu({ activeBM, navMenu }) {
  return (
    <div className={styles.burgerMenu}>
      {!activeBM ? (
        <RxHamburgerMenu onClick={navMenu} />
      ) : (
        <FaXmark onClick={navMenu} />
      )}
      <ul className={`${styles.nav} ${activeBM ? styles.show : ""}`}>
        <li>
          <a href="/produkter">Produkter</a>
        </li>
        <li>
          <a href="/FAQ">FAQ</a>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
