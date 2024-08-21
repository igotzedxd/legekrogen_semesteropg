import styles from "./footer.module.css";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.contact}>
          <h3 className="cursive">Kundeservice</h3>
          <span>
            <FaEnvelope />
            <a href="#">kontakt@legehjørnet.dk</a>
          </span>
          <span>
            <FaPhone />
            <span>+45 23 45 67 89</span>
          </span>
        </div>
        <div className={styles.socials}>
          <h3 className="cursive">Følg os</h3>
          <span>
            <FaFacebook style={{cursor: "pointer"}}/>
            <FaInstagram style={{cursor: "pointer"}}/>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
