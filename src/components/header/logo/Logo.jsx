import { NavLink } from "react-router-dom";
import styles from "./logo.module.css";

function Logo({ onClick }) {
    return (
      <NavLink className={styles.logo} to={"/"} onClick={onClick}>
        <img src="/logo/legekrogen_logo.png" alt="Logo" />
      </NavLink>
    );
  };

export default Logo;