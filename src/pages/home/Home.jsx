import Products from "../../components/products/Products.jsx";
import Reviews from "../../components/reviews/Reviews.jsx";
import styles from "./home.module.css";

function Home() {
  return (
    <>
      <div className={styles.contentDiv}>
        <div className={styles.contentHeaderDiv}>
          <h2 className={`cursive ${styles.altVores} `}>Et udpluk af vores</h2>
          <h1 className={styles.leje}>LEJETØJ</h1>
        </div>

        <Products rec={true} />
      </div>
      <Reviews />
    </>
  );
}

export default Home;
