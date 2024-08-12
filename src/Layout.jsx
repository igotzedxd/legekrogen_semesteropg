import DeliveryMessage from "./components/deliveryMessage/DeliveryMessage";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import styles from "./layout.module.css";
import NewsletterForm from "./components/NewsletterForm/NewsletterForm";
import NewsletterLink from "./components/NewsletterLink/NewsletterLink";

function Layout({ children, page }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <DeliveryMessage />
        <Header />
        <Hero
          src={"/heros/forsiden.jpg"}
          heading={"At lege er at leve"}
          text={"Her hos os har vi et stort udvalg af legetøj i høj kvalitet"}
          page={""}
        />
      </div>
      {children}
      {page === "club" ? <NewsletterForm /> : <NewsletterLink />}
      <Footer />
    </div>
  );
}

export default Layout;
