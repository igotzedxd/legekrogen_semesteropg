import DeliveryMessage from "./components/deliveryMessage/DeliveryMessage";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import styles from "./layout.module.css";
import NewsletterForm from "./components/newsletterForm/NewsletterForm";
import NewsletterContainer from "./components/newsletterContainer/NewsletterContainer";

function Layout({ children, page }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <DeliveryMessage />
        <Header />
        <Hero />
      </div>
      {children}
      {page === "" ? <NewsletterForm /> : <NewsletterContainer />}
      <Footer />
    </div>
  );
}

export default Layout;
