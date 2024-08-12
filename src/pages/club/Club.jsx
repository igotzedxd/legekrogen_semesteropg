import styles from "./club.module.css";
import NewsletterForm from "../../components/NewsletterForm/NewsletterForm";
import DeliveryMessage from "../../components/deliveryMessage/DeliveryMessage";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";

function Club() {
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
      <NewsletterForm />
      <Footer />
    </div>
  );
}

export default Club;
