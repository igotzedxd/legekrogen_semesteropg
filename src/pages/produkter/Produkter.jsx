import styles from "./produkter.module.css";
import Products from "../../components/products/Products";

function Produkter() {
  return (
   
      <div className={styles.contentDiv}>
        <div className={styles.contentHeaderDiv}>
          <h2 className={`cursive ${styles.altVores} `}>Alt vores</h2>
          <h1 className={styles.leje}>LEJETØJ</h1>
        </div>

        <Products />
      </div>
     
  );
}

export default Produkter;
